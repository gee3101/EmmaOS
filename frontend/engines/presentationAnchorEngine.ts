import { CreativeBrief } from "../types/CreativeBrief";

import {
  PresentationAnchor,
} from "../types/PresentationAnchor";

export function buildPresentationAnchor(
  brief: CreativeBrief
): PresentationAnchor {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let type: PresentationAnchor["type"] =
    "between-hands";

  let centerX = 50;

  let centerY = 44;

  let width = 22;

  let height = 26;

  let rotation = 0;

  let interaction =
    "Both subjects naturally present the keepsake.";

  let keepClear = true;

  let handsMayOverlap = false;

  let facesMayOverlap = false;

  //------------------------------------------
  // Product Intelligence
  //------------------------------------------

  const giftType =
    brief.giftType.toLowerCase();

  //------------------------------------------
  // Necklace
  //------------------------------------------

  if (giftType.includes("necklace")) {

    type = "neck";

    centerX = 50;

    centerY = 33;

    width = 18;

    height = 18;

    interaction =
      "The necklace naturally rests around the subject's neck.";

  }

  //------------------------------------------
  // Bracelet
  //------------------------------------------

  else if (

    giftType.includes("bracelet")

  ) {

    type = "held-in-hands";

    centerX = 50;

    centerY = 46;

    width = 18;

    height = 16;

    interaction =
      "The bracelet is gently displayed between both hands.";

  }

  //------------------------------------------
  // Ring
  //------------------------------------------

  else if (

    giftType.includes("ring")

  ) {

    type = "held-in-hands";

    centerX = 50;

    centerY = 46;

    width = 14;

    height = 14;

    interaction =
      "The ring is carefully presented in an open palm.";

  }

  //------------------------------------------
  // Greeting Card
  //------------------------------------------

  else if (

    giftType.includes("card") ||

    giftType.includes("greeting") ||

    giftType.includes("keepsake")

  ) {

    type = "between-hands";

    centerX = 50;

    centerY = 44;

    width = 24;

    height = 30;

    interaction =
      "Both subjects gently present the personalized keepsake between their hands.";

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    //------------------------------------------
    // Identity
    //------------------------------------------

    type,

    //------------------------------------------
    // Canvas
    //------------------------------------------

    centerX,

    centerY,

    width,

    height,

    //------------------------------------------
    // Orientation
    //------------------------------------------

    rotation,

    //------------------------------------------
    // Product
    //------------------------------------------

    intendedProduct:
      brief.giftType,

    //------------------------------------------
    // Subjects
    //------------------------------------------

    primarySubject: 0,

    secondarySubject: 1,

    //------------------------------------------
    // Interaction
    //------------------------------------------

    interaction,

    //------------------------------------------
    // Constraints
    //------------------------------------------

    keepClear,

    handsMayOverlap,

    facesMayOverlap,

  };

}