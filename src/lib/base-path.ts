function normalizePrefix(value: string | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withSlash.replace(/\/$/, "");
}

/** Prefixo de rota. Vazio quando o site é servido na raiz do domínio. */
export const basePath = normalizePrefix(process.env.NEXT_PUBLIC_BASE_PATH);

/** Prefixa arquivos de `public/` (o next/image não aplica o basePath sozinho). */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
