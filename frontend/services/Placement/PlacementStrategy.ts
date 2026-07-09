import {
  PlacementIntent,
} from "../../types/CompositeSceneSpecification";

export interface PlacementStrategy {

  //------------------------------------------
  // Scale Multiplier
  //------------------------------------------

  scaleMultiplier: number;

}

const placementStrategies: Record<
  PlacementIntent,
  PlacementStrategy
> = {

  //------------------------------------------
  // Hero Product
  //------------------------------------------

  "hero-product": {

    scaleMultiplier: 1.15,

  },

  //------------------------------------------
  // Gift Presented
  //------------------------------------------

  "gift-presented": {

    scaleMultiplier: 1.00,

  },

  //------------------------------------------
  // Held In Hands
  //------------------------------------------

  "held-in-hands": {

    scaleMultiplier: 0.95,

  },

  //------------------------------------------
  // Table Display
  //------------------------------------------

  "table-display": {

    scaleMultiplier: 1.00,

  },

  //------------------------------------------
  // Flat Lay
  //------------------------------------------

  "flat-lay": {

    scaleMultiplier: 1.10,

  },

};

export function getPlacementStrategy(
  intent: PlacementIntent
): PlacementStrategy {

  return (
    placementStrategies[intent] ??
    placementStrategies["gift-presented"]
  );

}