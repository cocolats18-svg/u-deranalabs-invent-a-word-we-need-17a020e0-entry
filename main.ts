// Invent a Word We Need — u-deranalabs-invent-a-word-we-need-17a020e0
// Writes one invented word and its one-line definition to entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. This program checks that itself and refuses
// to write an entry that would fail the gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "callhearsal (n.): the private rehearsal of a phone call, lines and all, performed before you dare to dial.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-140 gate`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
