import { Knowledge } from "../types/Knowledge";
import { Story } from "../types/Story";

export function generateStory(
  knowledge: Knowledge
): Story {

  //---------------------------------------
  // Defaults
  //---------------------------------------

  let audience = "Gift Buyers";

  let painPoint =
    "Finding the perfect meaningful gift.";

  let desire =
    "Give someone a gift they'll treasure forever.";

  let fear =
    "Buying something that feels generic.";

  let motivation =
    "Create an unforgettable emotional moment.";

  let story =
    "Every gift tells a story.";

  let marketingAngle =
    "Emotion";

  let headline =
    "The Gift They'll Never Forget";

  let callToAction =
    "Create a memory today.";

  //---------------------------------------
  // Mother
  //---------------------------------------

  if (knowledge.relationship === "Mother") {

    audience = "Adult Children";

    painPoint =
      "Finding something Mom truly deserves.";

    desire =
      "Make Mom feel appreciated.";

    fear =
      "Buying another ordinary gift.";

    motivation =
      "Show gratitude.";

    story =
      "She spent her life putting everyone else first. Give her something she'll wear close to her heart every day.";

    marketingAngle =
      "Gratitude";

    headline =
      "The Gift Mom Will Never Forget";

    callToAction =
      "Celebrate Mom today.";

  }

  //---------------------------------------
  // Father
  //---------------------------------------

  if (knowledge.relationship === "Father") {

    audience = "Adult Children";

    painPoint =
      "Dad always says he doesn't need anything.";

    desire =
      "Give Dad something meaningful.";

    fear =
      "Buying another boring gift.";

    motivation =
      "Show appreciation.";

    story =
      "He may never ask for a gift, but he'll remember this one forever.";

    marketingAngle =
      "Appreciation";

    headline =
      "The Gift Dad Didn't Know He Wanted";

    callToAction =
      "Make Dad smile.";

  }

  //---------------------------------------
  // Wife
  //---------------------------------------

  if (knowledge.relationship === "Wife") {

    audience = "Husbands";

    painPoint =
      "Finding something romantic.";

    desire =
      "Remind her how much she means to you.";

    fear =
      "Buying something forgettable.";

    motivation =
      "Celebrate your relationship.";

    story =
      "Every love story deserves a reminder. Give her something she can wear every day.";

    marketingAngle =
      "Romance";

    headline =
      "Remind Her Why She Fell In Love";

    callToAction =
      "Surprise her today.";

  }

  //---------------------------------------
  // Son
  //---------------------------------------

  if (knowledge.relationship === "Son") {

    audience = "Parents";

    painPoint =
      "Watching your son grow up too fast.";

    desire =
      "Give him something meaningful.";

    fear =
      "Missing the opportunity to tell him how proud you are.";

    motivation =
      "Express unconditional love.";

    story =
      "Before you even met him, you loved him. Give him a reminder he'll carry forever.";

    marketingAngle =
      "Love";

    headline =
      "For The Son Who Means Everything";

    callToAction =
      "Tell him today.";

  }

  //---------------------------------------

  return {

    audience,

    relationship: knowledge.relationship,

    occasion: knowledge.occasion,

    emotion: knowledge.emotion,

    painPoint,

    desire,

    fear,

    motivation,

    story,

    marketingAngle,

    headline,

    callToAction,

  };

}