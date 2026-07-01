#!/usr/bin/env node
// Prepare the ./deploy directory for GitHub Pages:
// 1. Copy built client output (dist/client → deploy/).
// 2. If no index.html was prerendered, synthesize a SPA entry that loads
//    the built entry-client bundle from ./assets/ with relative paths.
// 3. Ensure required root files exist: .nojekyll, favicon.ico, og-image.png,
//    placeholder.svg, robots.txt.

import { existsSync, mkdirSync, cpSync, readdirSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const deploy = join(root, "deploy");
const publicDir = join(root, "public");

rmSync(deploy, { recursive: true, force: true });
mkdirSync(deploy, { recursive: true });

const candidates = ["dist/client", ".output/public", "dist"];
const source = candidates.find((p) => existsSync(join(root, p)));
if (!source) {
  console.error("No build output found (looked for: " + candidates.join(", ") + ")");
  process.exit(1);
}
console.log(`Copying build output from ${source} → deploy/`);
cpSync(join(root, source), deploy, { recursive: true });

// Synthesize index.html if prerender did not emit one.
if (!existsSync(join(deploy, "index.html"))) {
  console.log("No prerendered index.html; generating SPA fallback.");
  const assetsDir = join(deploy, "assets");
  const files = existsSync(assetsDir) ? readdirSync(assetsDir) : [];
  const entry = files.find((f) => /^entry-client.*\.js$/.test(f)) || files.find((f) => f.endsWith(".js"));
  const css = files.find((f) => f.endsWith(".css"));
  const html = `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Strefa Dominacji — Mroczna Psychologia</title>
    <meta name="description" content="Wejdź do Strefy Dominacji. Mroczna psychologia, ebooki i społeczność Discord." />
    <link rel="icon" href="./favicon.ico" />
${css ? `    <link rel="stylesheet" href="./assets/${css}" />\n` : ""}  </head>
  <body>
    <div id="root"></div>
${entry ? `    <script type="module" src="./assets/${entry}"></script>\n` : ""}  </body>
</html>
`;
  writeFileSync(join(deploy, "index.html"), html);
}

// Always-present root files.
writeFileSync(join(deploy, ".nojekyll"), "");
for (const f of ["favicon.ico", "og-image.png", "placeholder.svg", "robots.txt"]) {
  const dst = join(deploy, f);
  const src = join(publicDir, f);
  if (!existsSync(dst) && existsSync(src)) {
    copyFileSync(src, dst);
    console.log(`Copied ${f} from public/`);
  }
}

console.log("Deploy directory ready:", deploy);
