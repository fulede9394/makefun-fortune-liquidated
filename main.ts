// A fortune for a liquidated trader, at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "You will lose everything, learn nothing, and return tomorrow anyway — the market loves a repeat customer.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
