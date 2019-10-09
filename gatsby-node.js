
// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   //
//   // return graphql(`
//   //         query {
//   //           allCloudinaryAsset {
//   //             tags
//   //             secure_url
//   //             public_id
//   //             id
//   //           }
//   //         }
//   // `, { limit: 120 }).then(result => {
//   //   if (result.errors) {
//   //     throw result.errors
//   //   }
//
//     // createPage({
//     //   path: `/`,
//     //   component: require.resolve("./src/components/index.js"),
//     //   context: { pictures, logo: result.data.logo },
//     //   // // Create a page for each Picture.
//     //
//     // })
//
//     //todo
//   //   pictures.forEach(picture => {
//   //     createPage({
//   //       path: `/gallery/${picture.id}/`,
//   //       component: require.resolve("./src/components/tableau.js"),
//   //       context: { picture },
//   //     })
//   //   })
//   })
// }