#!/usr/bin/env node
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const outDir = "out";

function normalizePrefix(value) {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withSlash.replace(/\/$/, "");
}

const basePath = normalizePrefix(process.env.NEXT_PUBLIC_BASE_PATH);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = (await walk(outDir))
  .map((file) => `/${relative(outDir, file).replaceAll("\\", "/")}`)
  .filter((file) => !file.endsWith(".map") && file !== "/sw.js");

const extra = [];
for (const file of files) {
  if (file.endsWith("/index.html")) {
    extra.push(file.slice(0, -"index.html".length));
  }
}

const precache = [...new Set([...files, ...extra])].map((file) => `${basePath}${file}`).sort();
const source = await readFile("public/sw.js", "utf8");
const injected = source
  .replace(/const PRECACHE = \[[\s\S]*?\];/, `const PRECACHE = ${JSON.stringify(precache, null, 2)};`)
  .replace(/const BASE_PATH = ".*?";/, `const BASE_PATH = ${JSON.stringify(basePath)};`);
await writeFile(join(outDir, "sw.js"), injected);
console.log(`Service worker: ${precache.length} arquivos no cache.`);
