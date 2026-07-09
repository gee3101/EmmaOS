import { SceneSpecification } from "../../../types/SceneSpecification";

export function buildOpenAIPrompt(
  scene: SceneSpecification
): string {

  //------------------------------------------
  // Sacred Elements
  //------------------------------------------

  const sacredElements: string[] = [];

  if (scene.preservation.preserveJewelry)
    sacredElements.push("Jewelry");

  if (scene.preservation.preserveArtwork)
    sacredElements.push("Artwork");

  if (scene.preservation.preservePackaging)
    sacredElements.push("Packaging");

  if (scene.preservation.preservePrintedText)
    sacredElements.push("Printed Message");

  if (scene.preservation.preserveEngraving)
    sacredElements.push("Engraving");

  if (scene.preservation.preserveBranding)
    sacredElements.push("Brand Identity");

  const sacredList =
    sacredElements
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Preservation Reasoning
  //------------------------------------------

  const preservationReasoning =
    scene.preservation.reasoning
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Quality Standards
  //------------------------------------------

  const quality =
    scene.quality
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Creative Instructions
  //------------------------------------------

  const instructions =
    scene.instructions
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Negative Instructions
  //------------------------------------------

  const negatives =
    scene.negativeInstructions
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Prompt
  //------------------------------------------

  return `

====================================================
ROLE
====================================================

You are one of the world's best luxury commercial
advertising photographers.

Generate premium commercial photography only.

Never generate advertisements.

Never render typography.

Never render logos.

Never render watermarks.

====================================================
MISSION
====================================================

Create a luxury lifestyle photograph.

The uploaded product is always the hero.

Everything else exists to support the product.

====================================================
PRODUCT
====================================================

${scene.productTitle}

${scene.productDescription}

====================================================
CUSTOMER
====================================================

Audience

${scene.audience}

Relationship

${scene.relationship}

Occasion

${scene.occasion}

Emotion

${scene.emotion}

Story

${scene.story}

====================================================
CREATIVE DIRECTION
====================================================

Concept

${scene.concept}

Environment

${scene.environment}

Mood

${scene.mood}

Lighting

${scene.lighting}

====================================================
PHOTOGRAPHY
====================================================

Style

${scene.photographyStyle}

Camera

${scene.cameraAngle}

Depth of Field

${scene.depthOfField}

Focal Point

${scene.focalPoint}

====================================================
PRODUCT DIRECTION
====================================================

Hero Priority

${scene.heroPriority}

Prominence

${scene.prominence}

Visibility

${scene.visibility}

Framing

${scene.framing}

Placement

${scene.placement}

Orientation

${scene.orientation}

Hand Placement

${scene.handPlacement}

Subject Interaction

${scene.subjectInteraction}

====================================================
LAYOUT
====================================================

Aspect Ratio

${scene.layout.aspectRatio}

Negative Space

${scene.layout.negativeSpace}

Reserve Headline Area

${scene.layout.reserveHeadlineArea}

====================================================
PRODUCT PRESERVATION
====================================================

Generation Pipeline

${scene.generationPipeline}

Sacred Product Elements

${sacredList}

Reasoning

${preservationReasoning}

====================================================
QUALITY
====================================================

${quality}

====================================================
INSTRUCTIONS
====================================================

${instructions}

====================================================
NEGATIVE PROMPT
====================================================

${negatives}

====================================================
FINAL STANDARD
====================================================

The result should resemble a luxury commercial
photograph created by a world-class advertising agency.

Generate photography only.

`;

}