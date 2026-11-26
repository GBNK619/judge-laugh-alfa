// Entry for make.fun's "Make the AI Judge Laugh" (alfasurya91).
// Writes one office-life joke, a single line, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My boss calls us a family, which explains why nobody gets paid and everyone argues at lunch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, LINE + "\n", "utf8");

// Read-back validation: the file on disk must hold exactly the line plus its
// single trailing newline — anything else means the entry is corrupt.
const written = readFileSync(entryPath, "utf8");
if (written !== LINE + "\n") {
  console.error(`entry.txt mismatch: expected ${JSON.stringify(LINE + "\n")}, got ${JSON.stringify(written)}`);
  process.exit(1);
}
