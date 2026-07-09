import OpenAI from "openai";

import { CreativeBrief } from "../../../types/CreativeBrief";
import { CreativeAsset } from "../../../types/CreativeAsset";

import { buildSceneSpecification } from "../../../engines/buildSceneSpecification";
import { buildCompositeSceneSpecification } from "../../../engines/buildCompositeSceneSpecification";

import { buildOpenAIPrompt } from "./openAIPromptBuilder";

import { compositeCreativePipeline } from "../../Creative/CompositeCreativePipeline";
import { buildCompositeCreativeAsset } from "../../Creative/buildCompositeCreativeAsset";

let client: OpenAI | null = null;

function createClient(): OpenAI {

  if (!client) {

    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

  }

  return client;

}

export class OpenAIImageService {

  //------------------------------------------
  // Generate Image
  //------------------------------------------

  async generateImage(
    brief: CreativeBrief,
    productImage: File | null
  ): Promise<CreativeAsset> {

    //------------------------------------------
    // Verify Product Upload
    //------------------------------------------

    console.log("");
    console.log("=====================================");
    console.log("EmmaOS Product Upload");
    console.log("=====================================");

    if (productImage) {

      console.log("Filename:", productImage.name);
      console.log("Type:", productImage.type);
      console.log("Size:", productImage.size, "bytes");

    } else {

      console.log("No product image received.");

    }

    //------------------------------------------
    // Composite Creative Engine
    //------------------------------------------

    if (productImage) {

      console.log("");
      console.log("=====================================");
      console.log("Emma Composite Creative");
      console.log("=====================================");

      const compositeScene =
        buildCompositeSceneSpecification(
          brief
        );

      const image =
        await compositeCreativePipeline.generate({

          productImage,

          scene:
            compositeScene,

        });

      return buildCompositeCreativeAsset({

        brief,

        image,

        prompt:
          compositeScene.backgroundPrompt,

      });

    }

    //------------------------------------------
    // Build Scene Specification
    //------------------------------------------

    const scene =
      buildSceneSpecification(
        brief
      );

    //------------------------------------------
    // Build OpenAI Prompt
    //------------------------------------------

    const prompt =
      buildOpenAIPrompt(
        scene
      );

    console.log("");
    console.log("=====================================");
    console.log("EmmaOS Scene");
    console.log("=====================================");
    console.log(scene);

    console.log("");
    console.log("=====================================");
    console.log("OpenAI Prompt");
    console.log("=====================================");
    console.log(prompt);

    //------------------------------------------
    // Generate Image
    //------------------------------------------

    const response =
      await createClient().images.generate({

        model: "gpt-image-1",

        prompt,

        size: "1024x1024",

        quality: "high",

      });

    //------------------------------------------
    // Extract Image
    //------------------------------------------

    const base64 =
      response.data?.[0]?.b64_json;

    if (!base64) {

      throw new Error(
        "OpenAI did not return an image."
      );

    }

    const imageUrl =
      `data:image/png;base64,${base64}`;

    //------------------------------------------
    // Timestamp
    //------------------------------------------

    const now =
      new Date().toISOString();

    //------------------------------------------
    // Build Asset
    //------------------------------------------

    return {
         //----------------------------------------
      // Identity
      //----------------------------------------

      id:
        crypto.randomUUID(),

      name:
        `${brief.strategy} Image`,

      type:
        "Image",

      //----------------------------------------
      // Source
      //----------------------------------------

      strategy:
        brief.strategy,

      platform:
        brief.platform,

      placement:
        brief.placement,

      //----------------------------------------
      // Marketing
      //----------------------------------------

      headline:
        brief.headline,

      callToAction:
        brief.callToAction,

      marketingAngle:
        brief.marketingAngle,

      //----------------------------------------
      // Creative Direction
      //----------------------------------------

      visualConcept:
        brief.visualConcept,

      mood:
        brief.mood,

      //----------------------------------------
      // Generation
      //----------------------------------------

      provider:
        "OpenAI",

      status:
        "Completed",

      //----------------------------------------
      // Files
      //----------------------------------------

      url:
        imageUrl,

      thumbnailUrl:
        imageUrl,

      previewUrl:
        imageUrl,

      //----------------------------------------
      // Metadata
      //----------------------------------------

      prompt,

      width:
        1024,

      height:
        1024,

      duration:
        0,

      size:
        0,

      //----------------------------------------
      // Audit
      //----------------------------------------

      createdAt:
        now,

      updatedAt:
        now,

      //----------------------------------------
      // Future
      //----------------------------------------

      favorite:
        false,

      tags:
        [],

      notes:
        `Generated using ${scene.generationPipeline} pipeline.`,

    };

  }

  
} export const openAIImageService =
  new OpenAIImageService();  