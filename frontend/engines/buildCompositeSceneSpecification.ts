import { CreativeBrief } from "../types/CreativeBrief";
import {
  CompositeSceneSpecification,
  ProductPlacement,
  CameraAngle,
  LightingStyle,
  ShadowDirection,
} from "../types/CompositeSceneSpecification";

export function buildCompositeSceneSpecification(
  brief: CreativeBrief
): CompositeSceneSpecification {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  const productPlacement: ProductPlacement =
    "lower-right";

  const cameraAngle: CameraAngle =
    "eye-level";

  const lighting: LightingStyle =
    "warm-indoor";

  const shadowDirection: ShadowDirection =
    "left";

  //------------------------------------------
  // Emotional Tone
  //------------------------------------------

  const emotionalTone =
    brief.strategy || "Emotional";

  //------------------------------------------
  // Environment
  //------------------------------------------

  let environment =
    "A beautifully decorated modern home.";

  let foregroundElements: string[] = [];

  let backgroundElements: string[] = [];

  let subjects: string[] = [];

  let subjectActions: string[] = [];

  //------------------------------------------
  // Strategy-Based Scene Planning
  //------------------------------------------

  switch (
    emotionalTone.toLowerCase()
  ) {

    case "emotional":

      environment =
        "A warm, elegant living room during golden hour.";

      foregroundElements = [
        "Comfortable furniture",
        "Soft blankets",
        "Coffee table",
      ];

      backgroundElements = [
        "Large windows",
        "Warm sunlight",
        "Family décor",
      ];

      subjects = [
        "Mother",
        "Adult daughter",
      ];

      subjectActions = [
        "Smiling warmly",
        "Presenting a meaningful gift",
        "Making eye contact",
      ];

      break;

    case "luxury":

      environment =
        "A sophisticated luxury interior with premium finishes.";

      foregroundElements = [
        "Marble table",
        "Designer décor",
      ];

      backgroundElements = [
        "Modern architecture",
        "Luxury furnishings",
      ];

      subjects = [
        "Elegant woman",
      ];

      subjectActions = [
        "Admiring a premium gift",
      ];

      break;

    case "romantic":

      environment =
        "A cozy candlelit room with intimate ambiance.";

      foregroundElements = [
        "Candles",
        "Flowers",
      ];

      backgroundElements = [
        "Warm bokeh lighting",
      ];

      subjects = [
        "Couple",
      ];

      subjectActions = [
        "Exchanging gifts",
        "Smiling",
      ];

      break;

    default:

      environment =
        "A clean, inviting lifestyle environment.";

      foregroundElements = [
        "Tasteful home décor",
      ];

      backgroundElements = [
        "Soft natural lighting",
      ];

      subjects = [
        "Happy customer",
      ];

      subjectActions = [
        "Holding a gift",
      ];

      break;

  }

  //------------------------------------------
  // Background Prompt
  //------------------------------------------

  const backgroundPrompt = `
Create a photorealistic lifestyle scene.

Environment:
${environment}

Subjects:
${subjects.join(", ")}

Actions:
${subjectActions.join(", ")}

Foreground:
${foregroundElements.join(", ")}

Background:
${backgroundElements.join(", ")}

Lighting:
${lighting}

Camera:
${cameraAngle}

IMPORTANT:

Do NOT generate any product.

Do NOT generate jewelry.

Do NOT generate gift boxes.

Do NOT generate message cards.

Leave natural empty space where the product will later be composited.

The final image should appear as though someone is naturally presenting a gift while leaving the product area empty.

No text.

No logos.

No branding.

Professional commercial lifestyle photography.
`.trim();

  //------------------------------------------
  // Negative Prompt
  //------------------------------------------

  const negativePrompt = `
Jewelry,
Necklace,
Gift box,
Message card,
Packaging,
Text,
Typography,
Logo,
Watermark,
Advertisement,
Call to action,
UI elements,
Graphic design,
Product rendering
`.trim();

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    //------------------------------------------
    // Scene Identity
    //------------------------------------------

    title:
      brief.productTitle ??
      "Lifestyle Scene",

    strategy:
      emotionalTone,

    //------------------------------------------
    // Scene Prompt
    //------------------------------------------

    backgroundPrompt,

    negativePrompt,

    //------------------------------------------
    // Composition
    //------------------------------------------

    productPlacement,

    reservedProductArea: {

      x: 60,

      y: 55,

      width: 30,

      height: 35,

    },

    cameraAngle,

    //------------------------------------------
    // Environment
    //------------------------------------------

    environment,

    foregroundElements,

    backgroundElements,

    //------------------------------------------
    // Lighting
    //------------------------------------------

    lighting,

    shadowDirection,

    //------------------------------------------
    // Subject Direction
    //------------------------------------------

    subjects,

    subjectActions,

    emotionalTone,

    //------------------------------------------
    // Rendering
    //------------------------------------------

    aspectRatio: "1:1",

    outputWidth: 1024,

    outputHeight: 1024,

    //------------------------------------------
    // Product Preservation
    //------------------------------------------

    preserveOriginalProduct: true,

    removeProductBackground: true,

    generateBackgroundOnly: true,

    //------------------------------------------
    // Metadata
    //------------------------------------------

    notes: [

      "Reserved area is intended for product compositing.",

      "Background intentionally excludes the product.",

      "Original uploaded product should be preserved without modification.",

    ],

  };

}