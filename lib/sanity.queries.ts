// Home: 6 mais recentes (usa date quando existir; senão updatedAt/createdAt)
export const sixLatestProjectsQuery = `
*[_type == "project"] 
| order(coalesce(date, _updatedAt, _createdAt) desc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  description,
  client,
  date,
  featured,
  link,
  embedUrl,
  "thumbUrl": thumb.asset->url
}
`;

// /portfolio: todos os projetos
export const allProjectsQuery = `
*[_type == "project"] 
| order(coalesce(date, _updatedAt, _createdAt) desc){
  _id,
  title,
  "slug": slug.current,
  description,
  client,
  date,
  featured,
  link,
  embedUrl,
  "thumbUrl": thumb.asset->url
}
`;

// /portfolio: destaque (primeiro marcado como featured)
export const featuredProjectQuery = `
*[_type == "project" && featured == true]
| order(coalesce(date, _updatedAt, _createdAt) desc)[0]{
  _id,
  title,
  "slug": slug.current,
  description,
  client,
  date,
  featured,
  link,
  embedUrl,
  "thumbUrl": thumb.asset->url
}
`;

// lib/sanity.queries.ts
export const projectBySlugQuery = `
*[_type=="project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  client,
  date,
  description,           // curta
  longDescription,       // rica (Portable Text), se você chamou diferente, atualize o nome
  link,
  embedUrl,
  // imagens
  "coverUrl": coalesce(cover.asset->url, thumb.asset->url), // capa larga (fallback = thumb)
  "thumbUrl": thumb.asset->url,
  // galeria
  gallery[]{
    _key,
    "url": asset->url,
    alt
  },
  // vídeos: array de {url, orientation}
  videos[]{
    _key,
    url,
    orientation
  }
}
`;
