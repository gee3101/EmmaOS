import {
  LayoutDirection,
} from "../types/LayoutDirection";

import {
  ProductPreservation,
} from "../types/ProductPreservation";

import {
  ProductDirection,
} from "./productDirector";

export interface LayoutRequest {

  //------------------------------------------
  // Platform
  //------------------------------------------

  platform: string;

  placement: string;

  //------------------------------------------
  // Intelligence
  //------------------------------------------

  preservation: ProductPreservation;

  productDirection: ProductDirection;

}

export function directLayout(
  request: LayoutRequest
): LayoutDirection {

  const {

    platform,

    placement,

    preservation,

    productDirection,

  } = request;

  //------------------------------------------
  // Defaults
  //------------------------------------------

  const layout: LayoutDirection = {

    //------------------------------------------
    // Platform
    //------------------------------------------

    platform,

    placement,

    //------------------------------------------
    // Canvas
    //------------------------------------------

    aspectRatio:
      "1:1",

    width:
      1024,

    height:
      1024,

    //------------------------------------------
    // Product Layout
    //------------------------------------------

    productPlacement:
      "Center",

    productScale:
      0.42,

    rotation:
      0,

    //------------------------------------------
    // Camera
    //------------------------------------------

    cameraAngle:
      "Three Quarter",

    depthOfField:
      productDirection.backgroundBlur,

    //------------------------------------------
    // Composition
    //------------------------------------------

    composition:
      "Lifestyle Scene",

    focalPoint:
      "Product",

    negativeSpace:
      "Upper Left",

    //------------------------------------------
    // Safe Zones
    //------------------------------------------

    reserveHeadlineArea:
      true,

    reservePrimaryTextArea:
      true,

    reserveCallToActionArea:
      false,

    //------------------------------------------
    // Rendering
    //------------------------------------------

    allowCrop:
      false,

    allowPerspectiveAdjustment:
      true,

    allowShadowGeneration:
      true,

    allowReflectionGeneration:
      false,

    //------------------------------------------
    // Notes
    //------------------------------------------

    notes: [],

  };

  //------------------------------------------
  // Facebook Feed
  //------------------------------------------

  if (

    platform === "Facebook" &&
    placement === "Feed"

  ) {

    layout.aspectRatio =
      "1:1";

    layout.width =
      1024;

    layout.height =
      1024;

    layout.productPlacement =
      "Center";

    layout.productScale =
      0.42;

    layout.negativeSpace =
      "Upper Left";

    layout.reserveHeadlineArea =
      true;

    layout.reservePrimaryTextArea =
      true;

    layout.reserveCallToActionArea =
      false;

    layout.notes.push(

      "Reserve the upper-left quadrant for future headline text.",

      "Keep the visual focus centered on the product.",

      "Avoid placing important elements in the bottom CTA region."

    );

  }

  //------------------------------------------
  // Personalized Jewelry
  //------------------------------------------

  if (

    preservation.preserveJewelry

  ) {

    layout.productScale =
      0.48;

    layout.allowCrop =
      false;

    layout.allowPerspectiveAdjustment =
      false;

    layout.notes.push(

      "The complete necklace must remain visible.",

      "Do not crop the pendant or chain.",

      "Maintain exact proportions.",

      "The necklace is the hero of the composition."

    );

  }

  //------------------------------------------
  // Personalized Artwork
  //------------------------------------------

  if (

    preservation.preserveArtwork

  ) {

    layout.allowPerspectiveAdjustment =
      false;

    layout.notes.push(

      "Artwork must remain pixel accurate.",

      "Do not distort printed graphics.",

      "Do not warp personalized text."

    );

  }

  //------------------------------------------
  // Composite Pipeline
  //------------------------------------------

  if (

    preservation.generationPipeline ===
    "Composite"

  ) {

    layout.notes.push(

      "Generate the environment independently from the product.",

      "Composite the original uploaded product into the finished scene.",

      "Generate realistic contact shadows.",

      "Match environmental lighting to the original product."

    );

  }

  //------------------------------------------
  // Image Edit Pipeline
  //------------------------------------------

  if (

    preservation.generationPipeline ===
    "ImageEdit"

  ) {

    layout.notes.push(

      "Use image editing to enhance the environment while preserving protected product elements."

    );

  }

  //------------------------------------------
  // Future Regeneration Pipeline
  //------------------------------------------

  if (

    preservation.generationPipeline ===
    "Regenerate"

  ) {

    layout.notes.push(

      "The product may be regenerated while maintaining its overall identity."

    );

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return layout;

}