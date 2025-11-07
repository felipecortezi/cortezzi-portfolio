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

    // ⬇️ NOVO: Slug para gerar a URL /portfolio/[slug]
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),

    defineField({ name: "description", title: "Descrição", type: "string" }),
    defineField({ name: "link", title: "Link (YouTube/Vimeo ou site)", type: "url" }),
    defineField({ name: "embedUrl", title: "Embed URL (YouTube/Vimeo)", type: "url" }),
    defineField({ name: "featured", title: "Destaque na página /portfolio", type: "boolean" }),
    defineField({ name: "date", title: "Data", type: "datetime" }),
    defineField({
      name: "thumb",
      title: "Thumb",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", title: "Cliente", type: "string" }),
  ],
  preview: { select: { title: "title", media: "thumb", subtitle: "client" } },
});
