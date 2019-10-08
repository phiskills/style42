const cloudinary = require('cloudinary').v2;

const DEFAULT_FLUID_MAX_WIDTH = 5000;
const DEFAULT_FLUID_MIN_WIDTH = 200;

exports.uploadImageNodeToCloudinary = async (picture, options) => {
  cloudinary.config({
    cloud_name: options.cloudName,
    api_key: options.apiKey,
    api_secret: options.apiSecret,
  });

  const result = await cloudinary.uploader.upload(picture.url, {
    folder: options.uploadFolder,
    public_id: picture.id,
    overwrite: false,
    tags: picture.tags,
    responsive_breakpoints: [
      {
        create_derived: true,
        bytes_step: 20000,
        min_width: DEFAULT_FLUID_MIN_WIDTH,
        max_width: DEFAULT_FLUID_MAX_WIDTH,
        max_images: 20,
      },
    ],
  });
  console.log("result",result)

  return result;
};