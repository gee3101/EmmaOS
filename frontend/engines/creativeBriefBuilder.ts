import { ProcessedProduct } from "./processProducts";
import { directCreative } from "./creativeDirector";

import { CreativeBrief } from "../types/CreativeBrief";

export function buildCreativeBrief(
  product: ProcessedProduct,
  platform: string = "Facebook",
  placement: string = "Feed"
): CreativeBrief {

  //------------------------------------------
  // Primary Strategy
  //------------------------------------------

  const strategy =
    product.strategies.length > 0
      ? product.strategies[0]
      : null;

  //------------------------------------------
  // Creative Director
  //------------------------------------------

  const direction =
    directCreative(
      product,
      strategy ?? product.strategies[0]
    );

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    //------------------------------------------
    // Product
    //------------------------------------------

    productTitle:
      product.title,

    description:
      product.description,

    productImage:
      null,

    //------------------------------------------
    // Emma Intelligence
    //------------------------------------------

    relationship:
      product.relationship,

    occasion:
      product.occasion,

    emotion:
      product.emotion,

    giftType:
      product.giftType,

    audience:
      product.audience,

    painPoint:
      product.painPoint,

    desire:
      product.desire,

    fear:
      product.fear,

    motivation:
      product.motivation,

    story:
      product.story,

    //------------------------------------------
    // Marketing
    //------------------------------------------

    marketingAngle:
      product.marketingAngle,

    headline:
      strategy?.facebookHeadline ??
      product.headline,

    callToAction:
      strategy?.callToAction ??
      product.callToAction,

    //------------------------------------------
    // Strategy
    //------------------------------------------

    strategy:
      strategy?.type ??
      "Emotional",

    buyerPersona:
      strategy?.buyerPersona ??
      product.audience,

    campaignTheme:
      strategy?.campaignTheme ??
      product.marketingAngle,

    emotionalTrigger:
      strategy?.emotionalTrigger ??
      product.emotion,

    hook:
      strategy?.hook ??
      (
        strategy?.facebookHeadline ??
        product.headline
      ),

    //------------------------------------------
    // Campaign
    //------------------------------------------

    platform,

    placement,

    objective:
      strategy?.objective ??
      "Drive Conversions",

    //------------------------------------------
    // Creative Direction
    //------------------------------------------

    visualConcept:
      direction.concept,

    environment:
      `${direction.scene}. ${direction.location}. ${direction.timeOfDay}.`,

    lighting:
      direction.lighting,

    mood:
      direction.mood,

    //------------------------------------------
    // Prompt Generation
    //------------------------------------------

    imagePrompt:
      strategy?.imagePrompt ??
      product.campaign.imagePrompt,

    videoPrompt:
      strategy?.videoPrompt ??
      product.campaign.videoPrompt,

  };

}