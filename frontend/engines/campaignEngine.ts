import { Story } from "../types/Story";
import { Campaign } from "../types/Campaign";

export function generateCampaign(
  story: Story
): Campaign {

  return {

    //---------------------------------------
    // Facebook
    //---------------------------------------

    facebookPrimaryText:

`${story.story}

${story.callToAction}`,

    facebookHeadline:

story.headline,

    facebookDescription:

story.marketingAngle,

    //---------------------------------------
    // Instagram
    //---------------------------------------

    instagramCaption:

`${story.story}

❤️ ${story.callToAction}`,

    instagramHashtags: [

      "#giftideas",

      "#personalizedgifts",

      "#shineon",

      "#family",

      "#love",

    ],

    //---------------------------------------
    // Email
    //---------------------------------------

    emailSubject:

story.headline,

    emailBody:

`${story.story}

${story.callToAction}`,

    //---------------------------------------
    // Landing Page
    //---------------------------------------

    landingHeadline:

story.headline,

    landingSubheadline:

story.story,

    //---------------------------------------
    // Creative
    //---------------------------------------

    imagePrompt:

`Create an emotional lifestyle image showing a ${story.relationship.toLowerCase()} receiving a meaningful gift. The mood should emphasize ${story.emotion.toLowerCase()} and human connection.`,

    videoPrompt:

`Open with an emotional family moment.
Introduce the gift.
Reveal the personalized jewelry.
End with the recipient becoming emotional.
Close with "${story.callToAction}".`,

    //---------------------------------------

    callToAction:

story.callToAction,

  };

}