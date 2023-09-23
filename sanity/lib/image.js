import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

const urlForImage = (source) => {
  return imageBuilder?.image(source);
};

function urlFor(source) {
  return imageBuilder?.image(source);
}
export async function fetchProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const params = { slug };
  return await client.fetch(query, params);
}

export { urlForImage, urlFor };
