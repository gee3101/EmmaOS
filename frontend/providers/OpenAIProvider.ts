import { AIProvider } from "./AIProvider";

import { CreativeBrief } from "../types/CreativeBrief";
import { CreativeAsset } from "../types/CreativeAsset";

export class OpenAIProvider implements AIProvider {

  readonly name = "OpenAI";

  //------------------------------------------
  // Lifestyle Image
  //------------------------------------------

  async generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    return this.generate(
      "/api/generate-image",
      brief
    );

  }

  //------------------------------------------
  // Facebook Advertisement
  //------------------------------------------

  async generateFacebookAd(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    return this.generate(
      "/api/generate-facebook-ad",
      brief
    );

  }

  //------------------------------------------
  // Shared Upload Logic
  //------------------------------------------

  private async generate(

    endpoint: string,

    brief: CreativeBrief

  ): Promise<CreativeAsset> {

    const formData =
      new FormData();

    //------------------------------------------
    // Creative Brief
    //------------------------------------------

    formData.append(

      "brief",

      JSON.stringify(brief)

    );

    //------------------------------------------
    // Product Image
    //------------------------------------------

    if (brief.productImage) {

      formData.append(

        "productImage",

        brief.productImage

      );

    }

    //------------------------------------------
    // Request
    //------------------------------------------

    const response =
      await fetch(

        endpoint,

        {

          method: "POST",

          body: formData,

        }

      );

    const result =
      await response.json();

    if (!response.ok || !result.success) {

      throw new Error(

        result.error ??

        "Generation failed."

      );

    }

    return result.asset;

  }

  //------------------------------------------
  // Video
  //------------------------------------------

  async generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    throw new Error(
      "Video generation is not yet implemented."
    );

  }

}