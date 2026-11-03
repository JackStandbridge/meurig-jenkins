import type { Language } from "../types/language";
import type {
  Card,
  CardGroup,
  HomeText,
  ImageFile,
  Link,
  MenuItem,
  PageData,
  PageText,
  Picture,
  Site,
  SiteLinks,
  SiteText,
  Translated,
} from "../types/content";

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import sizeOf from "image-size";

import { languages } from "../types/language";
import { siteLinkKeys, siteTextKeys } from "../types/content";

export const contentDirectory = path.join(process.cwd(), "content");
export const mediaDirectory = path.join(process.cwd(), "public", "media");
const mediaUrl = "/media";

const languageFiles: Record<Language, string> = {
  English: "english.md",
  Welsh: "welsh.md",
};

const settingsFile = "site.yml";
const homeFolder = "home";

const homeSettings = [
  "menu",
  "topLine",
  "bottomLine",
  "subtitle",
  "backgroundVideo",
];

const pageSettings = [
  "menu",
  "title",
  "video",
  "poster",
  "banner",
  "photos",
  "images",
  "pdfs",
];

type Folder = {
  name: string;
  relative: string;
  slugs: string[];
  directory: string;
  children: Folder[];
};

type Settings = {
  menu: string[];
  order: Record<string, string[]>;
  links: SiteLinks;
  text: Translated<SiteText>;
};

type Values = Record<string, unknown>;

export type Content = {
  site: Site;
  pages: PageData[];
};

export type ContentResult = {
  content: Content | null;
  problems: string[];
};

const isValues = (value: unknown): value is Values =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isStringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

const toSlug = (name: string): string =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const shown = (relative: string): string => `content/${relative}`;

const listDirectory = (directory: string): fs.Dirent[] =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .filter(({ name }) => !name.startsWith("."));

const readYaml = (
  source: string,
  where: string,
  lineOffset: number,
  problems: string[]
): unknown => {
  try {
    return yaml.load(source, { schema: yaml.FAILSAFE_SCHEMA });
  } catch (error) {
    if (error instanceof yaml.YAMLException) {
      problems.push(
        `${where}: the settings couldn't be read (line ${
          error.mark.line + lineOffset
        }: ${error.reason}). If a value contains a colon, put it in "quotes".`
      );
      return null;
    }

    throw error;
  }
};

const readSettings = (problems: string[]): Settings | null => {
  const where = shown(settingsFile);
  const file = path.join(contentDirectory, settingsFile);

  if (!fs.existsSync(file)) {
    problems.push(`${where} is missing.`);
    return null;
  }

  const values = readYaml(fs.readFileSync(file, "utf8"), where, 1, problems);

  if (values === null) {
    return null;
  }

  if (!isValues(values)) {
    problems.push(`${where} should be a list of settings.`);
    return null;
  }

  const known = ["menu", "order", "links", "english", "welsh"];

  Object.keys(values)
    .filter((key) => !known.includes(key))
    .forEach((key) =>
      problems.push(
        `${where}: "${key}" isn't a setting. The settings are: ${known.join(
          ", "
        )}.`
      )
    );

  const menu = values.menu ?? [];

  if (!isStringList(menu)) {
    problems.push(`${where}: "menu" should be a list of folder names.`);
  }

  const order = values.order ?? {};

  if (
    !isValues(order) ||
    !Object.values(order).every((list) => isStringList(list))
  ) {
    problems.push(
      `${where}: "order" should have a list of names under each folder name.`
    );
  }

  const links = values.links ?? {};

  if (!isValues(links)) {
    problems.push(`${where}: "links" should be a list of links.`);
  } else {
    Object.entries(links).forEach(([key, value]) => {
      if (!(siteLinkKeys as readonly string[]).includes(key)) {
        problems.push(
          `${where}: "${key}" isn't a link the site knows about. The links are: ${siteLinkKeys.join(
            ", "
          )}.`
        );
      } else if (typeof value !== "string") {
        problems.push(`${where}: the "${key}" link should be a single line.`);
      }
    });
  }

  const text = Object.fromEntries(
    languages.map((language) => {
      const key = language.toLowerCase();
      const strings = values[key];

      if (!isValues(strings)) {
        problems.push(`${where}: the "${key}" text is missing.`);
        return [language, null];
      }

      siteTextKeys.forEach((name) => {
        if (typeof strings[name] !== "string") {
          problems.push(`${where}: "${name}" is missing under "${key}".`);
        }
      });

      return [language, strings];
    })
  );

  return {
    menu: isStringList(menu) ? menu : [],
    order: isValues(order) ? (order as Record<string, string[]>) : {},
    links: isValues(links) ? (links as SiteLinks) : {},
    text: text as Translated<SiteText>,
  };
};

