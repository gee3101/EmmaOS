export type ProductDominance =
  | "hero"
  | "balanced"
  | "supporting";

export type CameraDistance =
  | "close"
  | "medium"
  | "wide";

export type SubjectScale =
  | "small"
  | "medium"
  | "large";

export type NegativeSpace =
  | "left"
  | "center"
  | "right";

export interface AdCompositionSpecification {

  //----------------------------------
  // Platform
  //----------------------------------

  platform: string;

  //----------------------------------
  // Advertisement Style
  //----------------------------------

  creativeStyle: string;

  objective: string;

  //----------------------------------
  // Product
  //----------------------------------

  productDominance: ProductDominance;

  /**
   * Percentage of the advertisement the product should visually occupy.
   * Example:
   * 0.45 = approximately 45% of the advertisement.
   */
  heroProductCoverage: number;

  //----------------------------------
  // Scene
  //----------------------------------

  peopleCount: number;

  subjectScale: SubjectScale;

  cameraDistance: CameraDistance;

  negativeSpace: NegativeSpace;

  //----------------------------------
  // Presentation Area
  //----------------------------------

  /**
   * Canvas percentages (0-100)
   */

  presentationX: number;

  presentationY: number;

  presentationWidth: number;

  presentationHeight: number;

  //----------------------------------
  // Subject Placement
  //----------------------------------

  leftSubjectPosition: string;

  rightSubjectPosition: string;

  //----------------------------------
  // Camera
  //----------------------------------

  cameraAngle: string;

  cameraHeight: string;

  focalLength: string;

  depthOfField: string;

  //----------------------------------
  // Composition
  //----------------------------------

  visualHierarchy: string[];

  eyeFlow: string[];

  //----------------------------------
  // Mobile
  //----------------------------------

  mobileOptimized: boolean;

  safeReadingDistance: boolean;

}