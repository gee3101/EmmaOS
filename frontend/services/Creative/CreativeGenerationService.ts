import {
  CreativeBrief,
} from "../../types/CreativeBrief";

import {
  CreativeAsset,
} from "../../types/CreativeAsset";

import {
  buildCompositeSceneSpecification,
} from "../../engines/buildCompositeSceneSpecification";

import {
  compositeCreativePipeline,
} from "./CompositeCreativePipeline";

import {
  buildCompositeCreativeAsset,
} from "./buildCompositeCreativeAsset";

import {
  openAIImageService,
} from "../AI/OpenAI/OpenAIImageService";

export class CreativeGenerationService {

  //------------------------------------------
  // Generate Image
  //------------------------------------------

  async generateImage(
    brief: CreativeBrief,
    productImage: File | null
  ): Promise<CreativeAsset> {

    //------------------------------------------
    // Composite Pipeline
    //------------------------------------------

    if (productImage) {

      console.log("");

      console.log(
        "====================================="
      );

      console.log(
        "Emma Creative Generation"
      );

      console.log(
        "====================================="
      );

      console.log("");

      console.log(
        "Pipeline: Composite Creative Engine"
      );

      //----------------------------------------
      // Build Composite Scene
      //----------------------------------------

      const scene =
        buildCompositeSceneSpecification(
          brief
        );

      //----------------------------------------
      // Generate Composite Image
      //----------------------------------------

      const compositeImage =
        await compositeCreativePipeline.generate({

          scene,

          productImage,

        });

      //----------------------------------------
      // Convert To Creative Asset
      //----------------------------------------

      return buildCompositeCreativeAsset({

        brief,

        image:
          compositeImage,

        prompt:
          "Generated using Emma Composite Creative Engine.",

      });

    }

    //------------------------------------------
    // Standard Pipeline
    //------------------------------------------

    console.log("");

    console.log(
      "====================================="
    );

    console.log(
      "Emma Creative Generation"
    );

    console.log(
      "====================================="
    );

    console.log("");

    console.log(
      "Pipeline: OpenAI Standard Generation"
    );

    return await openAIImageService.generateImage(

      brief,

      null

    );

  }

}

export const creativeGenerationService =
  new CreativeGenerationService();