const readme = await Deno.readTextFile("./README.md");
const replaceUsedLanguages = await Deno.readTextFile("./replace.txt");

const replacer = (_: string, g1: string, g2: string): string => {
  return g1 + "\n" + replaceUsedLanguages + g2;
};

const replacedReadmeStr = readme.replace(
  /(<!-- MOST_USED_LANGUAGES:START -->)[\w\W\n]*(<!-- MOST_USED_LANGUAGES:END -->)/,
  replacer,
);

await Deno.writeTextFile("README.md", replacedReadmeStr);
