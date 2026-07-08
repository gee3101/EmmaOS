import { Product } from "./Product";

export interface Knowledge {

  //------------------------------------------
  // Original Shopify Product
  //------------------------------------------

  product: Product;

  //------------------------------------------
  // Combined searchable text
  //------------------------------------------

  searchableText: string;

  //------------------------------------------
  // Identity
  //------------------------------------------

  relationship: string;

  occasion: string;

  emotion: string;

  giftType: string;

  //------------------------------------------
  // Marketing Intelligence
  //------------------------------------------

  audience: string;

  painPoint: string;

  desire: string;

  storyAngle: string;

  //------------------------------------------
  // AI Confidence
  //------------------------------------------

  confidence: number;
}