import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import inspect from "./inspect"

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(options);
  return cl.url(publicId, scOptions);
};

export const openUploadWidget = (options, callback) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, callback);
};

export const fetchPhotos = () => {
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
  const options = {
    cloudName: process.env.GATSBY_CLOUDINARY_NAME,
    apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
    apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
    format: 'json',
    type: 'list',
    version: Math.ceil(new Date().getTime() / 1000),
  };

  const urlPath = url("batchResult1", options);

  return fetch(urlPath)
    .then(res => res.text())
    .then(inspect)
    .then(text => (text ? JSON.parse(text).resources : []));
};