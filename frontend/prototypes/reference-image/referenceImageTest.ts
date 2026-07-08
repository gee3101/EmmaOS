import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import OpenAI from "openai";

dotenv.config({
  path: ".env.local",
});

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//------------------------------------------
// Configuration
//------------------------------------------

const INPUT_IMAGE =
  path.join(__dirname, "product.jpg");

const OUTPUT_IMAGE =
  path.join(__dirname, "result.png");

//------------------------------------------
// Prompt
//------------------------------------------

const prompt = `

You are an award-winning commercial advertising photographer.

The uploaded image is the REAL product.

The uploaded product is the source of truth.

CRITICAL REQUIREMENTS

Use the uploaded product exactly as shown.

Do NOT redesign the product.

Do NOT change:

- shape
- engraving
- gemstones
- chain
- materials
- colors
- finish
- packaging

Only change the environment around the product.

Create a premium luxury lifestyle photograph.

Warm golden-hour lighting.

Elegant emotional setting.

Professional commercial photography.

Photorealistic.

Magazine-quality.

Generate photography only.

Do NOT render text.

Do NOT render logos.

Do NOT render watermarks.

Do NOT create a finished advertisement.

Leave approximately 25% clean negative space
in the upper-left corner.

`;

async function main() {

  console.log("");
  console.log("=================================");
  console.log("EmmaOS Reference Image Prototype");
  console.log("=================================");

  //------------------------------------------
  // Verify API Key
  //------------------------------------------

  if (!process.env.OPENAI_API_KEY) {

    throw new Error(
      "OPENAI_API_KEY was not found in .env.local"
    );

  }

  //------------------------------------------
  // Verify image exists
  //------------------------------------------

  console.log("");
  console.log("Looking for:");
  console.log(INPUT_IMAGE);

  if (!fs.existsSync(INPUT_IMAGE)) {

    throw new Error(
      `Product image not found:\n${INPUT_IMAGE}`
    );

  }

  //------------------------------------------
  // Load image
  //------------------------------------------

  const image =
    fs.readFileSync(INPUT_IMAGE);

  console.log("");
  console.log("Product image loaded successfully.");

  //------------------------------------------
  // Generate image
  //------------------------------------------

  console.log("");
  console.log("Sending request to OpenAI...");

  const response =
    await client.images.edit({

      model: "gpt-image-1",

      image,

      prompt,

      size: "1024x1024",

      quality: "high",

    });

  //------------------------------------------
  // Extract image
  //------------------------------------------

  const base64 =
    response.data?.[0]?.b64_json;

  if (!base64) {

    throw new Error(
      "No image returned from OpenAI."
    );

  }

  //------------------------------------------
  // Save image
  //------------------------------------------

  fs.writeFileSync(
    OUTPUT_IMAGE,
    Buffer.from(base64, "base64")
  );

  console.log("");
  console.log("=================================");
  console.log("SUCCESS");
  console.log("=================================");
  console.log("");
  console.log(`Saved image to:\n${OUTPUT_IMAGE}`);

}

main().catch((err) => {

  console.error("");
  console.error("=================================");
  console.error("Prototype Failed");
  console.error("=================================");
  console.error(err);

});