export type StrategyType =
  | "Emotional"
  | "Urgency"
  | "Storytelling"
  | "Social Proof"
  | "Luxury"
  | "Humor";

export interface CampaignStrategy {

  //------------------------------------
  // Identity
  //------------------------------------

  type: StrategyType;

  icon: string;

  color: string;

  //------------------------------------
  // Psychology
  //------------------------------------

  primaryEmotion: string;

  objective: string;

  targetAudience: string;

  //------------------------------------
  // Marketing Intelligence
  //------------------------------------

  buyerPersona: string;

  campaignTheme: string;

  emotionalTrigger: string;

  hook: string;

  //------------------------------------
  // Facebook
  //------------------------------------

  facebookPrimaryText: string;

  facebookHeadline: string;

  facebookDescription: string;

  //------------------------------------
  // Email
  //------------------------------------

  emailSubject: string;

  emailBody: string;

  //------------------------------------
  // Creative Direction
  //------------------------------------

  visualConcept: string;

  environment: string;

  lighting: string;

  mood: string;

  //------------------------------------
  // AI Prompts
  //------------------------------------

  imagePrompt: string;

  videoPrompt: string;

  //------------------------------------
  // Marketing
  //------------------------------------

  callToAction: string;

}