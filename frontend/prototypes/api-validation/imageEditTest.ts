import dotenv from "dotenv";
import fs from "fs";
import path from "path";

//------------------------------------------
// Load Environment
//------------------------------------------

const envPath = path.resolve(
  process.cwd(),
  ".env.local"
);

console.log("");
console.log("=================================");
console.log("EmmaOS Environment");
console.log("=================================");
console.log("Loading:", envPath);

dotenv.config({
  path: envPath,
});

//------------------------------------------
// Main
//------------------------------------------

async function main() {

  console.log("");
  console.log("=================================");
  console.log("EmmaOS Image Edit Validation");
  console.log("=================================");

  //------------------------------------------
  // API Key
  //------------------------------------------

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {

    throw new Error(
      "OPENAI_API_KEY not found."
    );

  }

  //------------------------------------------
  // Files
  //------------------------------------------

  const prototypeFolder =
    path.join(
      process.cwd(),
      "prototypes",
      "api-validation"
    );

  const imagePath =
    path.join(
      prototypeFolder,
      "product.jpg"
    );

  const promptPath =
    path.join(
      prototypeFolder,
      "prompt.txt"
    );

  const outputPath =
    path.join(
      prototypeFolder,
      "output.png"
    );

  if (!fs.existsSync(imagePath)) {

    throw new Error(
      `Missing product image:\n${imagePath}`
    );

  }

  if (!fs.existsSync(promptPath)) {

    throw new Error(
      `Missing prompt:\n${promptPath}`
    );

  }

  const prompt =
    fs.readFileSync(
      promptPath,
      "utf8"
    );

  //------------------------------------------
  // Build Multipart Form
  //------------------------------------------

  const form =
    new FormData();

  form.append(
    "model",
    "gpt-image-1"
  );

  form.append(
    "prompt",
    prompt
  );

  form.append(
    "image",
    new Blob(
      [
        fs.readFileSync(imagePath)
      ],
      {
        type: "image/jpeg",
      }
    ),
    "product.jpg"
  );

  //------------------------------------------
  // Send Request
  //------------------------------------------

  console.log("");
  console.log("Sending request...");

  const response =
    await fetch(
      "https://api.openai.com/v1/images/edits",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${apiKey}`,
        },

        body: form,
      }
    );

  //------------------------------------------
  // Parse Response
  //------------------------------------------

  const json =
    await response.json();

  console.log("");
  console.log("Status:", response.status);

  if (!response.ok) {

    console.log("");
    console.log(json);

    return;

  }

  //------------------------------------------
  // Extract Image
  //------------------------------------------

  const base64 =
    json.data?.[0]?.b64_json;

  if (!base64) {

    throw new Error(
      "No image returned."
    );

  }

  //------------------------------------------
  // Save PNG
  //------------------------------------------

  fs.writeFileSync(

    outputPath,

    Buffer.from(
      base64,
      "base64"
    )

  );

  console.log("");
  console.log("=================================");
  console.log("SUCCESS");
  console.log("=================================");
  console.log("");
  console.log("Saved:");
  console.log(outputPath);

}

main().catch((err) => {

  console.log("");
  console.log("=================================");
  console.log("Prototype Failed");
  console.log("=================================");

  console.error(err);

});