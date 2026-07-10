import {
  CompositeSceneSpecification,
} from "../../types/CompositeSceneSpecification";

import {
  Placement,
} from "./Placement";

import {
  calculatePlacement,
} from "./calculatePlacement";

import {
  buildProductIntegration,
  ProductIntegration,
} from "../../engines/productIntegrationEngine";

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

    //------------------------------------------
    // Build Product Integration Plan
    //------------------------------------------

    const integration: ProductIntegration =
      buildProductIntegration(
        request.scene
      );

    console.log("");
    console.log("=====================================");
    console.log("Product Integration");
    console.log("=====================================");
    console.log(integration);

    //------------------------------------------
    // Calculate Final Placement
    //------------------------------------------

    return calculatePlacement({

      scene:
        request.scene,

      integration,

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