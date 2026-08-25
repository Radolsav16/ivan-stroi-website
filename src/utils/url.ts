export const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/rwyghcuy/image/upload";

export const CLOUDINARY_WIDTHS = [320, 640, 960, 1280, 1920];

type CloudinaryImageOptions = {
  width?: number;
  height?: number;
  quality?: string;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: string;
};

export const getCloudinaryUrl = (
  imageUrl: string,
  options: CloudinaryImageOptions = {},
) => {
  const { width, height, quality = "auto", format = "auto", crop } = options;

  const transformations = [
    format === "auto" ? "f_auto" : `f_${format}`,
    `q_${quality}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`,
  ]
    .filter(Boolean)
    .join(",");

  const [, publicId] = imageUrl.split("/upload/");

  if (!publicId) {
    return imageUrl;
  }

  return `${CLOUDINARY_BASE_URL}/${transformations}/${publicId}`;
};

export const getCloudinarySrcSet = (imageUrl: string) =>
  CLOUDINARY_WIDTHS.map(
    (width) => `${getCloudinaryUrl(imageUrl, { width })} ${width}w`,
  ).join(", ");
