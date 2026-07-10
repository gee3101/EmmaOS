export type AnchorType =
  | "between-hands"
  | "held-in-hands"
  | "neck"
  | "table"
  | "floating"
  | "lap"
  | "wall"
  | "shelf";

export interface PresentationAnchor {

  //------------------------------------------
  // Identity
  //------------------------------------------

  type: AnchorType;

  //------------------------------------------
  // Canvas
  //------------------------------------------

  centerX: number;

  centerY: number;

  width: number;

  height: number;

  //------------------------------------------
  // Orientation
  //------------------------------------------

  rotation: number;

  //------------------------------------------
  // Product
  //------------------------------------------

  intendedProduct: string;

  //------------------------------------------
  // Scene
  //------------------------------------------

  primarySubject: number;

  secondarySubject?: number;

  //------------------------------------------
  // Presentation
  //------------------------------------------

  interaction: string;

  //------------------------------------------
  // Constraints
  //------------------------------------------

  keepClear: boolean;

  handsMayOverlap: boolean;

  facesMayOverlap: boolean;

}