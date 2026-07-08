import OpenAI from "openai";

import { ProductVision } from "../types/ProductVision";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIVisionService {

  //------------------------------------------
  // Analyze Product Image
  //------------------------------------------

  async analyzeProductImage(
    image: File
  ): Promise<ProductVision> {

    //------------------------------------------
    // Convert Image
    //------------------------------------------

    const bytes =
      await image.arrayBuffer();

    const base64 =
      Buffer.from(bytes).toString("base64");

    //------------------------------------------
    // Vision Prompt
    //------------------------------------------

    const response =
      await client.responses.create({

        model: "gpt-4.1",

        input: [

          {
            role: "system",

            content: [

              {
                type: "input_text",

                text: `You are Emma Vision.

Analyze this product image.

Return ONLY valid JSON.

Do not explain anything.

Populate every field exactly.

If uncertain, make your best estimate.

Return this schema:

{
  "productType":"",
  "productSubtype":"",
  "material":"",
  "finish":"",
  "primaryColor":"",
  "secondaryColors":[],
  "shape":"",
  "orientation":"",
  "style":"",
  "theme":"",
  "focalPoint":"",
  "designElements":[],
  "personalized":false,
  "engravingDetected":false,
  "engravingLocation":"",
  "condition":"",
  "quality":"",
  "backgroundRemoved":false,
  "confidence":1
}`
              }

            ]

          },

          {
            role: "user",

            content: [

              {
                type: "input_image",

                image_url:
                  `data:${image.type};base64,${base64}`
              }

            ]

          }

        ]

      });

    //------------------------------------------
    // Parse JSON
    //------------------------------------------

    const text =
      response.output_text;

    const vision =
      JSON.parse(text) as ProductVision;

    return vision;

  }

}

export const openAIVisionService =
  new OpenAIVisionService();