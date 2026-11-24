// news-image-20261124 entry program. The repository holds entry.png, the image that sums up
// the world news of Tuesday 24 November 2026; this program copies it, byte for byte, into
// the output directory the harness names, so both grading runs write identical bytes.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
// A short copy would silently corrupt the entry; fail loudly instead of grading a torn image.
if (statSync(dst).size !== statSync(src).size) throw new Error('entry.png copy truncated');
