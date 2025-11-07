import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: r => r.required() }),

    defineField({ name: "client", title: "Cliente", type: "string" }),
    defineField({ name: "date", title: "Data", type: "datetime" }),

    defineField({ name: "description", title: "Descrição curta", type: "string" }),
    defineField({
      name: "detail",
      title: "Descrição detalhada",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "thumb",
      title: "Thumb (card)",
      type: "image",
      options: { hotspot: true },
      validation: r => r.required(),
    }),

    defineField({
      name: "banner",
      title: "Banner da página (capa/faixa)",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      title: "Galeria de imagens",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "videos",
      title: "Vídeos do projeto",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", title: "URL (YouTube/Vimeo)", type: "url" },
            { name: "embedUrl", title: "Embed URL (opcional)", type: "url" },
            {
              name: "orientation",
              title: "Orientação",
              type: "string",
              options: {
                list: [
                  { title: "Horizontal (16:9)", value: "horizontal" },
                  { title: "Vertical (9:16)", value: "vertical" },
                ],
                layout: "radio",
              },
              initialValue: "horizontal",
            },
          ],
        },
      ],
    }),

    defineField({ name: "featured", title: "Destaque na página /portfolio", type: "boolean" }),
    defineField({ name: "link", title: "Link externo (YouTube/Vimeo ou site)", type: "url" }),
    defineField({ name: "embedUrl", title: "Embed URL (principal)", type: "url" }),
  ],
  preview: { select: { title: "title", media: "thumb", subtitle: "client" } },
});