const sortFolders = (folders: Folder[], order: string[]): Folder[] => {
  const position = (folder: Folder): number => {
    const index = order.findIndex(
      (name) => name === folder.name || toSlug(name) === folder.slugs.at(-1)
    );

    return index === -1 ? order.length : index;
  };

  return [...folders].sort(
    (a, b) => position(a) - position(b) || a.name.localeCompare(b.name)
  );
};

const findFolders = (
  directory: string,
  relative: string,
  slugs: string[],
  settings: Settings,
  problems: string[]
): Folder[] => {
  const folders = listDirectory(directory)
    .filter((entry) => entry.isDirectory())
    .flatMap((entry): Folder[] => {
      const folderDirectory = path.join(directory, entry.name);
      const folderRelative = relative ? `${relative}/${entry.name}` : entry.name;
      const files = listDirectory(folderDirectory).map(({ name }) => name);

      const languageFileNames = Object.values(languageFiles);
      const wrongCase = files.filter(
        (name) =>
          !languageFileNames.includes(name) &&
          languageFileNames.includes(name.toLowerCase())
      );

      wrongCase.forEach((name) =>
        problems.push(
          `${shown(folderRelative)}/${name} should be called ${name.toLowerCase()} (all lowercase).`
        )
      );

      if (!files.some((name) => languageFileNames.includes(name))) {
        return [];
      }

      const slug = toSlug(entry.name);

      if (!slug) {
        problems.push(
          `${shown(folderRelative)}: the folder name needs some letters or numbers in it.`
        );
        return [];
      }

      const folderSlugs = [...slugs, slug];

      return [
        {
          name: entry.name,
          relative: folderRelative,
          slugs: folderSlugs,
          directory: folderDirectory,
          children: findFolders(
            folderDirectory,
            folderRelative,
            folderSlugs,
            settings,
            problems
          ),
        },
      ];
    });

  folders.forEach((folder, i) => {
    const clash = folders
      .slice(0, i)
      .find((other) => other.slugs.at(-1) === folder.slugs.at(-1));

    if (clash) {
      problems.push(
        `${shown(clash.relative)} and ${shown(
          folder.relative
        )} would have the same web address. Rename one of them.`
      );
    }
  });

  const order = relative ? settings.order[relative] ?? [] : settings.menu;

  return sortFolders(folders, order);
};

const readPageFile = (
  folder: Folder,
  language: Language,
  problems: string[]
): { values: Values; body: string; where: string } | null => {
  const fileName = languageFiles[language];
  const where = `${shown(folder.relative)}/${fileName}`;
  const file = path.join(folder.directory, fileName);

  if (!fs.existsSync(file)) {
    problems.push(
      `${shown(folder.relative)} is missing ${fileName}. Every page needs both ${Object.values(
        languageFiles
      ).join(" and ")}.`
    );
    return null;
  }

  const source = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  const match = source.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/);

  if (!match) {
    if (source.startsWith("---")) {
      problems.push(
        `${where}: the settings at the top need a line with just --- after them.`
      );
      return null;
    }

    return { values: {}, body: source, where };
  }

  const values = match[1].trim() ? readYaml(match[1], where, 2, problems) : {};

  if (values === null) {
    return null;
  }

  if (!isValues(values)) {
    problems.push(
      `${where}: the settings at the top should look like "title: My page".`
    );
    return null;
  }

  return { values, body: source.slice(match[0].length), where };
};

const findFile = (
  folder: Folder,
  name: string,
  where: string,
  problems: string[]
): string | null => {
  const parts = name.split("/");

  if (parts.some((part) => part === ".." || part === "")) {
    problems.push(
      `${where}: "${name}" should be the name of a file in the same folder.`
    );
    return null;
  }

  const file = path.join(folder.directory, ...parts);
  const directory = path.dirname(file);
  const base = path.basename(file);

  const siblings = fs.existsSync(directory) ? fs.readdirSync(directory) : [];

  if (siblings.includes(base)) {
    return file;
  }

  const sameApartFromCase = siblings.find(
    (sibling) => sibling.toLowerCase() === base.toLowerCase()
  );

  if (sameApartFromCase) {
    problems.push(
      `${where}: "${name}" is called "${sameApartFromCase}" in the folder. The capital letters need to match.`
    );
    return null;
  }

  problems.push(`${where}: there's no file called "${name}" in ${shown(folder.relative)}.`);
  return null;
};

const mediaSrc = (folder: Folder, name: string): string =>
  [mediaUrl, ...folder.relative.split("/"), ...name.split("/")]
    .map((part, i) => (i === 0 ? part : encodeURIComponent(part)))
    .join("/");

