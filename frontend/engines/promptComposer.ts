import { CreativeBrief } from "../types/CreativeBrief";

export function composeImagePrompt(
  brief: CreativeBrief
): string {

  return `

You are an award-winning commercial advertising photographer.

Create a premium Facebook advertisement for the following product.

====================================================
PRODUCT
====================================================

Product:
${brief.productTitle}

Description:
${brief.description}

====================================================
CUSTOMER
====================================================

Relationship:
${brief.relationship}

Occasion:
${brief.occasion}

Emotion:
${brief.emotion}

Gift Type:
${brief.giftType}

Audience:
${brief.audience}

Pain Point:
${brief.painPoint}

Desire:
${brief.desire}

Fear:
${brief.fear}

Motivation:
${brief.motivation}

====================================================
STORY
====================================================

${brief.story}

====================================================
MARKETING STRATEGY
====================================================

Marketing Angle:
${brief.marketingAngle}

Headline:
${brief.headline}

Call To Action:
${brief.callToAction}

====================================================
CAMPAIGN
====================================================

Platform:
${brief.platform}

Placement:
${brief.placement}

Objective:
${brief.objective}

Strategy:
${brief.strategy}

====================================================
IMAGE REQUIREMENTS
====================================================

Create a premium lifestyle advertisement.

The product must remain the hero.

Create an emotionally compelling scene that reflects
the story above.

Photorealistic.

Commercial quality.

Luxury advertising.

Professional photography.

Natural lighting.

Warm emotional storytelling.

Leave clean negative space for advertising copy.

Do NOT include text inside the image.

Do NOT include watermarks.

Do NOT distort the product.

`;

}

export function composeVideoPrompt(
  brief: CreativeBrief
): string {

  return `

Create a premium commercial advertising video.

====================================================
PRODUCT
====================================================

${brief.productTitle}

${brief.description}

====================================================
CUSTOMER
====================================================

Audience:
${brief.audience}

Emotion:
${brief.emotion}

====================================================
STORY
====================================================

${brief.story}

====================================================
MARKETING
====================================================

Marketing Angle:
${brief.marketingAngle}

Headline:
${brief.headline}

Call To Action:
${brief.callToAction}

====================================================
VIDEO
====================================================

Platform:
${brief.platform}

Placement:
${brief.placement}

Create an authentic emotional story.

Show the product naturally.

End with a memorable emotional moment.

Commercial quality.

Optimized for paid social advertising.

`;

}