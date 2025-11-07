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
