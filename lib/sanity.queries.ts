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

export const projectBySlugQuery = `
*[_type=="project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  longDescription,
  client,
  date,
  link,
  embedUrl,
  "thumbUrl": thumb.asset->url,
  "coverUrl": cover.asset->url,
  videos[]{
    url,
    orientation
  },
  gallery[]{
    "imageUrl": image.asset->url,
    ratio
  }
}
`;

export const threeLatestExceptQuery = `
*[_type == "project" && slug.current != $slug]
| order(coalesce(date, _updatedAt, _createdAt) desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  description,
  "thumbUrl": thumb.asset->url
}
`;

