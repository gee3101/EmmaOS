import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs/promises";

//------------------------------------------
// Load Environment
//------------------------------------------

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

import {
  removeBgImageProcessingProvider,
} from "../services/ImageProcessing/providers/RemoveBgImageProcessingProvider";

async function main() {

  //------------------------------------------
  // Verify Environment
  //------------------------------------------

  console.log("");
  console.log("=====================================");
  console.log("EmmaOS Remove.bg Test");
  console.log("=====================================");
  console.log("");

  console.log(
    "REMOVE_BG_API_KEY:",
    process.env.REMOVE_BG_API_KEY
      ? "Loaded ✅"
      : "Missing ❌"
  );

  console.log("");

  if (!process.env.REMOVE_BG_API_KEY) {

    throw new Error(
      "REMOVE_BG_API_KEY could not be loaded from .env.local"
    );

  }

  //------------------------------------------
  // Input File
  //------------------------------------------

  const inputPath = process.argv[2];

  if (!inputPath) {

    throw new Error(
      "Please provide an input image."
    );

  }

  const absolutePath =
    path.resolve(inputPath);

  const fileBuffer =
    await fs.readFile(
      absolutePath
    );

  const file =
    new File(

      [fileBuffer],

      path.basename(
        absolutePath
      ),

      {

        type: "image/png",

      }

    );

  //------------------------------------------
  // Remove Background
  //------------------------------------------

  const output =
    await removeBgImageProcessingProvider
      .removeBackground(file);

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

      "transparent-product.png"

    );

  await fs.writeFile(

    outputFile,

    output

  );

  console.log(
    "Saved:",
    outputFile
  );

}

main().catch(error => {

  console.error("");

  console.error(error);

  process.exit(1);

});