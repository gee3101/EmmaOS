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
  // Creative
  //------------------------------------

  imagePrompt: string;

  videoPrompt: string;

  //------------------------------------
  // Marketing
  //------------------------------------

  callToAction: string;

}