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

// Detalhe: projeto por slug (agora com cover, details, gallery e videos)
export const projectBySlugQuery = `
*[_type=="project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  client,
  date,
  description,
  detail,
  "thumbUrl": thumb.asset->url,
  "bannerUrl": banner.asset->url,
  "galleryUrls": gallery[].asset->url,
  videos[]{
    url,
    embedUrl,
    orientation
  },
  link,
  embedUrl
}
`;
