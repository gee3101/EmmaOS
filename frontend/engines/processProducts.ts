import { Product } from "../types/Product";

import { buildKnowledge } from "../builders/knowledgeBuilder";
import { identifyProduct } from "./identityEngine";
import { generateStory } from "./storyEngine";
import { generateCampaign } from "./campaignEngine";

import { Campaign } from "../types/Campaign";

export interface ProcessedProduct extends Product {
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
  marketingAngle: string;
  headline: string;
  callToAction: string;

  campaign: Campaign;
}

export function processProducts(
  products: Product[]
): ProcessedProduct[] {

  return products.map((product) => {

    //----------------------------------
    // Knowledge
    //----------------------------------

    const knowledge = buildKnowledge(product);

    //----------------------------------
    // Identity
    //----------------------------------

    const identity = identifyProduct(product);

    knowledge.relationship = identity.relationship;
    knowledge.occasion = identity.occasion;
    knowledge.emotion = identity.emotion;
    knowledge.giftType = identity.giftType;
    knowledge.confidence = identity.confidence;

    //----------------------------------
    // Story
    //----------------------------------

    const story = generateStory(knowledge);

    //----------------------------------
    // Campaign
    //----------------------------------

    const campaign = generateCampaign(story);

    //----------------------------------
    // Return
    //----------------------------------

    return {

      ...product,

      relationship: identity.relationship,
      occasion: identity.occasion,
      emotion: identity.emotion,
      giftType: identity.giftType,

      audience: story.audience,
      painPoint: story.painPoint,
      desire: story.desire,
      fear: story.fear,
      motivation: story.motivation,

      story: story.story,
      marketingAngle: story.marketingAngle,
      headline: story.headline,
      callToAction: story.callToAction,

      campaign,

    };

  });

}