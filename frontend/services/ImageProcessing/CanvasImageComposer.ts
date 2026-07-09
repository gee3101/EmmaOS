import sharp from "sharp";

export interface ProductPlacement {

  //------------------------------------------
  // Position
  //------------------------------------------

  left: number;
  top: number;

  //------------------------------------------
  // Size
  //------------------------------------------

  width: number;
  height: number;

}

export interface CompositeImageRequest {

  //------------------------------------------
  // Images
  //------------------------------------------

  background: Buffer;
  foreground: Buffer;

  //------------------------------------------
  // Placement
  //------------------------------------------

  placement: ProductPlacement;

  //------------------------------------------
  // Export
  //------------------------------------------

  format?: "png" | "jpeg" | "webp";

}

export class CanvasImageComposer {

  //------------------------------------------
  // Composite
  //------------------------------------------

  async compose(
    request: CompositeImageRequest
  ): Promise<Buffer> {

    //------------------------------------------
    // Resize Product
    //------------------------------------------

    const resizedForeground =
      await sharp(request.foreground)

        .resize({

          width:
            request.placement.width,

          height:
            request.placement.height,

          fit: "contain",

        })

        .png()

        .toBuffer();

    //------------------------------------------
    // Composite
    //------------------------------------------

    let image =

      sharp(request.background)

        .composite([

          {

            input:
              resizedForeground,

            left:
              request.placement.left,

            top:
              request.placement.top,

          },

        ]);

    //------------------------------------------
    // Export
    //------------------------------------------

    switch (

      request.format ?? "png"

    ) {

      case "jpeg":

        return image

          .jpeg({

            quality: 95,

          })

          .toBuffer();

      case "webp":

        return image

          .webp({

            quality: 95,

          })

          .toBuffer();

      default:

        return image

          .png()

          .toBuffer();

    }

  }

}

export const canvasImageComposer =
  new CanvasImageComposer();