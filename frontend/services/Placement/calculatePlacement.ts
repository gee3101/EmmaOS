import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  Placement,
} from "./Placement";

import {
  getPlacementStrategy,
} from "./PlacementStrategy";

import {
  ProductIntegration,
} from "../../engines/productIntegrationEngine";

export interface CalculatePlacementRequest {

  //------------------------------------------
  // Scene
  //------------------------------------------

  scene: CompositeSceneSpecification;

  //------------------------------------------
  // Product Integration
  //------------------------------------------

  integration: ProductIntegration;

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

    integration,

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
  // Integration Anchor
  //------------------------------------------

  const centerX =
    backgroundWidth *
    (integration.centerX / 100);

  const centerY =
    backgroundHeight *
    (integration.centerY / 100);

  //------------------------------------------
  // Target Area
  //------------------------------------------

  const targetWidth =
    backgroundWidth *
    (integration.widthPercent / 100);

  const targetHeight =
    backgroundHeight *
    (integration.heightPercent / 100);

  //------------------------------------------
  // Preserve Aspect Ratio
  //------------------------------------------

  const aspectRatio =
    productWidth /
    productHeight;

  //------------------------------------------
  // Initial Size
  //------------------------------------------

  let width =
    targetWidth *
    strategy.scaleMultiplier;

  let height =
    width /
    aspectRatio;

  //------------------------------------------
  // Fit Height
  //------------------------------------------

  if (height > targetHeight) {

    height =
      targetHeight *
      strategy.scaleMultiplier;

    width =
      height *
      aspectRatio;

  }

  //------------------------------------------
  // Clamp
  //------------------------------------------

  width =
    Math.min(
      width,
      targetWidth
    );

  height =
    Math.min(
      height,
      targetHeight
    );

  //------------------------------------------
  // Final Position
  //------------------------------------------

  const left =
    centerX -
    (width / 2);

  const top =
    centerY -
    (height / 2);

  //------------------------------------------
  // Debug
  //------------------------------------------

  console.log("");
  console.log("=====================================");
  console.log("Placement Engine");
  console.log("=====================================");

  console.log("");

  console.log("Anchor");

  console.log({

    centerX:
      integration.centerX,

    centerY:
      integration.centerY,

    width:
      integration.widthPercent,

    height:
      integration.heightPercent,

  });

  console.log("");

  console.log("Pixels");

  console.log({

    left,

    top,

    width,

    height,

  });

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    left,

    top,

    width,

    height,

    rotation:
      integration.perspective.rotation,

  };

}