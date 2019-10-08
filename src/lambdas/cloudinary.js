const cloudinary = require('cloudinary').v2

const setPicturesList = list => list.reduce((acc, cur) => acc.push(cur.url), [])

export const fetchPhotos = () => {

  cloudinary.config({
    cloud_name: "style42",
    api_key: "934791563814154",
    api_secret: "NDbVxmsY-5jZhPzGvGlR1aC-KDQ",
  })

  let list = []

  cloudinary.api.resources(
    function(error, result) {
      list = setPicturesList(result)
      console.log(result, error);
    });
  console.log(list)
  return list
  // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
  // and simply retrieve a list of all images with that tag.
  // the version property is used for cache bust (lists are cached by the CDN for 1 minute)
  // *************************************************************************
  // Note that this practice is DISCOURAGED in production code and is here
  // for demonstration purposes only
  // *************************************************************************
  // const cl = new cloudinary.Cloudinary({cloud_name: "style42", api_key:'934498994849366', api_secret:'7fsFdxrIzYlMdA7fuIHqXS1-WeI', secure:true });
  // const url = cl.url('batchResult1', {format: 'json', type: 'list'});
  // console.log("url", JSON.parse(url))

  // const urlPath = url("batchResult1", options);

  // return fetch(urlPath)
  //   .then(res => res.text())
  //   .then(text => (text ? JSON.parse(text).resources : []));
};

// exports.handler = function(event, context, callback) {
//   fetchPhotos()
//   callback(null, {
//     statusCode: 200,
//     body: "Hello, World"
//   });
// }


