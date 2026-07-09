import { CreativeBrief } from "../types/CreativeBrief";
import { SceneSpecification } from "../types/SceneSpecification";

export function directScene(
  brief: CreativeBrief
): SceneSpecification {

  //------------------------------------------
  // Quality Standards
  //------------------------------------------

  const quality: string[] = [

    "Photorealistic",

    "Luxury commercial photography",

    "Magazine-quality composition",

    "Professional product photography",

    "Warm cinematic lighting",

    "Natural human emotion",

    "Balanced composition",

    "Elegant color grading",

    "High-end advertising aesthetic",

  ];

  //------------------------------------------
  // Rendering Instructions
  //------------------------------------------

  const instructions: string[] = [

    "The uploaded product is always the visual hero.",

    "Everything in the scene should support the product.",

    "Generate photography only.",

    "Do not generate advertisements.",

    "Leave negative space according to the layout specification.",

  ];

  //------------------------------------------
  // Preservation Instructions
  //------------------------------------------

  if (brief.preservation.preserveProduct) {

    instructions.push(

      "Preserve the uploaded product exactly."

    );

  }

  if (brief.preservation.preserveJewelry) {

    instructions.push(

      "Do not alter the jewelry.",

      "Do not redesign the chain.",

      "Do not modify gemstones or metal."

    );

  }

  if (brief.preservation.preserveArtwork) {

    instructions.push(

      "Preserve all artwork exactly."

    );

  }

  if (brief.preservation.preservePrintedText) {

    instructions.push(

      "Never rewrite printed text.",

      "Never replace personalized messages."

    );

  }

  if (brief.preservation.preservePackaging) {

    instructions.push(

      "Packaging is part of the product."

    );

  }

  //------------------------------------------
  // Negative Instructions
  //------------------------------------------

  const negativeInstructions: string[] = [

    "No logos",

    "No watermarks",

    "No captions",

    "No headlines",

    "No pricing",

    "No call-to-action buttons",

    "No promotional graphics",

    "No unreadable text",

    "No redesign of the uploaded product",

  ];

  //------------------------------------------
  // Build Scene Specification
  //------------------------------------------

  return {

    //------------------------------------------
    // Identity
    //------------------------------------------

    name:
      `${brief.platform} ${brief.placement}`,

    objective:
      brief.objective,

    //------------------------------------------
    // Product
    //------------------------------------------

    productTitle:
      brief.productTitle,

    productDescription:
      brief.description,

    //------------------------------------------
    // Customer
    //------------------------------------------

    audience:
      brief.audience,

    relationship:
      brief.relationship,

    occasion:
      brief.occasion,

    emotion:
      brief.emotion,

    story:
      brief.story,

    //------------------------------------------
    // Creative Direction
    //------------------------------------------

    concept:
      brief.visualConcept,

    environment:
      brief.environment,

    mood:
      brief.mood,

    lighting:
      brief.lighting,

    //------------------------------------------
    // Photography
    //------------------------------------------

    photographyStyle:
      "Luxury Commercial Photography",

    cameraAngle:
      brief.layout.cameraAngle,

    depthOfField:
      brief.layout.depthOfField,

    focalPoint:
      brief.layout.focalPoint,

    //------------------------------------------
    // Product Direction
    //------------------------------------------

    heroPriority:
      brief.heroPriority,

    prominence:
      brief.prominence,

    visibility:
      brief.visibility,

    framing:
      brief.framing,

    placement:
      brief.placementDirection,

    orientation:
      brief.orientation,

    handPlacement:
      brief.handPlacement,

    subjectInteraction:
      brief.subjectInteraction,

    //------------------------------------------
    // Layout
    //------------------------------------------

    layout:
      brief.layout,

    //------------------------------------------
    // Preservation
    //------------------------------------------

    preservation:
      brief.preservation,

    //------------------------------------------
    // Rendering
    //------------------------------------------

    generationPipeline:
      brief.preservation.generationPipeline,

    renderStyle:
      "Photorealistic",

    //------------------------------------------
    // Quality
    //------------------------------------------

    quality,

    //------------------------------------------
    // Instructions
    //------------------------------------------

    instructions,

    //------------------------------------------
    // Negative Instructions
    //------------------------------------------

    negativeInstructions,

  };

}