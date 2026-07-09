import { CreativeBrief } from "../types/CreativeBrief";

import {
  CompositeSceneSpecification,
  ProductPlacement,
  PlacementIntent,
  ProductAlignment,
  CameraAngle,
  LightingStyle,
} from "../types/CompositeSceneSpecification";

export function buildCompositeSceneSpecification(
  brief: CreativeBrief
): CompositeSceneSpecification {

  //------------------------------------------
  // Determine Scene
  //------------------------------------------

  const placement =
    determinePlacement(brief);

  const cameraAngle =
    determineCamera(brief);

  const lighting =
    determineLighting(brief);

  //------------------------------------------
  // Build Specification
  //------------------------------------------

  return {

    //------------------------------------------
    // Identity
    //------------------------------------------

    title:
      brief.productTitle,

    strategy:
      brief.strategy,

    //------------------------------------------
    // Prompt
    //------------------------------------------

    // Prompt is generated later by
    // backgroundPromptBuilder.ts

    backgroundPrompt:
      "",

    negativePrompt:
      "",

    //------------------------------------------
    // Product Placement
    //------------------------------------------

    productPlacement:
      placement.productPlacement,

    placementIntent:
      placement.intent,

    productAlignment:
      placement.alignment,

    reservedProductArea: {

      x: 58,

      y: 18,

      width: 32,

      height: 60,

    },

    safeMargins: {

      top: 5,

      right: 5,

      bottom: 5,

      left: 5,

    },

    //------------------------------------------
    // Orientation
    //------------------------------------------

    productRotation:
      0,

    //------------------------------------------
    // Scaling
    //------------------------------------------

    productScale: {

      minCoverage: 18,

      idealCoverage: 25,

      maxCoverage: 35,

      preserveAspectRatio: true,

    },

    //------------------------------------------
    // Camera
    //------------------------------------------

    cameraAngle,

    //------------------------------------------
    // Environment
    //------------------------------------------

    environment:
      brief.environment,

    foregroundElements: [],

    backgroundElements: [],

    //------------------------------------------
    // Lighting
    //------------------------------------------

    lighting,

    shadowDirection:
      "left",

    //------------------------------------------
    // Subjects
    //------------------------------------------

    subjects: [

      brief.audience,

    ],

    subjectActions: [

      brief.subjectInteraction,

    ],

    emotionalTone:
      brief.emotion,

    //------------------------------------------
    // Rendering
    //------------------------------------------

    aspectRatio:
      brief.layout.aspectRatio,

    outputWidth:
      brief.layout.width,

    outputHeight:
      brief.layout.height,

    //------------------------------------------
    // Product Preservation
    //------------------------------------------

    preserveOriginalProduct:
      brief.preservation.preserveOriginalProduct,

    removeProductBackground:
      brief.preservation.removeBackground,

    generateBackgroundOnly:
      true,

    //------------------------------------------
    // Metadata
    //------------------------------------------

    notes: [

      brief.marketingAngle,

      brief.visualConcept,

      brief.hook,

      brief.story,

    ],

  };

}

function determinePlacement(
  brief: CreativeBrief
): {

  productPlacement: ProductPlacement;

  intent: PlacementIntent;

  alignment: ProductAlignment;

} {

  switch (
    brief.placementDirection.toLowerCase()
  ) {

    case "left":

      return {

        productPlacement:
          "lower-left",

        intent:
          "hero-product",

        alignment:
          "left",

      };

    case "right":

      return {

        productPlacement:
          "lower-right",

        intent:
          "hero-product",

        alignment:
          "right",

      };

    default:

      return {

        productPlacement:
          "center",

        intent:
          "gift-presented",

        alignment:
          "center",

      };

  }

}

function determineCamera(
  brief: CreativeBrief
): CameraAngle {

  const framing =
    brief.framing.toLowerCase();

  if (
    framing.includes("flat")
  ) {

    return "overhead";

  }

  if (
    framing.includes("dramatic")
  ) {

    return "low-angle";

  }

  if (
    framing.includes("wide")
  ) {

    return "high-angle";

  }

  return "eye-level";

}

function determineLighting(
  brief: CreativeBrief
): LightingStyle {

  const lighting =
    brief.lighting.toLowerCase();

  if (
    lighting.includes("golden")
  ) {

    return "golden-hour";

  }

  if (
    lighting.includes("studio")
  ) {

    return "studio";

  }

  if (
    lighting.includes("day")
  ) {

    return "soft-daylight";

  }

  return "warm-indoor";

}