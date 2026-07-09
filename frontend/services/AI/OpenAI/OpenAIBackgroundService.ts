import OpenAI from "openai";

import {
  CompositeSceneSpecification,
} from "../../../types/CompositeSceneSpecification";

import {
  buildBackgroundPrompt,
} from "../../../engines/backgroundPromptBuilder";

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
    // Prompt
    //------------------------------------------

    const prompt =
      buildBackgroundPrompt(
        scene
      );

    //------------------------------------------
    // Logging
    //------------------------------------------

    console.log("");

    console.log(
      "====================================="
    );

    console.log(
      "Emma Background Generation"
    );

    console.log(
      "====================================="
    );

    console.log("");

    console.log(prompt);

    //------------------------------------------
    // Create Client
    //------------------------------------------

    const client =
      createClient();

    //------------------------------------------
    // Generate
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

  }

}

export const openAIBackgroundService =
  new OpenAIBackgroundService();