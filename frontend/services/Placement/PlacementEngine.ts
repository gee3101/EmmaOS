import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  Placement,
} from "./Placement";

import {
  calculatePlacement,
} from "./calculatePlacement";

export interface PlacementRequest {

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

export class PlacementEngine {

  //------------------------------------------
  // Calculate Placement
  //------------------------------------------

  calculate(
    request: PlacementRequest
  ): Placement {

    return calculatePlacement({

      scene:
        request.scene,

      backgroundWidth:
        request.backgroundWidth,

      backgroundHeight:
        request.backgroundHeight,

      productWidth:
        request.productWidth,

      productHeight:
        request.productHeight,

    });

  }

}

export const placementEngine =
  new PlacementEngine();