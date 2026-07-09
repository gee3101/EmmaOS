import sharp from "sharp";

export interface ImageMetadata {

  //------------------------------------------
  // Dimensions
  //------------------------------------------

  width: number;

  height: number;

  aspectRatio: number;

  //------------------------------------------
  // Orientation
  //------------------------------------------

  orientation:
    | "landscape"
    | "portrait"
    | "square";

  //------------------------------------------
  // Format
  //------------------------------------------

  format: string;

  hasAlpha: boolean;

}

export async function getImageMetadata(
  image: Buffer
): Promise<ImageMetadata> {

  //------------------------------------------
  // Read Metadata
  //------------------------------------------

  const metadata =
    await sharp(image).metadata();

  //------------------------------------------
  // Validate
  //------------------------------------------

  if (
    !metadata.width ||
    !metadata.height
  ) {

    throw new Error(
      "Unable to determine image dimensions."
    );

  }

  //------------------------------------------
  // Dimensions
  //------------------------------------------

  const width =
    metadata.width;

  const height =
    metadata.height;

  //------------------------------------------
  // Aspect Ratio
  //------------------------------------------

  const aspectRatio =
    width / height;

  //------------------------------------------
  // Orientation
  //------------------------------------------

  let orientation:
    | "landscape"
    | "portrait"
    | "square";

  if (width === height) {

    orientation =
      "square";

  } else if (width > height) {

    orientation =
      "landscape";

  } else {

    orientation =
      "portrait";

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    width,

    height,

    aspectRatio,

    orientation,

    format:
      metadata.format ?? "unknown",

    hasAlpha:
      metadata.hasAlpha ?? false,

  };

}