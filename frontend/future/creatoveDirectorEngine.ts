import { CreativeBrief } from "../types/CreativeBrief";
import { CampaignStrategy } from "../types/CampaignStrategy";

export function creativeDirectorEngine(
  strategy: CampaignStrategy
): CreativeBrief {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let visualStyle = "Premium Lifestyle";
  let environment = "Modern Home";
  let lighting = "Warm Natural Golden Hour";
  let mood = "Emotional";
  let wardrobe = "Neutral Casual";
  let expression = "Warm Smile";
  let pose = "Holding Product Naturally";

  let cameraAngle = "Eye Level";
  let framing = "Medium Shot";
  let lens = "50mm";
  let composition = "Rule of Thirds";

  //------------------------------------------
  // Strategy Overrides
  //------------------------------------------

  switch (strategy.type) {

    //----------------------------------------
    // Emotional
    //----------------------------------------

    case "Emotional":

      visualStyle = "Lifestyle";

      environment = "Family Home";

      lighting = "Warm Golden Hour";

      mood = "Heartfelt";

      wardrobe = "Soft Neutral Clothing";

      expression = "Authentic Smile";

      pose = "Holding Product Close";

      break;

    //----------------------------------------
    // Luxury
    //----------------------------------------

    case "Luxury":

      visualStyle = "Luxury Editorial";

      environment = "Upscale Interior";

      lighting = "Soft Studio Lighting";

      mood = "Elegant";

      wardrobe = "Luxury Fashion";

      expression = "Confident";

      pose = "Elegant Product Presentation";

      lens = "85mm";

      break;

    //----------------------------------------
    // Humor
    //----------------------------------------

    case "Humor":

      visualStyle = "UGC";

      environment = "Bright Home";

      lighting = "Natural";

      mood = "Playful";

      wardrobe = "Casual";

      expression = "Laughing";

      pose = "Interactive";

      break;

    //----------------------------------------
    // Storytelling
    //----------------------------------------

    case "Storytelling":

      visualStyle = "Cinematic";

      environment = "Meaningful Family Setting";

      lighting = "Soft Evening Light";

      mood = "Nostalgic";

      pose = "Sharing A Memory";

      framing = "Wide Shot";

      break;

    //----------------------------------------
    // Urgency
    //----------------------------------------

    case "Urgency":

      visualStyle = "Commercial";

      environment = "Bright Clean Background";

      lighting = "High Key";

      mood = "Excited";

      composition = "Centered";

      break;

    //----------------------------------------
    // Social Proof
    //----------------------------------------

    case "Social Proof":

      visualStyle = "Lifestyle";

      environment = "Happy Family Gathering";

      lighting = "Natural";

      mood = "Joyful";

      pose = "Celebrating Together";

      break;

  }

  //------------------------------------------
  // Creative Brief
  //------------------------------------------

  return {

    strategy: strategy.type,

    platform: "Facebook",

    placement: "Feed",

    objective: strategy.objective,

    targetAudience: strategy.targetAudience,

    primaryEmotion: strategy.primaryEmotion,

    creativeConcept:
      `${strategy.type} Facebook Advertisement`,

    visualStyle,

    environment,

    lighting,

    mood,

    colorPalette:
      "Warm Neutrals",

    useEmma: true,

    wardrobe,

    expression,

    pose,

    cameraAngle,

    framing,

    lens,

    composition,

    headlineOverlay:
      strategy.facebookHeadline,

    bodyOverlay:
      strategy.facebookPrimaryText,

    ctaOverlay:
      strategy.callToAction,

    imagePrompt: "",

    videoPrompt: "",

  };

}