import fs from "fs";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {

  console.log("");
  console.log("======================================");
  console.log("EmmaOS OpenAI Diagnostics");
  console.log("======================================");

  //------------------------------------------
  // API Key
  //------------------------------------------

  if (!process.env.OPENAI_API_KEY) {

    throw new Error(
      "OPENAI_API_KEY is not configured."
    );

  }

  console.log("✓ API Key Found");

  //------------------------------------------
  // Test Image
  //------------------------------------------

  const imagePath = path.resolve(
    "./scripts/test-product.jpg"
  );

  if (!fs.existsSync(imagePath)) {

    throw new Error(
      `Test image not found:\n${imagePath}`
    );

  }

  const stats = fs.statSync(imagePath);

  console.log("✓ Test Image Found");
  console.log("Path:", imagePath);
  console.log("Size:", stats.size, "bytes");

  //------------------------------------------
  // Test Basic Image Generation
  //------------------------------------------

  console.log("");
  console.log("Testing OpenAI Images API...");

  const response =
    await client.images.generate({

      model: "gpt-image-1",

      prompt:
        "A clean white coffee mug on a wooden table.",

      size: "1024x1024",

      quality: "high",

    });

  if (!response.data?.[0]?.b64_json) {

    throw new Error(
      "No image returned."
    );

  }

  console.log("✓ Images API Working");

  //------------------------------------------
  // Save Output
  //------------------------------------------

  const outputPath = path.resolve(
    "./scripts/output.png"
  );

  fs.writeFileSync(

    outputPath,

    Buffer.from(
      response.data[0].b64_json,
      "base64"
    )

  );

  console.log("✓ Image Saved");
  console.log(outputPath);

  console.log("");
  console.log("Diagnostics Complete.");

}

main().catch(error => {

  console.error("");
  console.error(error);

  process.exit(1);

});