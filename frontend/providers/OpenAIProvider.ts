import { AIProvider } from "./AIProvider";

import { CreativeBrief } from "../types/CreativeBrief";
import { CreativeAsset } from "../types/CreativeAsset";

export class OpenAIProvider implements AIProvider {

  readonly name = "OpenAI";

  //------------------------------------------
  // Generate Image
  //------------------------------------------

  async generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    const formData = new FormData();

    //------------------------------------------
    // Add Creative Brief
    //------------------------------------------

    formData.append(
      "brief",
      JSON.stringify(brief)
    );

    //------------------------------------------
    // Add Product Image
    //------------------------------------------

    if (brief.productImage) {

      formData.append(
        "productImage",
        brief.productImage
      );

    }

    //------------------------------------------
    // Send Request
    //------------------------------------------

    const response =
      await fetch("/api/generate-image", {

        method: "POST",

        body: formData,

      });

    const result =
      await response.json();

    if (!response.ok || !result.success) {

      throw new Error(
        result.error ??
        "Image generation failed."
      );

    }

    return result.asset;

  }

  //------------------------------------------
  // Generate Video
  //------------------------------------------

  async generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    throw new Error(
      "Video generation is not yet implemented."
    );

  }

}