const readImage = (
  folder: Folder,
  name: string,
  where: string,
  problems: string[]
): ImageFile | null => {
  const file = findFile(folder, name, where, problems);

  if (!file) {
    return null;
  }

  try {
    const { width, height } = sizeOf(file);

    if (!width || !height) {
      throw new Error("No size");
    }

    return { src: mediaSrc(folder, name), width, height };
  } catch {
    problems.push(`${where}: "${name}" doesn't look like an image.`);
    return null;
  }
};

const pictureExample = `like this:
    - file: photo.jpeg
      description: What the picture shows`;

const readPicture = (
  folder: Folder,
  value: unknown,
  key: string,
  where: string,
  problems: string[]
): Picture | null => {
  if (
    !isValues(value) ||
    typeof value.file !== "string" ||
    typeof value.description !== "string"
  ) {
    problems.push(
      `${where}: each picture in "${key}" needs a file and a description, ${pictureExample}`
    );
    return null;
  }

  const image = readImage(folder, value.file, where, problems);

  return image ? { ...image, description: value.description } : null;
};

const readPictures = (
  folder: Folder,
  value: unknown,
  key: string,
  where: string,
  problems: string[]
): Picture[] => {
  if (typeof value === "undefined") {
    return [];
  }

  if (!Array.isArray(value)) {
    problems.push(`${where}: "${key}" should be a list of pictures, ${pictureExample}`);
    return [];
  }

  return value.flatMap(
    (item) => readPicture(folder, item, key, where, problems) ?? []
  );
};

const readText = (
  values: Values,
  key: string,
  where: string,
  problems: string[]
): string | null => {
  const value = values[key];

  if (typeof value === "undefined") {
    return null;
  }

  if (typeof value !== "string") {
    problems.push(`${where}: "${key}" should be a single line of text.`);
    return null;
  }

  return value.trim();
};

const requireText = (
  values: Values,
  key: string,
  where: string,
  problems: string[]
): string => {
  const text = readText(values, key, where, problems);

  if (text === null && typeof values[key] === "undefined") {
    problems.push(`${where}: "${key}" is missing.`);
  }

  return text ?? "";
};

const readVideo = (
  values: Values,
  where: string,
  problems: string[]
): string | null => {
  const video = readText(values, "video", where, problems);

  if (!video) {
    return null;
  }

  const fromLink = video.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/
  );

  if (fromLink) {
    return fromLink[1];
  }

  if (/^[\w-]+$/.test(video)) {
    return video;
  }

  problems.push(
    `${where}: "video" should be a YouTube link, or the code at the end of one.`
  );
  return null;
};

const checkSettingNames = (
  values: Values,
  allowed: string[],
  where: string,
  problems: string[]
): void => {
  Object.keys(values)
    .filter((key) => !allowed.includes(key))
    .forEach((key) =>
      problems.push(
        `${where}: "${key}" isn't a setting this page can have. The settings are: ${allowed.join(
          ", "
        )}.`
      )
    );
};

const readHomeText = (
  folder: Folder,
  language: Language,
  problems: string[]
): HomeText | null => {
  const file = readPageFile(folder, language, problems);

  if (!file) {
    return null;
  }

  const { values, where } = file;

  checkSettingNames(values, homeSettings, where, problems);

  const backgroundVideo = readText(values, "backgroundVideo", where, problems);

  return {
    menu: requireText(values, "menu", where, problems),
    topLine: requireText(values, "topLine", where, problems),
    bottomLine: requireText(values, "bottomLine", where, problems),
    subtitle: requireText(values, "subtitle", where, problems),
    backgroundVideo:
      backgroundVideo && findFile(folder, backgroundVideo, where, problems)
        ? mediaSrc(folder, backgroundVideo)
        : null,
  };
};

const readPageText = (
  folder: Folder,
  language: Language,
  problems: string[]
): PageText | null => {
  const file = readPageFile(folder, language, problems);

  if (!file) {
    return null;
  }

  const { values, body, where } = file;

  checkSettingNames(values, pageSettings, where, problems);

  const title = requireText(values, "title", where, problems);
  const poster = readText(values, "poster", where, problems);
  const pdfs = values.pdfs ?? [];

  if (!isStringList(pdfs)) {
    problems.push(`${where}: "pdfs" should be a list of file names.`);
  }

  return {
    title,
    menu: readText(values, "menu", where, problems) || title,
    body: body.trim(),
    video: readVideo(values, where, problems),
    poster: poster ? readImage(folder, poster, where, problems) : null,
    banner:
      typeof values.banner === "undefined"
        ? null
        : readPicture(folder, values.banner, "banner", where, problems),
    photos: readPictures(folder, values.photos, "photos", where, problems),
    images: readPictures(folder, values.images, "images", where, problems),
    pdfs: isStringList(pdfs)
      ? pdfs.flatMap((pdf) =>
          findFile(folder, pdf, where, problems) ? [mediaSrc(folder, pdf)] : []
        )
      : [],
  };
};

