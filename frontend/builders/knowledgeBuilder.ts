import { Product } from "../types/Product";
import { Knowledge } from "../types/Knowledge";

export function buildKnowledge(product: Product): Knowledge {

  //------------------------------------------
  // Combine everything Emma knows
  //------------------------------------------

  const searchableText = [

    product.title,

    product.vendor,

    product.productType,

    product.tags,

    product.description,

  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  //------------------------------------------
  // Return Knowledge Object
  //------------------------------------------

  return {

    product,

    searchableText,

    relationship: "",

    occasion: "",

    emotion: "",

    giftType: "",

    audience: "",

    painPoint: "",

    desire: "",

    storyAngle: "",

    confidence: 0,

  };

}