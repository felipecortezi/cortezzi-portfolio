export function toEmbed(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id =
        u.searchParams.get("v") ??
        (u.pathname.includes("/shorts/")
          ? u.pathname.split("/shorts/")[1]
          : "");
      if (!id) return null;
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.replace("/", "");
      return `https://player.vimeo.com/video/${id}`;
    }

    return null;
  } catch {
    return null;
  }
}
