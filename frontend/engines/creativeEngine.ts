import { CampaignStrategy } from "../types/CampaignStrategy";
import {
  CreativeBrief,
  CreativePlatform,
  CreativePlacement,
} from "../types/CreativeBrief";

export function generateCreativeBrief(
  strategy: CampaignStrategy,
  platform: CreativePlatform = "Facebook",
  placement: CreativePlacement = "Feed"
): CreativeBrief {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let creativeConcept =
    "Lifestyle product advertisement.";

  let visualStyle =
    "Photorealistic lifestyle photography";

  let environment =
    "Modern home";

  let lighting =
    "Soft natural daylight";

  let colorPalette =
    "Warm neutral tones";

  let mood =
    "Authentic";

  let wardrobe =
    "Casual modern clothing";

  let expression =
    "Natural smile";

  let pose =
    "Holding the product naturally";

  let cameraAngle =
    "Eye level";

  let framing =
    "Medium shot";

  let lens =
    "50mm";

  let composition =
    "Rule of thirds";

  //------------------------------------------
  // Strategy Overrides
  //------------------------------------------

  switch (strategy.type) {

    case "Emotional":

      creativeConcept =
        "A heartfelt moment where the gift creates a lasting emotional memory.";

      environment =
        "Warm family home";

      lighting =
        "Golden hour";

      mood =
        "Emotional";

      expression =
        "Happy tears";

      pose =
        "Presenting the gift with both hands";

      break;

    case "Urgency":

      creativeConcept =
        "Limited-time offer encouraging immediate action.";

      visualStyle =
        "Bold commercial advertising";

      lighting =
        "Bright studio lighting";

      colorPalette =
        "High contrast";

      mood =
        "Excitement";

      cameraAngle =
        "Dynamic low angle";

      break;

    case "Storytelling":

      creativeConcept =
        "Tell a meaningful family story through visuals.";

      environment =
        "Family gathering";

      lighting =
        "Soft cinematic lighting";

      mood =
        "Nostalgic";

      break;

    case "Social Proof":

      creativeConcept =
        "Show multiple happy customers enjoying the product.";

      environment =
        "Lifestyle environments";

      mood =
        "Trust";

      break;

    case "Luxury":

      creativeConcept =
        "Premium product photography emphasizing craftsmanship.";

      visualStyle =
        "Luxury commercial";

      environment =
        "Elegant studio";

      lighting =
        "Premium softbox lighting";

      colorPalette =
        "Black and gold";

      wardrobe =
        "Elegant evening attire";

      expression =
        "Confident";

      framing =
        "Close-up";

      lens =
        "85mm portrait lens";

      break;

    case "Humor":

      creativeConcept =
        "Playful and memorable advertising with a humorous twist.";

      mood =
        "Fun";

      expression =
        "Laughing";

      break;

  }

  //------------------------------------------
  // AI Prompts
  //------------------------------------------

  const imagePrompt = `
Create a ${platform} ${placement} advertisement.

Creative Concept:
${creativeConcept}

Visual Style:
${visualStyle}

Environment:
${environment}

Lighting:
${lighting}

Mood:
${mood}

Camera:
${cameraAngle}
${framing}
${lens}

Composition:
${composition}

Emma Digital Twin:
Present if enabled.

Marketing Strategy:
${strategy.type}

Target Audience:
${strategy.targetAudience}

Primary Emotion:
${strategy.primaryEmotion}

Headline:
${strategy.facebookHeadline}

Use the uploaded product image exactly as provided.
`;

  const videoPrompt = `
Create a cinematic ${platform} ${placement} advertisement.

Opening:
Immediately capture attention.

Middle:
Show the product naturally integrated into the scene.

Ending:
Strong emotional finish with the call to action.

Creative Direction:
${creativeConcept}

Visual Style:
${visualStyle}

Lighting:
${lighting}

Target Audience:
${strategy.targetAudience}

Call To Action:
${strategy.callToAction}
`;

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    //--------------------------------------
    // Identity
    //--------------------------------------

    title:
      `${strategy.type} Facebook Creative`,

    strategy:
      strategy.type,

    platform,

    placement,

    //--------------------------------------
    // Marketing
    //--------------------------------------

    objective:
      strategy.objective,

    targetAudience:
      strategy.targetAudience,

    primaryEmotion:
      strategy.primaryEmotion,

    headline:
      strategy.facebookHeadline,

    callToAction:
      strategy.callToAction,

    //--------------------------------------
    // Creative Direction
    //--------------------------------------

    creativeConcept,

    visualStyle,

    environment,

    lighting,

    colorPalette,

    mood,

    //--------------------------------------
    // Emma
    //--------------------------------------

    useEmma: true,

    wardrobe,

    expression,

    pose,

    //--------------------------------------
    // Camera
    //--------------------------------------

    cameraAngle,

    framing,

    lens,

    composition,

    //--------------------------------------
    // Creative Assets
    //--------------------------------------

    headlineOverlay:
      strategy.facebookHeadline,

    bodyOverlay:
      strategy.facebookDescription,

    ctaOverlay:
      strategy.callToAction,

    //--------------------------------------
    // AI Prompts
    //--------------------------------------

    imagePrompt,

    videoPrompt,

    voiceoverScript:
      strategy.facebookPrimaryText,

    //--------------------------------------
    // Future
    //--------------------------------------

    musicStyle:
      "Inspirational cinematic",

    hashtags: [],

    notes:
      "Generated by Emma Creative Engine.",

  };

}