import sharp from "sharp";

export class TransparentImageTrimmer {

  //------------------------------------------
  // Remove Transparent Padding
  //------------------------------------------

  async trim(
    image: Buffer
  ): Promise<Buffer> {

    //------------------------------------------
    // Original Metadata
    //------------------------------------------

    const originalMetadata =
      await sharp(image).metadata();

    console.log("");
    console.log("=====================================");
    console.log("Transparent Image Trimmer");
    console.log("=====================================");
    console.log("Original:");
    console.log(originalMetadata);

    //------------------------------------------
    // Trim
    //------------------------------------------

    const trimmed =
      await sharp(image)
        .trim()
        .png()
        .toBuffer();

    //------------------------------------------
    // Trimmed Metadata
    //------------------------------------------

    const trimmedMetadata =
      await sharp(trimmed).metadata();

    console.log("");
    console.log("Trimmed:");
    console.log(trimmedMetadata);

    console.log("");

    return trimmed;

  }

}

export const transparentImageTrimmer =
  new TransparentImageTrimmer();