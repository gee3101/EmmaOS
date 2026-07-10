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
  buildFacebookAdPrompt,
} from "../AI/OpenAI/facebookAdPromptBuilder";

import {
  compositeCreativePipeline,
} from "./CompositeCreativePipeline";

import {
  buildCompositeCreativeAsset,
} from "./buildCompositeCreativeAsset";

/**
 * ------------------------------------------
 * Facebook Advertisement Service
 * ------------------------------------------
 *
 * Dedicated orchestration layer for
 * Facebook advertisement generation.
 *
 * Responsibilities:
 *
 * • Build advertisement scene
 * • Build Facebook prompt
 * • Generate composite
 * • Return CreativeAsset
 *
 * This service intentionally contains
 * NO OpenAI SDK code.
 */

export class FacebookAdService {

  //------------------------------------------
  // Generate Facebook Advertisement
  //------------------------------------------

  async generateFacebookAd(

    brief: CreativeBrief,

    productImage: File | null

  ): Promise<CreativeAsset> {

    if (!productImage) {

      throw new Error(

        "Facebook advertisements require an uploaded product image."

      );

    }

    console.log("");

    console.log("=====================================");

    console.log("Emma Facebook Advertisement");

    console.log("=====================================");

    //------------------------------------------
    // Build Advertisement Scene
    //------------------------------------------

    const scene =
      buildCompositeSceneSpecification(
        brief
      );

    console.log("");

    console.log("=====================================");

    console.log("Facebook Scene Specification");

    console.log("=====================================");

    console.dir(
      scene,
      { depth: null }
    );

    //------------------------------------------
    // Facebook Prompt
    //------------------------------------------

    const prompt =
      buildFacebookAdPrompt(

        scene.adComposition,

        scene

      );

    console.log("");

    console.log("=====================================");

    console.log("Facebook Prompt");

    console.log("=====================================");

    console.log(prompt);

    //------------------------------------------
    // Store Prompt
    //------------------------------------------

    scene.backgroundPrompt =
      prompt;

    //------------------------------------------
    // Generate Composite
    //------------------------------------------

    console.log("");

    console.log("=====================================");

    console.log("Running Composite Pipeline");

    console.log("=====================================");

    const image =
      await compositeCreativePipeline.generate({

        scene,

        productImage,

      });

    console.log("");

    console.log("=====================================");

    console.log("Composite Pipeline Complete");

    console.log("=====================================");

    //------------------------------------------
    // Creative Asset
    //------------------------------------------

    return buildCompositeCreativeAsset({

      brief,

      image,

      prompt,

    });

  }

}

export const facebookAdService =
  new FacebookAdService();