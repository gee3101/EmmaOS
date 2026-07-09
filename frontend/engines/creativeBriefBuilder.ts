import { ProcessedProduct } from "./processProducts";

import { directCreative } from "./creativeDirector";
import { directProduct } from "./productDirector";
import { determineProductPreservation } from "./productPreservation";
import { directLayout } from "./layoutDirector";

import { CreativeBrief } from "../types/CreativeBrief";

export function buildCreativeBrief(
  product: ProcessedProduct,
  platform: string = "Facebook",
  placement: string = "Feed"
): CreativeBrief {

  //------------------------------------------
  // Strategy
  //------------------------------------------

  const strategy =
    product.strategies.length > 0
      ? product.strategies[0]
      : null;

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  const creativeDirection =
    directCreative(
      product,
      strategy ?? product.strategies[0]
    );

  //------------------------------------------
  // Product Direction
  //------------------------------------------

  const productDirection =
    directProduct(product);

  //------------------------------------------
  // Product Preservation
  //------------------------------------------

  const preservation =
    determineProductPreservation(
      product
    );

  //------------------------------------------
  // Layout Direction
  //------------------------------------------

  const layout =
    directLayout({

      platform,

      placement,

      preservation,

      productDirection,

    });

  //------------------------------------------
  // Build Creative Brief
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
      creativeDirection.concept,

    environment:
      `${creativeDirection.scene}. ${creativeDirection.location}. ${creativeDirection.timeOfDay}.`,

    lighting:
      creativeDirection.lighting,

    mood:
      creativeDirection.mood,

    //------------------------------------------
    // Product Direction
    //------------------------------------------

    heroPriority:
      productDirection.heroPriority,

    prominence:
      productDirection.prominence,

    visibility:
      productDirection.visibility,

    framing:
      productDirection.framing,

    focus:
      productDirection.focus,

    placementDirection:
      productDirection.placement,

    orientation:
      productDirection.orientation,

    handPlacement:
      productDirection.handPlacement,

    subjectInteraction:
      productDirection.subjectInteraction,

    backgroundBlur:
      productDirection.backgroundBlur,

    productLighting:
      productDirection.productLighting,

    //------------------------------------------
    // Product Preservation
    //------------------------------------------

    preservation,

    //------------------------------------------
    // Layout Direction
    //------------------------------------------

    layout,

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