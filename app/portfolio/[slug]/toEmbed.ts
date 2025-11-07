export type Embed = { src: string; aspect: "16:9" | "9:16" };

/**
 * Converte URLs do YouTube (watch, youtu.be, shorts) em embed seguro.
 * Retorna null se inválido.
 */
export function toEmbed(input?: string | null): Embed | null {
  if (!input) return null;
  try {
    const u = new URL(input.trim());
    const host = u.hostname.replace(/^www\./, "");
    let id = "";
    let aspect: "16:9" | "9:16" = "16:9";

    if (host === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (host.endsWith("youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) {
        id = u.pathname.split("/")[2] || "";
        aspect = "9:16";
      } else {
        id = u.searchParams.get("v") || u.pathname.split("/").pop() || "";
      }
    }

    if (!id) return null;

    const src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    return { src, aspect };
  } catch {
    return null;
  }
}
