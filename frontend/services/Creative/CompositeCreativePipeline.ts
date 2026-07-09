import {
  removeBgImageProcessingProvider,
} from "../ImageProcessing/providers/RemoveBgImageProcessingProvider";

import {
  canvasImageComposer,
} from "../ImageProcessing/CanvasImageComposer";

import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  buildBackgroundPrompt,
} from "../../engines/backgroundPromptBuilder";

export interface CompositeCreativeRequest {

  //------------------------------------------
  // Product
  //------------------------------------------

  productImage: File;

  //------------------------------------------
  // Background
  //------------------------------------------

  backgroundImage: Buffer;

  //------------------------------------------
  // Scene
  //------------------------------------------

  scene: CompositeSceneSpecification;

}

export class CompositeCreativePipeline {

  //------------------------------------------
  // Generate Composite
  //------------------------------------------

  async generate(
    request: CompositeCreativeRequest
  ): Promise<Buffer> {

    //------------------------------------------
    // Remove Background
    //------------------------------------------

    console.log("");

    console.log(
      "====================================="
    );

    console.log(
      "Emma Composite Pipeline"
    );

    console.log(
      "====================================="
    );

    console.log("");

    console.log(
      "Removing product background..."
    );

    const transparentProduct =

      await removeBgImageProcessingProvider
        .removeBackground(
          request.productImage
        );

    //------------------------------------------
    // Background Prompt
    //------------------------------------------

    const prompt =

      buildBackgroundPrompt(
        request.scene
      );

    console.log("");

    console.log(
      "Background Prompt"
    );

    console.log("-------------------------------------");

    console.log(prompt);

    //------------------------------------------
    // Composite
    //------------------------------------------

    console.log("");

    console.log(
      "Compositing product..."
    );

    const composite =

      await canvasImageComposer.compose({

        background:
          request.backgroundImage,

        foreground:
          transparentProduct,

        placement: {

          left: 275,

          top: 220,

          width: 475,

          height: 475,

        },

        format: "png",

      });

    console.log("");

    console.log(
      "Composite complete."
    );

    return composite;

  }

}

export const compositeCreativePipeline =
  new CompositeCreativePipeline();