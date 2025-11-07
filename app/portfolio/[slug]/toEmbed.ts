export type Embed = { src: string; isShort: boolean };

export default function toEmbed(raw?: string | null): Embed | null {
  if (!raw) return null;

  try {
    const u = new URL(raw);

    // Youtu.be curto
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return {
        src: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`,
        isShort: false,
      };
    }

    // YouTube
    if (u.hostname.includes("youtube.com")) {
      // shorts
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/shorts/")[1].split("/")[0];
        return {
          src: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`,
          isShort: true,
        };
      }
      // watch?v=...
      const id = u.searchParams.get("v");
      if (id) {
        return {
          src: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`,
          isShort: false,
        };
      }
    }

    // Vimeo (padrão 16:9)
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id) {
        return { src: `https://player.vimeo.com/video/${id}`, isShort: false };
      }
    }

    return null;
  } catch {
    return null;
  }
}
