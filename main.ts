// Laugh Track: The Crypto Trading Joke Contest
// Writes ONE funny line about crypto trading life to entry.txt
// (1-200 UTF-8 characters, punchline on the last words).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function resolveOutputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_PATH;
  if (env && env.trim().length > 0) return env;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

// v2 (revision): one turn, punchline on the last word. v1 stacked two
// jokes (screensaver + "we're still early") and the punchline split;
// this is a single setup -> inversion -> self-deluding payoff,
// tighter (103 chars) and a line a trader would repeat.
const JOKE =
  "My trading strategy is simple: buy high, sell low, and tell the group chat I'm accumulating.";

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
