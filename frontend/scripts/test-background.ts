import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs/promises";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

import { buildCompositeSceneSpecification } from "../engines/buildCompositeSceneSpecification";
import { CreativeBrief } from "../types/CreativeBrief";

async function main() {

  //------------------------------------------
  // Dynamically Import AFTER dotenv
  //------------------------------------------

  const {
    openAIBackgroundService,
  } = await import(
    "../services/AI/OpenAI/OpenAIBackgroundService"
  );

  console.log("");

  console.log("=====================================");
  console.log("EmmaOS Background Test");
  console.log("=====================================");

  console.log("");

  console.log(
    "OPENAI_API_KEY:",
    process.env.OPENAI_API_KEY
      ? "Loaded ✅"
      : "Missing ❌"
  );

  //------------------------------------------
  // Sample Creative Brief
  //------------------------------------------

  const brief: CreativeBrief = {

    productTitle:
      "Personalized Necklace",

    productDescription:
      "Luxury personalized necklace with message card.",

    audience:
      "Women purchasing meaningful gifts.",

    relationship:
      "Husband to Wife",

    occasion:
      "Anniversary",

    emotion:
      "Love",

    story:
      "Celebrate years together.",

    platform:
      "Facebook",

    placement:
      "Feed",

    strategy:
      "Emotional",

    headline:
      "A Gift She'll Never Forget",

    callToAction:
      "Shop Now",

    marketingAngle:
      "Emotional Connection",

    visualConcept:
      "Elegant home lifestyle",

    mood:
      "Warm",

    imagePrompt:
      "",

    videoPrompt:
      "",

    productImage:
      null,

  };

  //------------------------------------------
  // Scene
  //------------------------------------------

  const scene =
    buildCompositeSceneSpecification(
      brief
    );

  //------------------------------------------
  // Generate Background
  //------------------------------------------

  const background =
    await openAIBackgroundService
      .generateBackground(
        scene
      );

  //------------------------------------------
  // Save
  //------------------------------------------

  const outputDirectory =
    path.resolve("output");

  await fs.mkdir(
    outputDirectory,
    {
      recursive: true,
    }
  );

  const outputFile =
    path.join(
      outputDirectory,
      "background.png"
    );

  await fs.writeFile(
    outputFile,
    background
  );

  console.log("");

  console.log(
    "Background saved:"
  );

  console.log(
    outputFile
  );

}

main().catch(error => {

  console.error(error);

  process.exit(1);

});