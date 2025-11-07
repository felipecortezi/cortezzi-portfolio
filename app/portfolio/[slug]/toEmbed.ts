export function toEmbed(raw?: string | null): string | null {
  if (!raw) return null;

  try {
    const src = raw.trim();
    const u = new URL(src);

    // normaliza host (remove "m.")
    const host = u.hostname.replace(/^m\./, "");

    // YOUTUBE
    if (host.includes("youtube.com") || host.includes("youtu.be")) {
      // já é /embed/
      if (u.pathname.startsWith("/embed/")) return u.toString();

      // watch?v=ID
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;

      // /shorts/ID
      const shorts = u.pathname.match(/\/shorts\/([^/?]+)/i);
      if (shorts?.[1]) return `https://www.youtube.com/embed/${shorts[1]}`;

      // youtu.be/ID
      const be = host.includes("youtu.be") && u.pathname.match(/^\/([^/?#]+)/);
      if (be && be[1]) return `https://www.youtube.com/embed/${be[1]}`;

      // fallback: procura um ID de 11 chars na URL toda
      const id = src.match(/([a-zA-Z0-9_-]{11})(?:\b|$)/)?.[1];
      if (id) return `https://www.youtube.com/embed/${id}`;

      return null;
    }

    // VIMEO
    if (host.includes("vimeo.com")) {
      const vv = u.pathname.match(/\/(\d+)/);
      if (vv?.[1]) return `https://player.vimeo.com/video/${vv[1]}`;
      return null;
    }

    return null;
  } catch {
    // se não for URL válida, tenta fallback do ID mesmo assim
    const id = raw!.match(/([a-zA-Z0-9_-]{11})(?:\b|$)/)?.[1];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }
}
