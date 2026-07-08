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

    const response =
      await fetch("/api/generate-image", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          brief,
        }),

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

    /**
     * Video generation will be implemented
     * once the video endpoint is complete.
     */

    throw new Error(
      "Video generation is not yet implemented."
    );

  }

}