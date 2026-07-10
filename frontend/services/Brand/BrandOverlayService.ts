import fs from "fs";
import path from "path";

import sharp from "sharp";

import {
  brandEngine,
} from "../../engines/brandEngine";

export class BrandOverlayService {

  //------------------------------------------
  // Apply Brand Overlay
  //------------------------------------------

  async apply(
    image: Buffer
  ): Promise<Buffer> {

    console.log("");
    console.log("=====================================");
    console.log("Brand Overlay");
    console.log("=====================================");

    //------------------------------------------
    // Brand
    //------------------------------------------

    const brand =
      brandEngine.getBrand();

    if (!brand.logo.enabled) {

      console.log("Branding disabled.");

      return image;

    }

    //------------------------------------------
    // Resolve Logo Path
    //------------------------------------------

    const logoPath =
      path.join(

        process.cwd(),

        "public",

        "branding",

        "treasured-expressions-logo.png"

      );

    console.log("Logo Path:");
    console.log(logoPath);

    //------------------------------------------
    // Verify Logo Exists
    //------------------------------------------

    if (!fs.existsSync(logoPath)) {

      throw new Error(

        `Brand logo not found:\n${logoPath}`

      );

    }

    //------------------------------------------
    // Image Metadata
    //------------------------------------------

    const imageMetadata =
      await sharp(image).metadata();

    if (

      !imageMetadata.width ||
      !imageMetadata.height

    ) {

      throw new Error(

        "Unable to determine image size."

      );

    }

    console.log("");
    console.log("Canvas");

    console.log(
      imageMetadata.width,
      "x",
      imageMetadata.height
    );

    //------------------------------------------
    // Logo Width
    //------------------------------------------

    const logoWidth =
      Math.round(

        imageMetadata.width *

        (

          brand.logo.widthPercent / 100

        )

      );

    console.log("");
    console.log("Configured Width:");

    console.log(
      logoWidth,
      "pixels"
    );

    //------------------------------------------
    // Load Logo
    //------------------------------------------

    const resizedLogo =
      await sharp(logoPath)

        .resize({

          width:
            logoWidth,

          withoutEnlargement:
            true,

        })

        .png()

        .toBuffer();

    //------------------------------------------
    // Logo Metadata
    //------------------------------------------

    const logoMetadata =
      await sharp(
        resizedLogo
      ).metadata();

    if (

      !logoMetadata.width ||
      !logoMetadata.height

    ) {

      throw new Error(

        "Unable to determine logo size."

      );

    }

    console.log("");
    console.log("Logo");

    console.log(

      logoMetadata.width,

      "x",

      logoMetadata.height

    );

    //------------------------------------------
    // Placement
    //------------------------------------------

    const padding =
      brand.logo.padding;

    let left =
      padding;

    let top =
      padding;

    switch (

      brand.logo.placement

    ) {

      case "top-left":

        break;

      case "top-right":

        left =

          imageMetadata.width -

          logoMetadata.width -

          padding;

        break;

      case "bottom-left":

        top =

          imageMetadata.height -

          logoMetadata.height -

          padding;

        break;

      case "bottom-right":

        left =

          imageMetadata.width -

          logoMetadata.width -

          padding;

        top =

          imageMetadata.height -

          logoMetadata.height -

          padding;

        break;

      case "center":

        left =
          Math.round(

            (

              imageMetadata.width -

              logoMetadata.width

            ) / 2

          );

        top =
          Math.round(

            (

              imageMetadata.height -

              logoMetadata.height

            ) / 2

          );

        break;

    }

    console.log("");
    console.log("Placement");

    console.log("Left :", left);

    console.log("Top  :", top);

    console.log("Opacity :", brand.logo.opacity);

    console.log("Padding :", padding);

    //------------------------------------------
    // Apply Opacity
    //------------------------------------------

    const logo =
      await sharp(
        resizedLogo
      )

        .ensureAlpha(

          brand.logo.opacity

        )

        .png()

        .toBuffer();

    //------------------------------------------
    // Composite
    //------------------------------------------

    const result =
      await sharp(image)

        .composite([

          {

            input:
              logo,

            left,

            top,

          },

        ])

        .png()

        .toBuffer();

    console.log("");
    console.log("Brand overlay applied successfully.");

    return result;

  }

}

export const brandOverlayService =
  new BrandOverlayService();