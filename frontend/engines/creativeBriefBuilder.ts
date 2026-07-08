import { ProcessedProduct } from "./processProducts";
import { CreativeBrief } from "../types/CreativeBrief";

export function buildCreativeBrief(
  product: ProcessedProduct
): CreativeBrief {

  //------------------------------------------
  // Default Campaign Values
  //------------------------------------------

  const DEFAULT_PLATFORM = "Facebook";
  const DEFAULT_PLACEMENT = "Feed";
  const DEFAULT_OBJECTIVE = "Drive Conversions";

  //------------------------------------------
  // Primary Strategy
  //------------------------------------------

  const primaryStrategy =
    product.strategies.length > 0
      ? product.strategies[0]
      : null;

  //------------------------------------------
  // Creative Brief
  //------------------------------------------

  return {

    //------------------------------------------
    // Product
    //------------------------------------------

    productTitle: product.title,

    description: product.description,

    productImage: null,

    //------------------------------------------
    // Emma Intelligence
    //------------------------------------------

    relationship: product.relationship,

    occasion: product.occasion,

    emotion: product.emotion,

    giftType: product.giftType,

    audience: product.audience,

    painPoint: product.painPoint,

    desire: product.desire,

    fear: product.fear,

    motivation: product.motivation,

    story: product.story,

    //------------------------------------------
    // Marketing
    //------------------------------------------

    marketingAngle: product.marketingAngle,

    headline: product.headline,

    callToAction: product.callToAction,

    //------------------------------------------
    // Campaign
    //------------------------------------------

    strategy:
      primaryStrategy?.title ??
      "Primary Strategy",

    platform: DEFAULT_PLATFORM,

    placement: DEFAULT_PLACEMENT,

    objective:
      product.campaign?.objective ??
      DEFAULT_OBJECTIVE,

    //------------------------------------------
    // Prompt Generation
    //------------------------------------------

    imagePrompt: "",

    videoPrompt: "",

  };

}