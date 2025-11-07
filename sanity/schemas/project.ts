import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),

    // URL amigável para /portfolio/[slug]
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),

    // Descrição curta (subtítulo que aparece nos cards/listas)
    defineField({ name: "description", title: "Descrição curta", type: "string" }),

    // Descrição detalhada (história do projeto)
    defineField({
      name: "details",
      title: "Descrição detalhada",
      type: "text",
      rows: 8,
      description:
        "Conte a história do projeto: briefing, processo, desafios, entregas, bastidores etc.",
    }),

    // Capa (banner) — diferente da thumb do grid
    defineField({
      name: "cover",
      title: "Capa (banner da página do projeto)",
      type: "image",
      options: { hotspot: true },
      description: "Imagem larga (ex.: 21:9 ou 16:9). Será exibida como faixa no topo do projeto.",
    }),

    // Thumb para os cards (grid da Home e /portfolio)
    defineField({
      name: "thumb",
      title: "Thumb (grid)",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
      description: "Miniatura usada nos cards/listas.",
    }),

    // Cliente e data/ano
    defineField({ name: "client", title: "Cliente", type: "string" }),
    defineField({
      name: "date",
      title: "Data",
      type: "datetime",
    }),

    // Flag de destaque na página /portfolio
    defineField({
      name: "featured",
      title: "Destaque na página /portfolio",
      type: "boolean",
    }),

    // Link e embed “principal” (mantemos para compatibilidade)
    defineField({ name: "link", title: "Link (YouTube/Vimeo ou site)", type: "url" }),
    defineField({ name: "embedUrl", title: "Embed URL (YouTube/Vimeo)", type: "url" }),

    // Galeria de fotos/frames
    defineField({
      name: "gallery",
      title: "Galeria (imagens/frames)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    // Vários vídeos (cada item com link/embed e proporção)
    defineField({
      name: "videos",
      title: "Vídeos (múltiplos)",
      type: "array",
      of: [
        defineField({
          name: "video",
          title: "Vídeo",
          type: "object",
          fields: [
            { name: "title", title: "Título (opcional)", type: "string" },
            { name: "link", title: "Link (watch/shorts/youtu.be/vimeo)", type: "url" },
            { name: "embedUrl", title: "URL de Embed (opcional)", type: "url" },
            {
              name: "aspect",
              title: "Proporção",
              type: "string",
              options: {
                list: [
                  { title: "Horizontal 16:9", value: "16-9" },
                  { title: "Vertical 9:16", value: "9-16" },
                  { title: "Quadrado 1:1", value: "1-1" },
                ],
                layout: "radio",
              },
              initialValue: "16-9",
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: { title: "title", media: "thumb", subtitle: "client" },
  },
});
