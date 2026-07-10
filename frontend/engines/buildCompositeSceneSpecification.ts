import { CreativeBrief } from "../types/CreativeBrief";

import {
  CompositeSceneSpecification,
  ProductPlacement,
  PlacementIntent,
  ProductAlignment,
  CameraAngle,
  LightingStyle,
} from "../types/CompositeSceneSpecification";

import {
  buildAdComposition,
} from "./buildAdComposition";

import {
  buildSceneComposition,
} from "./buildSceneComposition";

import {
  buildPresentationAnchor,
} from "./presentationAnchorEngine";

export function buildCompositeSceneSpecification(
  brief: CreativeBrief
): CompositeSceneSpecification {

  //------------------------------------------
  // Advertisement Composition
  //------------------------------------------

  const adComposition =
    buildAdComposition(
      brief
    );

  //------------------------------------------
  // Scene Composition
  //------------------------------------------

  const sceneComposition =
    buildSceneComposition(
      brief,
      adComposition
    );

  //------------------------------------------
  // Presentation Anchor
  //------------------------------------------

  const presentationAnchor =
    buildPresentationAnchor(
      brief
    );

  //------------------------------------------
  // Placement
  //------------------------------------------

  const placement =
    determinePlacement(
      brief
    );

  //------------------------------------------
  // Camera
  //------------------------------------------

  const cameraAngle =
    determineCamera(
      brief
    );

  //------------------------------------------
  // Lighting
  //------------------------------------------

  const lighting =
    determineLighting(
      brief
    );

  //------------------------------------------
  // Return
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
    // EmmaOS 2.0
    //------------------------------------------

    sceneComposition,

    presentationAnchor,

    //------------------------------------------
    // Prompt
    //------------------------------------------

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

    //------------------------------------------
    // Reserved Presentation Area
    //------------------------------------------

    reservedProductArea: {

      x:
        presentationAnchor.centerX -
        (presentationAnchor.width / 2),

      y:
        presentationAnchor.centerY -
        (presentationAnchor.height / 2),

      width:
        presentationAnchor.width,

      height:
        presentationAnchor.height,

    },

    //------------------------------------------
    // Safe Margins
    //------------------------------------------

    safeMargins: {

      top: 5,

      right: 5,

      bottom: 5,

      left: 5,

    },

    //------------------------------------------
    // Product Orientation
    //------------------------------------------

    productRotation:
      presentationAnchor.rotation,

    //------------------------------------------
    // Product Scaling
    //------------------------------------------

    productScale: {

      minCoverage: 18,

      idealCoverage: 25,

      maxCoverage: 35,

      preserveAspectRatio:
        true,

    },

    //------------------------------------------
    // Camera
    //------------------------------------------

    cameraAngle,

    //------------------------------------------
    // Compatibility Layer
    //------------------------------------------

    environment:
      sceneComposition.environment.location,

    foregroundElements:
      sceneComposition.environment.foregroundObjects,

    backgroundElements:
      sceneComposition.environment.backgroundObjects,

    //------------------------------------------
    // Lighting
    //------------------------------------------

    lighting,

    shadowDirection:
      "left",

    //------------------------------------------
    // Subjects
    //------------------------------------------

    subjects:
      sceneComposition.subjects.map(
        subject =>
          subject.description
      ),

    subjectActions:
      sceneComposition.subjects.map(
        subject =>
          subject.handPose
      ),

    emotionalTone:
      sceneComposition.emotionalMoment,

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

      presentationAnchor.interaction,

      ...sceneComposition.constraints,

      ...sceneComposition.quality,

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