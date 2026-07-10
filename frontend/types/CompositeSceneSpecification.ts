import {
  SceneComposition,
} from "./SceneComposition";

import {
  PresentationAnchor,
} from "./PresentationAnchor";

import {
  AdCompositionSpecification,
} from "./AdCompositionSpecification";

export type ProductPlacement =
  | "center"
  | "upper-left"
  | "upper-right"
  | "lower-left"
  | "lower-right";

export type PlacementIntent =
  | "hero-product"
  | "gift-presented"
  | "held-in-hands"
  | "table-display"
  | "flat-lay";

export type ProductAlignment =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right";

export type CameraAngle =
  | "eye-level"
  | "high-angle"
  | "low-angle"
  | "overhead";

export type LightingStyle =
  | "warm-indoor"
  | "soft-daylight"
  | "golden-hour"
  | "studio";

export type ShadowDirection =
  | "left"
  | "right"
  | "front"
  | "back";

export interface ReservedArea {

  //------------------------------------------
  // Percentage of Output Canvas
  //------------------------------------------

  x: number;

  y: number;

  width: number;

  height: number;

}

export interface ProductScale {

  //------------------------------------------
  // Canvas Coverage
  //------------------------------------------

  minCoverage: number;

  idealCoverage: number;

  maxCoverage: number;

  //------------------------------------------
  // Preserve Original Aspect Ratio
  //------------------------------------------

  preserveAspectRatio: boolean;

}

export interface SafeMargins {

  //------------------------------------------
  // Prevent Product From Touching Edges
  //------------------------------------------

  top: number;

  right: number;

  bottom: number;

  left: number;

}

export interface CompositeSceneSpecification {

  //------------------------------------------
  // Scene Identity
  //------------------------------------------

  title: string;

  strategy: string;

  //------------------------------------------
  // Advertisement Composition
  //------------------------------------------

  adComposition: AdCompositionSpecification;

  //------------------------------------------
  // Scene Composition
  //------------------------------------------

  sceneComposition: SceneComposition;

  presentationAnchor: PresentationAnchor;

  //------------------------------------------
  // Prompt
  //------------------------------------------

  backgroundPrompt: string;

  negativePrompt: string;

  //------------------------------------------
  // Product Placement
  //------------------------------------------

  productPlacement: ProductPlacement;

  placementIntent: PlacementIntent;

  productAlignment: ProductAlignment;

  reservedProductArea: ReservedArea;

  safeMargins: SafeMargins;

  //------------------------------------------
  // Product Orientation
  //------------------------------------------

  productRotation: number;

  //------------------------------------------
  // Product Scaling
  //------------------------------------------

  productScale: ProductScale;

  //------------------------------------------
  // Camera
  //------------------------------------------

  cameraAngle: CameraAngle;

  //------------------------------------------
  // Environment
  // Compatibility Layer
  //------------------------------------------

  environment: string;

  foregroundElements: string[];

  backgroundElements: string[];

  //------------------------------------------
  // Lighting
  // Compatibility Layer
  //------------------------------------------

  lighting: LightingStyle;

  shadowDirection: ShadowDirection;

  //------------------------------------------
  // Subject Direction
  // Compatibility Layer
  //------------------------------------------

  subjects: string[];

  subjectActions: string[];

  emotionalTone: string;

  //------------------------------------------
  // Rendering
  //------------------------------------------

  aspectRatio: string;

  outputWidth: number;

  outputHeight: number;

  //------------------------------------------
  // Product Preservation
  //------------------------------------------

  preserveOriginalProduct: boolean;

  removeProductBackground: boolean;

  generateBackgroundOnly: boolean;

  //------------------------------------------
  // Metadata
  //------------------------------------------

  notes: string[];

}