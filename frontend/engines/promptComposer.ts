import { CreativeBrief } from "../types/CreativeBrief";

export function composeImagePrompt(
  brief: CreativeBrief
): string {

  return `

====================================================
ROLE
====================================================

You are an award-winning commercial advertising photographer.

Your job is to create a production-ready commercial photograph.

You are NOT a graphic designer.

You are NOT designing a Facebook advertisement.

You are NOT creating marketing graphics.

You are producing premium photography that will later
be used by a designer.

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

Reserve approximately 25% clean negative space in the
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
EMOTIONAL STORY
====================================================

${brief.story}

====================================================
PRODUCT RULES
====================================================

The product is the hero.

The uploaded product is the source of truth.

Do not redesign the product.

Do not change materials.

Do not change colors.

Do not change proportions.

Do not change craftsmanship.

Do not simplify details.

Keep the product clearly visible.

Create an authentic emotional moment around the product.

====================================================
PHOTOGRAPHY STYLE
====================================================

Luxury commercial photography.

Photorealistic.

Professional composition.

Natural human emotion.

Warm cinematic lighting.

Shallow depth of field.

High-end advertising photography.

Magazine-quality image.

Elegant color grading.

Clean background.

Single visual focal point.

Leave generous negative space.

The final result should resemble a premium commercial
photograph from a luxury advertising agency.

`;

}

export function composeVideoPrompt(
  brief: CreativeBrief
): string {

  return `

Create a premium commercial lifestyle video.

The final result should feel like a luxury brand commercial.

Product

${brief.productTitle}

Description

${brief.description}

Audience

${brief.audience}

Emotion

${brief.emotion}

Story

${brief.story}

Creative Direction

Concept:
${brief.visualConcept}

Environment:
${brief.environment}

Lighting:
${brief.lighting}

Mood:
${brief.mood}

Show authentic human emotion.

Show the product naturally.

Do not add text overlays.

Do not add logos.

Do not add captions.

End with an emotionally memorable moment.

`;

}