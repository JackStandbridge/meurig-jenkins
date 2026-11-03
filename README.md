# Meurig Jenkins

Portfolio site for Meurig Jenkins.

Everything you see on the site lives in the [content](./content) folder. Change a file in there,
commit it, and the site rebuilds itself with your changes (it takes a couple of minutes).

## How the folders work

Each folder in `content` is a page, and the folder's name is the page's web address. So
`content/about` is the page at `/about`.

- A folder needs an `english.md` and a `welsh.md` (all lowercase). Each one is the whole page in
  that language.
- A folder with page folders inside it gets a dropdown in the menu, and its page shows a card for
  each page inside it. That's how `projects` and `shortfilms` work.
- Pictures, videos and PDFs go in the same folder as the page that uses them.
- `content/home` is always the home page.

To add a page, make a new folder with an `english.md` and a `welsh.md` in it. It'll show up in the
menu by itself. To rename a page, rename its folder.

## What goes in a page file

Each `english.md` or `welsh.md` starts with some settings between two `---` lines, then the text
of the page:

```
---
menu: about
title: About me
video: https://www.youtube.com/watch?v=lfQwtzRUTaU
---

I am a film maker from Aberystwyth...

## Credits
Directed by Meurig Jenkins
```

The settings (only `title` is needed, the rest are optional):

- `title`: the heading at the top of the page.
- `menu`: what the page is called in the menu, if that's different from the title.
- `video`: a YouTube link. It goes at the top of the page.
- `poster`: the picture used on this page's card, e.g. `poster: stanza.png`.
- `banner`: a big picture across the top of the page (like the PenDraig Films logo).
- `photos`: pictures shown side by side under the title (like on the about page).
- `images`: pictures shown in a slideshow.
- `pdfs`: PDF files to show on the page, as a list:

```
pdfs:
  - trosech-script-english.pdf
  - trosech-script-welsh.pdf
```

`banner`, `photos` and `images` all need a file name and a description of what the picture shows
(the description is read out to people who can't see the picture):

```
images:
  - file: stanza-reel-1.jpeg
    description: Two actors on a half built set
  - file: stanza-reel-2.jpeg
    description: The crew setting up a shot
```

The spaces at the start of those lines matter, so copy the pattern exactly. If a setting has a
colon in it (like `title: Trosech: Part One`), put it in quotes: `title: "Trosech: Part One"`.

The text below the settings can use `## A heading`, `- a bullet point`, `*italics*` and
`**bold**`.

The home page is a bit different: it has `topLine`, `bottomLine` and `subtitle` instead of a title,
and `backgroundVideo` for the video behind them.

## The menu order, and the rest

[content/site.yml](./content/site.yml) has the order of the menu, the order of the pages inside
each folder, the links for the icons at the bottom of the page, and a few small bits of text.
There are notes in the file explaining each part.

## Renaming or moving folders

GitHub's normal page can't rename a folder. Instead, press `.` (full stop) on the repo's page to
open the editor in your browser. In there you can right click a folder and rename it, or drag
files between folders. Commit from the "Source Control" tab on the left when you're done.

## If something's wrong

Every change gets checked before the site is rebuilt. If there's a problem, the commit gets a red
cross on GitHub, and the live site stays as it was. Click the red cross, then "Details" next to
"Check content", and it lists what needs fixing, e.g.:

```
- content/about/welsh.md: "title" is missing.
- content/projects/personal/luna/english.md: there's no file called "poster.jpeg" in content/projects/personal/luna.
```

Fix those and commit again, and the site will update. If "Check content" has a green tick but
the commit still has a red cross, it's the Vercel build that failed. I need to log in to see that
one, so let me know and I'll take a look at what went wrong.
