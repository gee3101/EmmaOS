import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  openAIBackgroundService,
} from "../AI/OpenAI/OpenAIBackgroundService";

import {
  removeBgImageProcessingProvider,
} from "../ImageProcessing/providers/RemoveBgImageProcessingProvider";

import {
  transparentImageTrimmer,
} from "../ImageProcessing/TransparentImageTrimmer";

import {
  canvasImageComposer,
} from "../ImageProcessing/CanvasImageComposer";

import {
  getImageMetadata,
} from "../ImageProcessing/ImageMetadata";

import {
  placementEngine,
} from "../Placement/PlacementEngine";

import {
  brandOverlayService,
} from "../Brand/BrandOverlayService";

export interface CompositeCreativeRequest {

  //------------------------------------------
  // Product
  //------------------------------------------

  productImage: File;

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

    console.log("");
    console.log("=====================================");
    console.log("Emma Composite Creative Pipeline");
    console.log("=====================================");

    //------------------------------------------
    // Step 1
    // Generate AI Background
    //------------------------------------------

    console.log("");
    console.log("Step 1 / 6");
    console.log("Generating lifestyle background...");

    const background =
      await openAIBackgroundService.generateBackground(
        request.scene
      );

    //------------------------------------------
    // Step 2
    // Remove Background
    //------------------------------------------

    console.log("");
    console.log("Step 2 / 6");
    console.log("Removing product background...");

    const removedBackground =
      await removeBgImageProcessingProvider.removeBackground(
        request.productImage
      );

    //------------------------------------------
    // Step 3
    // Trim Transparent Padding
    //------------------------------------------

    console.log("");
    console.log("Step 3 / 6");
    console.log("Trimming transparent borders...");

    const transparentProduct =
      await transparentImageTrimmer.trim(
        removedBackground
      );

    //------------------------------------------
    // Step 4
    // Calculate Placement
    //------------------------------------------

    console.log("");
    console.log("Step 4 / 6");
    console.log("Calculating product placement...");

    const metadata =
      await getImageMetadata(
        transparentProduct
      );

    console.log("");
    console.log("Trimmed Product Metadata");
    console.log(metadata);

    const placement =
      placementEngine.calculate({

        scene:
          request.scene,

        backgroundWidth:
          request.scene.outputWidth,

        backgroundHeight:
          request.scene.outputHeight,

        productWidth:
          metadata.width,

        productHeight:
          metadata.height,

      });

    console.log("");
    console.log("Calculated Placement");
    console.log(placement);

    //------------------------------------------
    // Step 5
    // Composite Product
    //------------------------------------------

    console.log("");
    console.log("Step 5 / 6");
    console.log("Compositing product...");

    const composite =
      await canvasImageComposer.compose({

        background,

        foreground:
          transparentProduct,

        placement,

        format:
          "png",

      });

    //------------------------------------------
    // Step 6
    // Apply Brand Overlay
    //------------------------------------------

    console.log("");
    console.log("Step 6 / 6");
    console.log("Applying Treasured Expressions branding...");

    const branded =
      await brandOverlayService.apply(
        composite
      );

    console.log("");
    console.log("Creative complete.");

    return branded;

  }

}

export const compositeCreativePipeline =
  new CompositeCreativePipeline();