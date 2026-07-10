import OpenAI from "openai";

import {
  CompositeSceneSpecification,
} from "../../../types/CompositeSceneSpecification";

function createClient(): OpenAI {

  const apiKey =
    process.env.OPENAI_API_KEY;

  if (!apiKey) {

    throw new Error(
      "OPENAI_API_KEY is not configured."
    );

  }

  return new OpenAI({

    apiKey,

  });

}

export class OpenAIBackgroundService {

  //------------------------------------------
  // Generate Background
  //------------------------------------------

  async generateBackground(
    scene: CompositeSceneSpecification
  ): Promise<Buffer> {

    //------------------------------------------
    // Use Existing Prompt
    //------------------------------------------

    const prompt =
      scene.backgroundPrompt;

    if (!prompt) {

      throw new Error(

        "Scene backgroundPrompt was not provided."

      );

    }

    //------------------------------------------
    // Logging
    //------------------------------------------

    console.log("");
    console.log("=====================================");
    console.log("Emma Background Generation");
    console.log("=====================================");
    console.log("");
    console.log(prompt);

    //------------------------------------------
    // Create Client
    //------------------------------------------

    const client =
      createClient();

    try {

      //------------------------------------------
      // Generate Background
      //------------------------------------------

      const response =
        await client.images.generate({

          model: "gpt-image-1",

          prompt,

          size: "1024x1024",

          quality: "high",

        });

      //------------------------------------------
      // Validate
      //------------------------------------------

      const base64 =
        response.data?.[0]?.b64_json;

      if (!base64) {

        throw new Error(
          "OpenAI did not return a background image."
        );

      }

      //------------------------------------------
      // Convert
      //------------------------------------------

      return Buffer.from(

        base64,

        "base64"

      );

    } catch (error) {

      console.error("");
      console.error("=====================================");
      console.error("OpenAI Background Generation Failed");
      console.error("=====================================");
      console.error(error);

      throw error;

    }

  }

}

export const openAIBackgroundService =
  new OpenAIBackgroundService();