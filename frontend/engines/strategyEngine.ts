import { Story } from "../types/Story";
import { CampaignStrategy } from "../types/CampaignStrategy";

export function generateStrategies(
  story: Story
): CampaignStrategy[] {

  return [

    //----------------------------------------
    // Emotional
    //----------------------------------------

    {
      type: "Emotional",
      icon: "❤️",
      color: "rose",

      primaryEmotion: story.marketingAngle,
      objective: "Create an emotional connection",
      targetAudience: story.audience,

      facebookPrimaryText:
`${story.story}

${story.callToAction}`,

      facebookHeadline:
story.headline,

      facebookDescription:
"An unforgettable emotional gift.",

      emailSubject:
story.headline,

      emailBody:
`${story.story}

${story.callToAction}`,

      imagePrompt:
`Warm emotional family moment celebrating ${story.relationship.toLowerCase()}.`,

      videoPrompt:
`Open with heartfelt family memories before revealing the gift.`,

      callToAction:
story.callToAction,
    },

    //----------------------------------------
    // Urgency
    //----------------------------------------

    {
      type: "Urgency",
      icon: "⚡",
      color: "amber",

      primaryEmotion: "Urgency",
      objective: "Drive immediate purchases",
      targetAudience: story.audience,

      facebookPrimaryText:
`Don't wait until the last minute.

The perfect gift is only available for a limited time.

${story.callToAction}`,

      facebookHeadline:
"Order Before It's Too Late",

      facebookDescription:
"Limited time opportunity.",

      emailSubject:
"Don't Miss This Gift",

      emailBody:
`Time is running out.

${story.callToAction}`,

      imagePrompt:
"Countdown timer beside a beautifully wrapped gift.",

      videoPrompt:
"Fast-paced countdown ending with the product reveal.",

      callToAction:
"Shop Before Time Runs Out",
    },

    //----------------------------------------
    // Storytelling
    //----------------------------------------

    {
      type: "Storytelling",
      icon: "📖",
      color: "blue",

      primaryEmotion: "Connection",
      objective: "Tell a memorable story",
      targetAudience: story.audience,

      facebookPrimaryText:
`Every family has moments that last forever.

Today's gift becomes tomorrow's memory.`,

      facebookHeadline:
"Every Gift Has A Story",

      facebookDescription:
"Celebrate life's meaningful moments.",

      emailSubject:
"The Story Behind This Gift",

      emailBody:
`Some gifts are remembered forever because of the story behind them.`,

      imagePrompt:
"A nostalgic family memory with soft lighting.",

      videoPrompt:
"Tell the family's story before introducing the product.",

      callToAction:
"Create A Memory",
    },

    //----------------------------------------
    // Social Proof
    //----------------------------------------

    {
      type: "Social Proof",
      icon: "🏆",
      color: "green",

      primaryEmotion: "Trust",
      objective: "Build credibility",
      targetAudience: story.audience,

      facebookPrimaryText:
`Thousands of families have chosen gifts like this to celebrate the people they love.`,

      facebookHeadline:
"Thousands Love This Gift",

      facebookDescription:
"Customer favorite.",

      emailSubject:
"Our Most Loved Gift",

      emailBody:
`Join thousands of happy customers.`,

      imagePrompt:
"Happy customers sharing heartfelt gift moments.",

      videoPrompt:
"Customer testimonials followed by product reveal.",

      callToAction:
"Join Thousands of Happy Customers",
    },

    //----------------------------------------
    // Luxury
    //----------------------------------------

    {
      type: "Luxury",
      icon: "💎",
      color: "purple",

      primaryEmotion: "Prestige",
      objective: "Increase perceived value",
      targetAudience: story.audience,

      facebookPrimaryText:
`Crafted to become a treasured keepsake for generations.`,

      facebookHeadline:
"Luxury They'll Treasure Forever",

      facebookDescription:
"Premium craftsmanship.",

      emailSubject:
"An Elegant Gift",

      emailBody:
`Exceptional quality meets unforgettable meaning.`,

      imagePrompt:
"Luxury jewelry displayed in elegant lighting.",

      videoPrompt:
"Slow cinematic reveal emphasizing craftsmanship.",

      callToAction:
"Discover Luxury",
    },

    //----------------------------------------
    // Humor
    //----------------------------------------

    {
      type: "Humor",
      icon: "😄",
      color: "yellow",

      primaryEmotion: "Joy",
      objective: "Create engagement",
      targetAudience: story.audience,

      facebookPrimaryText:
`They said they didn't want anything.

We both knew that wasn't true.`,

      facebookHeadline:
"The Gift They Secretly Wanted",

      facebookDescription:
"Fun meets meaningful.",

      emailSubject:
"They'll Laugh...Then Cry",

      emailBody:
`Start with a smile. End with happy tears.`,

      imagePrompt:
"Family laughing together while exchanging gifts.",

      videoPrompt:
"Funny opening transitioning into emotional ending.",

      callToAction:
"Make Them Smile",
    },

  ];

}