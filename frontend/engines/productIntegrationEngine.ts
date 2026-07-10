import {
  CompositeSceneSpecification,
} from "../types/CompositeSceneSpecification";

import {
  PresentationAnchor,
} from "../types/PresentationAnchor";

export type ProductDepthLayer =
  | "foreground"
  | "midground"
  | "background";

export interface ProductShadow {

  //------------------------------------------
  // Shadow
  //------------------------------------------

  enabled: boolean;

  opacity: number;

  blur: number;

  offsetX: number;

  offsetY: number;

}

export interface ProductPerspective {

  //------------------------------------------
  // Perspective
  //------------------------------------------

  enabled: boolean;

  rotation: number;

  tilt: number;

}

export interface ProductIntegration {

  //------------------------------------------
  // Anchor
  //------------------------------------------

  anchor: PresentationAnchor;

  //------------------------------------------
  // Canvas Position
  //------------------------------------------

  centerX: number;

  centerY: number;

  //------------------------------------------
  // Product Coverage
  //------------------------------------------

  widthPercent: number;

  heightPercent: number;

  //------------------------------------------
  // Depth
  //------------------------------------------

  depthLayer: ProductDepthLayer;

  //------------------------------------------
  // Perspective
  //------------------------------------------

  perspective: ProductPerspective;

  //------------------------------------------
  // Shadow
  //------------------------------------------

  shadow: ProductShadow;

  //------------------------------------------
  // Interaction
  //------------------------------------------

  overlapHands: boolean;

  overlapForeground: boolean;

  //------------------------------------------
  // Future
  //------------------------------------------

  preserveSafeArea: boolean;

}

export function buildProductIntegration(
  scene: CompositeSceneSpecification
): ProductIntegration {

  //------------------------------------------
  // Anchor
  //------------------------------------------

  const anchor =
    scene.presentationAnchor;

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let widthPercent =
    anchor.width;

  let heightPercent =
    anchor.height;

  let tilt = 0;

  let rotation =
    scene.productRotation;

  let depthLayer:
    ProductDepthLayer =
      "midground";

  //------------------------------------------
  // Product Intelligence
  //------------------------------------------

  const product =
    anchor.intendedProduct
      .toLowerCase();

  //------------------------------------------
  // Greeting Cards
  //------------------------------------------

  if (

    product.includes("card") ||

    product.includes("greeting") ||

    product.includes("keepsake")

  ) {

    widthPercent *= 0.95;

    heightPercent *= 0.95;

    tilt = -3;

  }

  //------------------------------------------
  // Necklace
  //------------------------------------------

  else if (

    product.includes("necklace")

  ) {

    widthPercent *= 0.45;

    heightPercent *= 0.45;

    depthLayer =
      "foreground";

    tilt = 0;

  }

  //------------------------------------------
  // Bracelet
  //------------------------------------------

  else if (

    product.includes("bracelet")

  ) {

    widthPercent *= 0.40;

    heightPercent *= 0.40;

    tilt = -8;

  }

  //------------------------------------------
  // Ring
  //------------------------------------------

  else if (

    product.includes("ring")

  ) {

    widthPercent *= 0.28;

    heightPercent *= 0.28;

    tilt = -10;

  }

  //------------------------------------------
  // Canvas
  //------------------------------------------

  else if (

    product.includes("canvas") ||

    product.includes("wall")

  ) {

    widthPercent *= 1.15;

    heightPercent *= 1.15;

    tilt = 0;

  }

  //------------------------------------------
  // Mug
  //------------------------------------------

  else if (

    product.includes("mug")

  ) {

    widthPercent *= 0.65;

    heightPercent *= 0.65;

    tilt = -5;

  }

  //------------------------------------------
  // Perspective
  //------------------------------------------

  const perspective: ProductPerspective = {

    enabled: true,

    rotation,

    tilt,

  };

  //------------------------------------------
  // Shadow
  //------------------------------------------

  const shadow: ProductShadow = {

    enabled: true,

    opacity: 0.28,

    blur: 20,

    offsetX: 0,

    offsetY: 10,

  };

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    anchor,

    centerX:
      anchor.centerX,

    centerY:
      anchor.centerY,

    widthPercent,

    heightPercent,

    depthLayer,

    perspective,

    shadow,

    overlapHands:
      false,

    overlapForeground:
      false,

    preserveSafeArea:
      true,

  };

}