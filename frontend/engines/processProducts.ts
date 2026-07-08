import { Product } from "../types/Product";

import { buildKnowledge } from "../builders/knowledgeBuilder";
import { identifyProduct } from "./identityEngine";
import { generateStory } from "./storyEngine";
import { generateCampaign } from "./campaignEngine";
import { generateStrategies } from "./strategyEngine";

import { Campaign } from "../types/Campaign";
import { CampaignStrategy } from "../types/CampaignStrategy";

export interface ProcessedProduct extends Product {
  //------------------------------------------
  // Identity
  //------------------------------------------

  relationship: string;
  occasion: string;
  emotion: string;
  giftType: string;

  //------------------------------------------
  // Story Intelligence
  //------------------------------------------

  audience: string;
  painPoint: string;
  desire: string;
  fear: string;
  motivation: string;

  story: string;
  marketingAngle: string;
  headline: string;
  callToAction: string;

  //------------------------------------------
  // Campaign
  //------------------------------------------

  campaign: Campaign;

  //------------------------------------------
  // Strategy Engine
  //------------------------------------------

  strategies: CampaignStrategy[];
}

export function processProducts(
  products: Product[]
): ProcessedProduct[] {

  return products.map((product) => {

    //------------------------------------------
    // Knowledge Builder
    //------------------------------------------

    const knowledge =
      buildKnowledge(product);

    //------------------------------------------
    // Identity Engine
    //------------------------------------------

    const identity =
      identifyProduct(product);

    knowledge.relationship = identity.relationship;
    knowledge.occasion = identity.occasion;
    knowledge.emotion = identity.emotion;
    knowledge.giftType = identity.giftType;
    knowledge.confidence = identity.confidence;

    //------------------------------------------
    // Story Engine
    //------------------------------------------

    const story =
      generateStory(knowledge);

    //------------------------------------------
    // Campaign Engine
    //------------------------------------------

    const campaign =
      generateCampaign(story);

    //------------------------------------------
    // Strategy Engine
    //------------------------------------------

    const strategies =
      generateStrategies(story);

    //------------------------------------------
    // Final Product
    //------------------------------------------

    return {

      ...product,

      //--------------------------------------
      // Identity
      //--------------------------------------

      relationship: identity.relationship,
      occasion: identity.occasion,
      emotion: identity.emotion,
      giftType: identity.giftType,

      //--------------------------------------
      // Story
      //--------------------------------------

      audience: story.audience,
      painPoint: story.painPoint,
      desire: story.desire,
      fear: story.fear,
      motivation: story.motivation,

      story: story.story,
      marketingAngle: story.marketingAngle,
      headline: story.headline,
      callToAction: story.callToAction,

      //--------------------------------------
      // Campaign
      //--------------------------------------

      campaign,

      //--------------------------------------
      // Strategies
      //--------------------------------------

      strategies,

    };

  });

}