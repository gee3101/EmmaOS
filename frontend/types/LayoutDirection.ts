export type ProductPlacement =
  | "Center"
  | "Left"
  | "Right"
  | "Foreground"
  | "Background"
  | "Upper Left"
  | "Upper Right"
  | "Lower Left"
  | "Lower Right";

export type CameraAngle =
  | "Eye Level"
  | "High Angle"
  | "Low Angle"
  | "Three Quarter"
  | "Top Down"
  | "Macro";

export type SubjectComposition =
  | "Product Only"
  | "Product With Hands"
  | "Product With Person"
  | "Lifestyle Scene"
  | "Flat Lay";

export interface LayoutDirection {

  //------------------------------------------
  // Platform
  //------------------------------------------

  platform: string;

  placement: string;

  //------------------------------------------
  // Canvas
  //------------------------------------------

  aspectRatio: string;

  width: number;

  height: number;

  //------------------------------------------
  // Product Layout
  //------------------------------------------

  productPlacement: ProductPlacement;

  productScale: number;

  rotation: number;

  //------------------------------------------
  // Camera
  //------------------------------------------

  cameraAngle: CameraAngle;

  depthOfField: string;

  //------------------------------------------
  // Composition
  //------------------------------------------

  composition: SubjectComposition;

  focalPoint: string;

  negativeSpace: string;

  //------------------------------------------
  // Safe Zones
  //------------------------------------------

  reserveHeadlineArea: boolean;

  reservePrimaryTextArea: boolean;

  reserveCallToActionArea: boolean;

  //------------------------------------------
  // Rendering
  //------------------------------------------

  allowCrop: boolean;

  allowPerspectiveAdjustment: boolean;

  allowShadowGeneration: boolean;

  allowReflectionGeneration: boolean;

  //------------------------------------------
  // Future
  //------------------------------------------

  notes: string[];

}