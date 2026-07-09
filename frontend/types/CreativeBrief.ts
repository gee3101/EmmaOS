import { ProductPreservation } from "./ProductPreservation";
import { LayoutDirection } from "./LayoutDirection";

export interface CreativeBrief {

  //------------------------------------------
  // Product
  //------------------------------------------

  productTitle: string;

  description: string;

  productImage: File | null;

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
  // Strategy
  //------------------------------------------

  strategy: string;

  buyerPersona: string;

  campaignTheme: string;

  emotionalTrigger: string;

  hook: string;

  //------------------------------------------
  // Campaign
  //------------------------------------------

  platform: string;

  placement: string;

  objective: string;

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  visualConcept: string;

  environment: string;

  lighting: string;

  mood: string;

  //------------------------------------------
  // Product Direction
  //------------------------------------------

  heroPriority: string;

  prominence: string;

  visibility: string;

  framing: string;

  focus: string;

  placementDirection: string;

  orientation: string;

  handPlacement: string;

  subjectInteraction: string;

  backgroundBlur: string;

  productLighting: string;

  //------------------------------------------
  // Product Preservation
  //------------------------------------------

  preservation: ProductPreservation;

  //------------------------------------------
  // Layout Direction
  //------------------------------------------

  layout: LayoutDirection;

  //------------------------------------------
  // Prompt Generation
  //------------------------------------------

  imagePrompt: string;

  videoPrompt: string;

}