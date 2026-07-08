import { ProcessedProduct } from "./processProducts";
import { CampaignStrategy } from "../types/CampaignStrategy";
import { CreativeDirection } from "../types/CreativeDirection";

export function directCreative(
  product: ProcessedProduct,
  strategy: CampaignStrategy
): CreativeDirection {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let concept =
    "Premium lifestyle advertisement";

  let scene =
    "Gift presentation";

  let location =
    "Elegant family home";

  let timeOfDay =
    "Golden Hour";

  let composition =
    "Rule of Thirds";

  let cameraAngle =
    "Eye Level";

  let focalLength =
    "85mm";

  let depthOfField =
    "Shallow";

  let lighting =
    "Warm natural window light";

  let mood =
    "Emotional";

  let colorPalette =
    "Warm gold, cream, soft brown";

  let productPlacement =
    "Foreground";

  let productVisibility =
    "Fully visible";

  let subjectExpression =
    "Genuine emotional smile";

  let bodyLanguage =
    "Natural relaxed posture";

  let copySpace =
    "Upper Left";

  let aspectRatio =
    "4:5";

  //------------------------------------------
  // Strategy Rules
  //------------------------------------------

  switch (strategy.type) {

    case "Luxury":

      concept =
        "Luxury product showcase";

      scene =
        "Elegant product reveal";

      location =
        "Luxury interior";

      lighting =
        "Soft spotlight";

      mood =
        "Prestige";

      colorPalette =
        "Black, gold, champagne";

      composition =
        "Centered";

      break;

    case "Urgency":

      concept =
        "Limited-time opportunity";

      lighting =
        "Bright commercial lighting";

      mood =
        "Excitement";

      copySpace =
        "Top Center";

      break;

    case "Storytelling":

      concept =
        "Memorable life moment";

      scene =
        "Meaningful family interaction";

      mood =
        "Nostalgic";

      bodyLanguage =
        "Warm embrace";

      break;

    case "Social Proof":

      concept =
        "Trusted customer favorite";

      scene =
        "Happy customer enjoying gift";

      mood =
        "Confident";

      break;

    case "Humor":

      concept =
        "Playful surprise";

      mood =
        "Joyful";

      subjectExpression =
        "Laughing";

      break;

    case "Emotional":

    default:

      break;

  }

  //------------------------------------------
  // Relationship Rules
  //------------------------------------------

  switch (product.relationship.toLowerCase()) {

    case "wife":

      scene =
        "Husband presenting a meaningful gift";

      location =
        "Warm family home";

      break;

    case "husband":

      scene =
        "Wife surprising her husband";

      break;

    case "mother":

      scene =
        "Family celebrating together";

      break;

    case "daughter":

      scene =
        "Special family celebration";

      break;

  }

  //------------------------------------------
  // Occasion Rules
  //------------------------------------------

  switch (product.occasion.toLowerCase()) {

    case "christmas":

      location =
        "Beautifully decorated living room";

      colorPalette =
        "Red, gold, evergreen";

      break;

    case "anniversary":

      location =
        "Elegant dinner setting";

      lighting =
        "Golden candlelight";

      break;

    case "birthday":

      scene =
        "Birthday celebration";

      break;

    case "mother's day":

      location =
        "Bright family kitchen";

      break;

    case "valentine's day":

      location =
        "Romantic evening";

      colorPalette =
        "Rose, cream, gold";

      break;

  }

  //------------------------------------------
  // Product Rules
  //------------------------------------------

  if (product.giftType.toLowerCase().includes("necklace")) {

    productPlacement =
      "Centered on neckline";

    productVisibility =
      "Pendant fully visible";

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    concept,

    scene,

    location,

    timeOfDay,

    composition,

    cameraAngle,

    focalLength,

    depthOfField,

    lighting,

    mood,

    colorPalette,

    productPlacement,

    productVisibility,

    subjectExpression,

    bodyLanguage,

    copySpace,

    aspectRatio,

  };

}