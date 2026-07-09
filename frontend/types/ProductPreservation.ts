export type GenerationPipeline =
  | "Composite"
  | "ImageEdit"
  | "Regenerate";

export interface ProductPreservation {

  //------------------------------------------
  // Classification
  //------------------------------------------

  productCategory: string;

  generationPipeline: GenerationPipeline;

  //------------------------------------------
  // Sacred Elements
  //------------------------------------------

  preserveProduct: boolean;

  preserveArtwork: boolean;

  preserveJewelry: boolean;

  preservePackaging: boolean;

  preserveEngraving: boolean;

  preservePrintedText: boolean;

  preserveMaterials: boolean;

  preserveColors: boolean;

  preserveDimensions: boolean;

  preserveBranding: boolean;

  //------------------------------------------
  // Creative Freedom
  //------------------------------------------

  allowLightingChange: boolean;

  allowEnvironmentChange: boolean;

  allowBackgroundChange: boolean;

  allowCameraAngleChange: boolean;

  allowDepthOfField: boolean;

  allowProps: boolean;

  allowHumanInteraction: boolean;

  allowSeasonalDecor: boolean;

  //------------------------------------------
  // Future Expansion
  //------------------------------------------

  allowCropping?: boolean;

  allowReflection?: boolean;

  allowShadowAdjustment?: boolean;

  allowColorGrading?: boolean;

  allowLensEffects?: boolean;

  allowBackgroundBlur?: boolean;

  //------------------------------------------
  // AI Reasoning
  //------------------------------------------

  reasoning: string[];

}