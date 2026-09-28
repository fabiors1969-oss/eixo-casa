import type { NextConfig } from "next";

function normalizePrefix(value: string | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed.replace(/\/$/, "");
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withSlash.replace(/\/$/, "");
}

// Vazio = hospedagem na raiz. Ex.: NEXT_PUBLIC_BASE_PATH=/eixo-casa para GitHub Pages.
const basePath = normalizePrefix(process.env.NEXT_PUBLIC_BASE_PATH);
const assetPrefix = normalizePrefix(
  process.env.NEXT_PUBLIC_ASSET_PREFIX ?? process.env.NEXT_PUBLIC_BASE_PATH,
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
};

export default nextConfig;
