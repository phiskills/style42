const { fetchPictures } = require("./fetchPictures")

exports.sourceNodes = async ({ actions: { createNode }, createNodeId, createContentDigest, reporter }, options) => {

  // 1. fetch images from cloudinary
  const pictures = await fetchPictures(options)

  // 2. create Nodes for each image
  return Promise.all(pictures.filter(r => !!r).map(picture =>
      createNode({
        ...picture,
        // context: picture.context && picture.context.custom? picture.context : {style: 0, content: 0},
        cloudName: options.cloudName,
        id: createNodeId(`cloudinary-${picture.public_id}`),
        parent: null,
        children: [],
        internal: {
          type: `CloudinaryAsset`,
          mediaType: `text/html`,
          content: JSON.stringify(picture),
          contentDigest: createContentDigest(picture),
        },
      }),
    ),
  )
}

