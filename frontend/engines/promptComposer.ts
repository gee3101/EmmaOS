import { CreativeBrief } from "../types/CreativeBrief";

export function composeImagePrompt(
  brief: CreativeBrief
): string {

  const preserveDetails =
    brief.preserveDetails
      .map(rule => `• ${rule}`)
      .join("\n");

  return `

====================================================
ROLE
====================================================

You are one of the world's best luxury commercial
advertising photographers.

Your job is to create production-ready commercial
photography.

You are NOT a graphic designer.

You are NOT creating a Facebook advertisement.

You are NOT creating marketing graphics.

Generate photography only.

====================================================
MISSION
====================================================

Create an emotionally compelling luxury lifestyle
photograph.

The product is ALWAYS the hero.

Everything in the image should support the product.

====================================================
CRITICAL RULES
====================================================

Generate ONLY photography.

DO NOT render any text.

DO NOT render headlines.

DO NOT render typography.

DO NOT render logos.

DO NOT render captions.

DO NOT render slogans.

DO NOT render call-to-action buttons.

DO NOT render pricing.

DO NOT render promotional graphics.

DO NOT render watermarks.

The final image must contain ZERO readable text.

Leave approximately 25% clean negative space in the
upper-left corner for future advertising copy.

The image should look like it came directly from a
professional commercial photoshoot BEFORE the designer
adds copy.

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

Pain Point

${brief.painPoint}

Desire

${brief.desire}

Fear

${brief.fear}

Motivation

${brief.motivation}

====================================================
EMOTIONAL STORY
====================================================

${brief.story}

====================================================
CREATIVE DIRECTION
====================================================

Visual Concept

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
PRODUCT PROTECTION RULES
====================================================

${preserveDetails}

The product must remain visually dominant.

The viewer's eye should naturally be drawn to the
product first.

The product should remain one of the sharpest objects
in the image.

Human emotion should enhance the product instead of
competing with it.

====================================================
PHOTOGRAPHY STYLE
====================================================

Luxury commercial photography.

Magazine-quality composition.

Professional product photography.

Photorealistic.

Natural human emotion.

Warm cinematic lighting.

Professional color grading.

Balanced composition.

Shallow depth of field.

Elegant luxury aesthetic.

Single visual focal point.

Premium advertising photography.

====================================================
FINAL QUALITY STANDARD
====================================================

The final image should resemble a luxury commercial
photograph created by an award-winning advertising
agency.

It should feel authentic, emotionally compelling,
premium, and immediately suitable for use in a
high-performing paid social media campaign.

`;

}

export function composeVideoPrompt(
  brief: CreativeBrief
): string {

  return `

Create a premium commercial lifestyle video.

Generate cinematic footage only.

Do not render text overlays.

Do not render captions.

Do not render logos.

Do not render watermarks.

====================================================
PRODUCT
====================================================

${brief.productTitle}

${brief.description}

====================================================
CUSTOMER
====================================================

Audience

${brief.audience}

Emotion

${brief.emotion}

====================================================
STORY
====================================================

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

Focus

${brief.focus}

Placement

${brief.placementDirection}

Subject Interaction

${brief.subjectInteraction}

====================================================
STYLE
====================================================

Luxury commercial filmmaking.

Professional cinematography.

Authentic human emotion.

Natural movement.

Warm cinematic lighting.

The product remains the visual hero throughout the
entire video.

`;
}