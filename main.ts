// Entry for make.fun's "Make the AI Judge Laugh" (alfasurya91).
// Writes one office-life joke, a single line, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My boss calls us a family, which explains why nobody gets paid and everyone argues at lunch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
