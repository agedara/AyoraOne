import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "brand", "logo-source.png");
const publicDir = path.join(root, "public");
const paper = { r: 245, g: 247, b: 250, alpha: 1 };

await mkdir(publicDir, { recursive: true });

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max > 236 && max - min < 18) {
    const fade = Math.min(1, (max - 236) / 19);
    data[i + 3] = Math.round(data[i + 3] * (1 - fade));
  }
}

const trimmed = sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).trim({ threshold: 2 });

const logoPath = path.join(publicDir, "logo.png");
const logoMeta = await trimmed.clone().png().toFile(logoPath);

const { data: logoPixels, info: logoInfo } = await sharp(logoPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = logoInfo;
const seen = new Uint8Array(width * height);
const components = [];

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const start = y * width + x;
    if (seen[start] || logoPixels[start * 4 + 3] <= 80) continue;

    const stack = [x, y];
    seen[start] = 1;
    let minX = x;
    let maxX = x;
    let minY = y;
    let maxY = y;
    let count = 0;

    while (stack.length > 0) {
      const cy = stack.pop();
      const cx = stack.pop();
      count += 1;
      if (cx < minX) minX = cx;
      if (cx > maxX) maxX = cx;
      if (cy < minY) minY = cy;
      if (cy > maxY) maxY = cy;

      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (dx === 0 && dy === 0) continue;
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const index = ny * width + nx;
          if (seen[index] || logoPixels[index * 4 + 3] <= 80) continue;
          seen[index] = 1;
          stack.push(nx, ny);
        }
      }
    }

    if (count > 20) components.push({ minX, minY, maxX, maxY });
  }
}

const wordmark = components
  .filter(
    (shape) =>
      shape.minX > width * 0.12 &&
      shape.maxY - shape.minY > height * 0.35 &&
      shape.minY < height * 0.4,
  )
  .sort((a, b) => a.minX - b.minX)[0];

const gapStart = wordmark ? wordmark.minX : Math.round(width * 0.28);

const cropped = await sharp(logoPath)
  .extract({ left: 0, top: 0, width: gapStart, height: logoInfo.height })
  .png()
  .toBuffer();

const mark = await sharp(cropped).trim({ threshold: 2 }).png().toBuffer();

async function writeIcon(size, filename, paddingRatio) {
  const inner = Math.round(size * (1 - paddingRatio * 2));
  const resized = await sharp(mark)
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: paper,
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toFile(path.join(publicDir, filename));
}

await writeIcon(192, "favicon.png", 0.12);
await writeIcon(180, "apple-touch-icon.png", 0.1);

console.log(
  `logo ${logoMeta.width}x${logoMeta.height} -> public/logo.png, favicon.png, apple-touch-icon.png`,
);
