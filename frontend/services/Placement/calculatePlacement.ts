import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  Placement,
} from "./Placement";

import {
  getPlacementStrategy,
} from "./PlacementStrategy";

export interface CalculatePlacementRequest {

  //------------------------------------------
  // Scene
  //------------------------------------------

  scene: CompositeSceneSpecification;

  //------------------------------------------
  // Background
  //------------------------------------------

  backgroundWidth: number;

  backgroundHeight: number;

  //------------------------------------------
  // Product
  //------------------------------------------

  productWidth: number;

  productHeight: number;

}

export function calculatePlacement(
  request: CalculatePlacementRequest
): Placement {

  const {

    scene,

    backgroundWidth,

    backgroundHeight,

    productWidth,

    productHeight,

  } = request;

  //------------------------------------------
  // Placement Strategy
  //------------------------------------------

  const strategy =
    getPlacementStrategy(
      scene.placementIntent
    );

  //------------------------------------------
  // Reserved Area
  //------------------------------------------

  const reserved =
    scene.reservedProductArea;

  //------------------------------------------
  // Safe Margins
  //------------------------------------------

  const margins =
    scene.safeMargins ?? {

      top: 0,

      right: 0,

      bottom: 0,

      left: 0,

    };

  //------------------------------------------
  // Convert Reserved Area To Pixels
  //------------------------------------------

  const reservedLeft =
    backgroundWidth *
    (reserved.x / 100);

  const reservedTop =
    backgroundHeight *
    (reserved.y / 100);

  const reservedWidth =
    backgroundWidth *
    (reserved.width / 100);

  const reservedHeight =
    backgroundHeight *
    (reserved.height / 100);

  //------------------------------------------
  // Apply Safe Margins
  //------------------------------------------

  const usableLeft =
    reservedLeft +
    (backgroundWidth * margins.left / 100);

  const usableTop =
    reservedTop +
    (backgroundHeight * margins.top / 100);

  const usableWidth =
    reservedWidth -
    (backgroundWidth * (margins.left + margins.right) / 100);

  const usableHeight =
    reservedHeight -
    (backgroundHeight * (margins.top + margins.bottom) / 100);

  //------------------------------------------
  // Preserve Aspect Ratio
  //------------------------------------------

  const aspectRatio =
    productWidth /
    productHeight;

  //------------------------------------------
  // Fit Product Into Reserved Area
  //------------------------------------------

  let width =
    usableWidth *
    strategy.scaleMultiplier;

  let height =
    width /
    aspectRatio;

  if (height > usableHeight) {

    height =
      usableHeight *
      strategy.scaleMultiplier;

    width =
      height *
      aspectRatio;

  }

  //------------------------------------------
  // Center Product
  //------------------------------------------

  const left =
    usableLeft +
    ((usableWidth - width) / 2);

  const top =
    usableTop +
    ((usableHeight - height) / 2);

  //------------------------------------------
  // Return Placement
  //------------------------------------------

  return {

    left,

    top,

    width,

    height,

    rotation:
      scene.productRotation,

  };

}