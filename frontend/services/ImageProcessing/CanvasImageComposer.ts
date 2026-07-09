import sharp from "sharp";

import {
  Placement,
} from "../Placement/Placement";

export interface CompositeImageRequest {

  //------------------------------------------
  // Images
  //------------------------------------------

  background: Buffer;

  foreground: Buffer;

  //------------------------------------------
  // Placement
  //------------------------------------------

  placement: Placement;

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
            Math.round(
              request.placement.width
            ),

          height:
            Math.round(
              request.placement.height
            ),

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
              Math.round(
                request.placement.left
              ),

            top:
              Math.round(
                request.placement.top
              ),

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