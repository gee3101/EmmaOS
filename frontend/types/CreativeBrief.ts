export type CreativePlatform =
  | "Facebook"
  | "Instagram"
  | "Pinterest"
  | "Email"
  | "TikTok";

export type CreativePlacement =
  | "Feed"
  | "Story"
  | "Reel"
  | "Carousel"
  | "Marketplace";

export interface CreativeBrief {

  //------------------------------------------
  // Product
  //------------------------------------------

  productTitle: string;

  description: string;

  productImage?: File | null;

  //------------------------------------------
  // Emma Intelligence
  //------------------------------------------

  relationship: string;

  occasion: string;

  emotion: string;

  giftType: string;

  audience: string;

  painPoint: string;

  desire: string;

  fear: string;

  motivation: string;

  story: string;

  //------------------------------------------
  // Marketing
  //------------------------------------------

  marketingAngle: string;

  headline: string;

  callToAction: string;

  //------------------------------------------
  // Campaign
  //------------------------------------------

  strategy: string;

  platform: CreativePlatform;

  placement: CreativePlacement;

  objective: string;

  //------------------------------------------
  // Prompt Generation
  //------------------------------------------

  imagePrompt?: string;

  videoPrompt?: string;

}