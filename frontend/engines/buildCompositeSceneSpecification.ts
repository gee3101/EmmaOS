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
  AdCompositionSpecification,
} from "../types/AdCompositionSpecification";

import {
  buildAdComposition,
} from "./buildAdComposition";

import {
  buildSceneComposition,
} from "./buildSceneComposition";

import {
  buildPresentationAnchor,
} from "./PresentationDirector";

export function buildCompositeSceneSpecification(
  brief: CreativeBrief
): CompositeSceneSpecification {

  //------------------------------------------
  // Advertisement Composition
  //------------------------------------------

  const adComposition: AdCompositionSpecification =
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
  // Reserved Product Area
  //------------------------------------------

  const reservedProductArea = {

    x:
      adComposition.presentationX,

    y:
      adComposition.presentationY,

    width:
      adComposition.presentationWidth,

    height:
      adComposition.presentationHeight,

  };

  //------------------------------------------
  // Product Scale
  //------------------------------------------

  const productScale = {

    minCoverage:
      Math.max(
        20,
        Math.round(
          adComposition.heroProductCoverage * 100 * 0.70
        )
      ),

    idealCoverage:
      Math.round(
        adComposition.heroProductCoverage * 100
      ),

    maxCoverage:
      Math.min(
        60,
        Math.round(
          adComposition.heroProductCoverage * 100 * 1.20
        )
      ),

    preserveAspectRatio:
      true,

  };

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
    // Emma Advertisement Brain
    //------------------------------------------

    adComposition,

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
    // Reserved Product Area
    //------------------------------------------

    reservedProductArea,

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

    productScale,

    //------------------------------------------
    // Camera
    //------------------------------------------

    cameraAngle,

    //------------------------------------------
    // Environment
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

        subject => subject.description

      ),

    subjectActions:
      sceneComposition.subjects.map(

        subject => subject.handPose

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
      brief.preservation.preserveProduct,

    removeProductBackground:
      brief.preservation.allowBackgroundChange,

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

      adComposition.visualObjective,

      adComposition.compositionIntent,

      adComposition.photographerBrief,

      adComposition.heroProductDescription,

      adComposition.subjectPurpose,

      adComposition.environmentPurpose,

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

  const direction =
    brief.placementDirection
      .toLowerCase()
      .trim();

  switch (direction) {

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

    case "center":

      return {

        productPlacement:
          "center",

        intent:
          "hero-product",

        alignment:
          "center",

      };

    default:

      return {

        productPlacement:
          "center",

        intent:
          "hero-product",

        alignment:
          "center",

      };

  }

}

function determineCamera(
  brief: CreativeBrief
): CameraAngle {

  const framing =
    brief.framing
      .toLowerCase();

  //------------------------------------------
  // Advertisement Camera Selection
  //------------------------------------------

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

  //------------------------------------------
  // Default
  //------------------------------------------

  return "eye-level";

}
function determineLighting(
  brief: CreativeBrief
): LightingStyle {

  const lighting =
    brief.lighting
      .toLowerCase();

  //------------------------------------------
  // Advertisement Lighting
  //------------------------------------------

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

  //------------------------------------------
  // Default
  //------------------------------------------

  return "warm-indoor";

}