const translate = <T>(read: (language: Language) => T | null): Translated<T> | null => {
  const entries = languages.map((language) => [language, read(language)]);

  if (entries.some(([_, value]) => value === null)) {
    return null;
  }

  return Object.fromEntries(entries);
};

const flatten = (folders: Folder[]): Folder[] =>
  folders.flatMap((folder) => [folder, ...flatten(folder.children)]);

const pathFor = (folder: Folder): string =>
  folder.relative === homeFolder ? "/" : `/${folder.slugs.join("/")}`;

const readContent = (): ContentResult => {
  const problems: string[] = [];

  if (!fs.existsSync(contentDirectory)) {
    return { content: null, problems: ["The content folder is missing."] };
  }

  const settings = readSettings(problems);

  if (!settings) {
    return { content: null, problems };
  }

  const folders = findFolders(contentDirectory, "", [], settings, problems);
  const all = flatten(folders);

  const home = folders.find(({ relative }) => relative === homeFolder);

  if (!home) {
    problems.push(
      `There needs to be a folder called ${shown(homeFolder)} for the home page.`
    );
  } else if (home.children.length) {
    problems.push(
      `${shown(homeFolder)} can't have pages inside it. Move them to another folder.`
    );
  }

  const homeText = home
    ? translate((language) => readHomeText(home, language, problems))
    : null;

  const pageTexts = new Map(
    all
      .filter((folder) => folder !== home)
      .map((folder) => [
        folder,
        translate((language) => readPageText(folder, language, problems)),
      ])
  );

  if (problems.length || !homeText) {
    return { content: null, problems };
  }

  const texts = pageTexts as Map<Folder, Translated<PageText>>;

  const labelFor = (folder: Folder): Translated<string> =>
    Object.fromEntries(
      languages.map((language) => [
        language,
        folder === home
          ? homeText[language].menu
          : texts.get(folder)?.[language].menu ?? "",
      ])
    ) as Translated<string>;

  const linkFor = (folder: Folder): Link => ({
    path: pathFor(folder),
    label: labelFor(folder),
  });

  const cardFor = (folder: Folder): Card => {
    const text = texts.get(folder) as Translated<PageText>;

    return {
      path: pathFor(folder),
      title: { English: text.English.title, Welsh: text.Welsh.title },
      poster: { English: text.English.poster, Welsh: text.Welsh.poster },
    };
  };

  const groupsFor = (folder: Folder): CardGroup[] =>
    folder.children.reduce<CardGroup[]>((groups, child) => {
      if (child.children.length) {
        return [
          ...groups,
          { heading: cardFor(child), cards: child.children.map(cardFor) },
        ];
      }

      const last = groups.at(-1);

      if (last && last.heading === null) {
        return [
          ...groups.slice(0, -1),
          { ...last, cards: [...last.cards, cardFor(child)] },
        ];
      }

      return [...groups, { heading: null, cards: [cardFor(child)] }];
    }, []);

  const menu: MenuItem[] = folders.map((folder) => ({
    ...linkFor(folder),
    children: folder.children.map(linkFor),
  }));

  const pages: PageData[] = all.map((folder) =>
    folder === home
      ? { layout: "home", path: "/", text: homeText }
      : {
          layout: "standard",
          path: pathFor(folder),
          topLevel: folder.slugs.length === 1,
          text: texts.get(folder) as Translated<PageText>,
          groups: groupsFor(folder),
        }
  );

  return {
    content: {
      site: { menu, links: settings.links, text: settings.text },
      pages,
    },
    problems,
  };
};

export const describeProblems = (problems: string[]): string =>
  [
    problems.length === 1
      ? "There's a problem with the content:"
      : `There are ${problems.length} problems with the content:`,
    "",
    ...problems.map((problem) => `- ${problem}`),
  ].join("\n");

let cached: ContentResult | null = null;

export const loadContent = (): ContentResult => {
  if (cached && process.env.NODE_ENV === "production") {
    return cached;
  }

  cached = readContent();

  return cached;
};

export const getContent = (): Content => {
  const { content, problems } = loadContent();

  if (!content) {
    throw new Error(describeProblems(problems));
  }

  return content;
};
