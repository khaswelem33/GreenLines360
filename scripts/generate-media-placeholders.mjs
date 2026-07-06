/**
 * Generates physical PNG placeholder files for every generic media slot
 * defined in src/content/mediaRegistry.ts.
 *
 * Rules:
 * - Only slots whose filename equals `CODE.png` are generated (generic
 *   replaceable slots). Special assets (e.g. Chairman photos) are skipped.
 * - Existing files are NEVER overwritten unless run with --force.
 * - Placeholders are premium ivory/white cards showing the media code,
 *   recommended size, exact save path, and replacement instruction.
 *
 * Usage:
 *   npm run media:placeholders            # create missing placeholders
 *   npm run media:placeholders -- --force # regenerate ALL generic slots (careful!)
 */
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const registryPath = join(projectRoot, "src", "content", "mediaRegistry.ts");
const force = process.argv.includes("--force");

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "The 'sharp' package is required. Install it with:\n  npm install --save-dev sharp"
  );
  process.exit(1);
}

/** Light parser: extracts slot entries from the TypeScript registry. */
function parseRegistry(source) {
  const slots = [];
  // Generic slots use the slotPaths("section", "CODE") helper.
  const genericRe = /\.\.\.slotPaths\("([^"]+)",\s*"([^"]+)"\)[\s\S]*?recommendedSize:\s*"([^"]+)"/g;
  let match;
  while ((match = genericRe.exec(source)) !== null) {
    const [, section, code, size] = match;
    slots.push({
      code,
      folder: `public/images/${section}`,
      filename: `${code}.png`,
      recommendedSize: size,
    });
  }
  return slots;
}

function parseSize(recommendedSize) {
  const numbers = recommendedSize.match(/\d+/g)?.map(Number) ?? [];
  return { width: numbers[0] ?? 1600, height: numbers[1] ?? 900 };
}

function placeholderSvg({ code, width, height, recommendedSize, savePath }) {
  const codeSize = Math.round(width / 26);
  const textSize = Math.round(width / 48);
  const pathSize = Math.round(width / 52);
  const cy = height / 2;
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#ffffff"/>
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="36" fill="#fdfcf8" stroke="#c9a24d" stroke-width="3"/>
  <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="28" fill="none" stroke="#dfe5df" stroke-width="1.5"/>
  <text x="50%" y="${cy - height / 9}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${codeSize}" fill="#006536" font-weight="600">${code}</text>
  <text x="50%" y="${cy}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${textSize}" fill="#647067">Recommended: ${recommendedSize}</text>
  <text x="50%" y="${cy + height / 14}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${textSize}" fill="#647067">Replace this file at:</text>
  <text x="50%" y="${cy + height / 8}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${pathSize}" fill="#14251b">${savePath}</text>
</svg>`;
}

const source = readFileSync(registryPath, "utf8");
const slots = parseRegistry(source);

if (slots.length === 0) {
  console.error("No generic slots found in mediaRegistry.ts — nothing to do.");
  process.exit(1);
}

let created = 0;
let skipped = 0;

for (const slot of slots) {
  const target = join(projectRoot, slot.folder, slot.filename);
  if (existsSync(target) && !force) {
    skipped++;
    console.log(`skip (exists): ${slot.folder}/${slot.filename}`);
    continue;
  }
  mkdirSync(dirname(target), { recursive: true });
  const { width, height } = parseSize(slot.recommendedSize);
  const svg = placeholderSvg({
    code: slot.code,
    width,
    height,
    recommendedSize: slot.recommendedSize,
    savePath: `${slot.folder}/${slot.filename}`,
  });
  await sharp(Buffer.from(svg)).png().toFile(target);
  created++;
  console.log(`created: ${slot.folder}/${slot.filename} (${width}×${height})`);
}

console.log(`\nDone. Created ${created}, skipped ${skipped} existing file(s).`);
