export type ProductPlacement =
  | "center"
  | "left"
  | "right"
  | "upper-left"
  | "upper-right"
  | "lower-left"
  | "lower-right";

export type CameraAngle =
  | "eye-level"
  | "high-angle"
  | "low-angle"
  | "over-the-shoulder"
  | "close-up"
  | "three-quarter";

export type LightingStyle =
  | "golden-hour"
  | "soft-daylight"
  | "studio"
  | "warm-indoor"
  | "cool-indoor"
  | "dramatic"
  | "candlelight";

export type ShadowDirection =
  | "left"
  | "right"
  | "front"
  | "behind"
  | "soft"
  | "diffuse";

export interface ReservedProductArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CompositeSceneSpecification {
  //------------------------------------------
  // Scene Identity
  //------------------------------------------

  title: string;

  strategy: string;

  //------------------------------------------
  // Scene Prompt
  //------------------------------------------

  backgroundPrompt: string;

  negativePrompt: string;

  //------------------------------------------
  // Composition
  //------------------------------------------

  productPlacement: ProductPlacement;

  reservedProductArea: ReservedProductArea;

  cameraAngle: CameraAngle;

  //------------------------------------------
  // Environment
  //------------------------------------------

  environment: string;

  foregroundElements: string[];

  backgroundElements: string[];

  //------------------------------------------
  // Lighting
  //------------------------------------------

  lighting: LightingStyle;

  shadowDirection: ShadowDirection;

  //------------------------------------------
  // Subject Direction
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
  // Future Metadata
  //------------------------------------------

  notes?: string[];
}