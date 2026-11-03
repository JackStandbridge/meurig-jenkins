import fs from "fs";
import path from "path";

import {
  contentDirectory,
  describeProblems,
  loadContent,
  mediaDirectory,
} from "../src/loader/loadContent";

const isMedia = (source: string): boolean => {
  const name = path.basename(source);

  if (name.startsWith(".")) {
    return false;
  }

  if (fs.statSync(source).isDirectory()) {
    return true;
  }

  return ![".md", ".yml"].includes(path.extname(name).toLowerCase());
};

const { problems } = loadContent();

if (problems.length) {
  console.error(`\n${describeProblems(problems)}\n`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      `${describeProblems(problems)}\n\nThe live site hasn't changed. Fix these and it will update.\n`
    );
  }

  process.exit(1);
}

fs.rmSync(mediaDirectory, { recursive: true, force: true });
fs.cpSync(contentDirectory, mediaDirectory, { recursive: true, filter: isMedia });

console.log("The content looks good.");
