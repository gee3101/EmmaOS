import { CreativeBrief } from "../types/CreativeBrief";

export function composeImagePrompt(
  brief: CreativeBrief
): string {

  //------------------------------------------
  // Product Preservation
  //------------------------------------------

  const preservation = brief.preservation;

  const sacredElements: string[] = [];

  if (preservation.preserveJewelry)
    sacredElements.push("Jewelry");

  if (preservation.preserveArtwork)
    sacredElements.push("Artwork");

  if (preservation.preservePackaging)
    sacredElements.push("Packaging");

  if (preservation.preservePrintedText)
    sacredElements.push("Printed Message");

  if (preservation.preserveEngraving)
    sacredElements.push("Engraving");

  if (preservation.preserveBranding)
    sacredElements.push("Brand Identity");

  const sacredList =
    sacredElements
      .map(item => `• ${item}`)
      .join("\n");

  const reasoning =
    preservation.reasoning
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------

  return `

====================================================
ROLE
====================================================

You are one of the world's best luxury commercial
advertising photographers.

Create premium commercial photography only.

Never create advertisements.

Never render text.

Never render logos.

Never render watermarks.

Never render typography.

====================================================
MISSION
====================================================

Create a luxury lifestyle photograph.

The uploaded product is always the hero.

Everything else supports the product.

====================================================
PRODUCT
====================================================

Product

${brief.productTitle}

Description

${brief.description}

====================================================
CUSTOMER
====================================================

Relationship

${brief.relationship}

Occasion

${brief.occasion}

Emotion

${brief.emotion}

Audience

${brief.audience}

Story

${brief.story}

====================================================
CREATIVE DIRECTION
====================================================

Concept

${brief.visualConcept}

Environment

${brief.environment}

Lighting

${brief.lighting}

Mood

${brief.mood}

====================================================
PRODUCT DIRECTION
====================================================

Hero Priority

${brief.heroPriority}

Prominence

${brief.prominence}

Visibility

${brief.visibility}

Framing

${brief.framing}

Focus

${brief.focus}

Placement

${brief.placementDirection}

Orientation

${brief.orientation}

Hand Placement

${brief.handPlacement}

Subject Interaction

${brief.subjectInteraction}

Background Blur

${brief.backgroundBlur}

Product Lighting

${brief.productLighting}

====================================================
PRODUCT PRESERVATION
====================================================

Generation Pipeline

${preservation.generationPipeline}

The following product elements are sacred and must
remain visually identical:

${sacredList}

Never redesign them.

Never reinterpret them.

Never simplify them.

Never replace them.

Only the environment, camera, lighting, people,
and props may change.

====================================================
AI REASONING
====================================================

${reasoning}

====================================================
QUALITY
====================================================

Luxury commercial photography.

Magazine-quality composition.

Warm cinematic lighting.

Natural human emotion.

Photorealistic.

Elegant color grading.

Professional product photography.

The product remains the visual hero.

Leave approximately 25% clean negative space in the
upper-left corner for future advertising copy.

Generate photography only.

`;

}

export function composeVideoPrompt(
  brief: CreativeBrief
): string {

  return `

Create a luxury commercial lifestyle video.

Generate cinematic footage only.

Do not render text.

Do not render captions.

Do not render logos.

Do not render watermarks.

Product

${brief.productTitle}

Story

${brief.story}

Audience

${brief.audience}

Concept

${brief.visualConcept}

Environment

${brief.environment}

Lighting

${brief.lighting}

Mood

${brief.mood}

The uploaded product must remain visually identical.

The product is always the visual hero.

Generate premium commercial cinematography.

`;

}