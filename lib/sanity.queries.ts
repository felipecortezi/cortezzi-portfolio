export const allProjectsQuery = `
*[_type == "project"] | order(coalesce(date, _updatedAt) desc){
  _id, title, description, link, embedUrl, featured,
  "thumbUrl": thumb.asset->url
}`;

export const featuredProjectQuery = `
*[_type == "project" && featured == true][0]{
  _id, title, description, link, embedUrl,
  "thumbUrl": thumb.asset->url
}`;

export const sixLatestProjectsQuery = `
*[_type == "project"] | order(coalesce(date, _updatedAt) desc)[0...6]{
  _id, title, description, link, embedUrl,
  "thumbUrl": thumb.asset->url
}`;
