import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: r => r.required() }),
    defineField({ name: "client", title: "Cliente", type: "string" }),
    defineField({ name: "date", title: "Data", type: "datetime" }),

    defineField({ name: "description", title: "Descrição curta", type: "string" }),

    // Novo campo de Tags com as suas opções específicas
    defineField({
      name: "tags",
      title: "Tags do Projeto",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Direção", value: "Direção" },
          { title: "Captação", value: "Captação" },
          { title: "Edição", value: "Edição" },
          { title: "Color", value: "Color" },
          { title: "Fotografia", value: "Fotografia" },
          { title: "Motion", value: "Motion" },
          { title: "Design", value: "Design" },
        ]
      }
    }),

    defineField({
      name: "longDescription",
      title: "Descrição longa",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: r => r.required(),
    }),

    defineField({
      name: "thumb",
      title: "Thumb (card da home/grade)",
      type: "image",
      options: { hotspot: true },
      validation: r => r.required(),
    }),

    defineField({
      name: "cover",
      title: "Capa do projeto (banner da página)",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({ name: "featured", title: "Destaque em /portfolio", type: "boolean" }),

    defineField({ name: "link", title: "Link externo (YouTube/Vimeo/site)", type: "url" }),
    defineField({ name: "embedUrl", title: "Embed URL (se usar um único vídeo)", type: "url" }),

    defineField({
      name: "videos",
      title: "Vídeos",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "url", title: "URL (YouTube/Vimeo)", type: "url", validation: r => r.required() },
          {
            name: "orientation",
            title: "Orientação",
            type: "string",
            options: { list: [
              { title: "Horizontal 16:9", value: "16:9" },
              { title: "Vertical 9:16", value: "9:16" },
            ]},
            initialValue: "16:9"
          },
        ]
      }]
    }),

    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "image", title: "Imagem", type: "image", options: { hotspot: true }, validation: r => r.required() },
          {
            name: "ratio",
            title: "Proporção",
            type: "string",
            options: { list: [
              { title: "5:4 (horizontal)", value: "5:4" },
              { title: "4:5 (vertical)",   value: "4:5" },
              { title: "1:1 (quadrada)",   value: "1:1" },
              { title: "16:9 (wide)",      value: "16:9" },
            ]},
            initialValue: "5:4"
          },
        ]
      }]
    }),
  ],
  preview: { select: { title: "title", media: "thumb", subtitle: "client" } },
});
