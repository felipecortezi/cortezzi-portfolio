export function toEmbed(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);

    // YouTube
    if (u.hostname.includes("youtube")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // Vimeo
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }

    return null;
  } catch {
    return null;
  }
}
