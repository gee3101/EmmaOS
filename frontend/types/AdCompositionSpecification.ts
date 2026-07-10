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

  /**
   * High-level description of the advertisement.
   * Example:
   * "Premium Facebook advertisement designed around an invisible hero product."
   */
  visualObjective: string;

  /**
   * Overall creative intent.
   * Example:
   * "Create an aspirational lifestyle advertisement where every visual
   * decision reinforces the hero product."
   */
  compositionIntent: string;

  /**
   * Overall creative direction for downstream prompt builders.
   */
  photographerBrief: string;

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

  /**
   * Describes how the invisible product should be treated.
   */
  heroProductDescription: string;

  /**
   * Product importance from 0–100.
   * Intended for future weighting logic.
   */
  heroProductPriority: number;

  /**
   * Reserved breathing room around the product.
   * Percentage of canvas.
   */
  breathingRoomPercent: number;

  //----------------------------------
  // Viewer Attention
  //----------------------------------

  /**
   * Where the viewer should naturally look first.
   */
  viewerAttention: "product-first";

  /**
   * Ordered visual hierarchy.
   */
  visualHierarchy: string[];

  /**
   * Desired eye movement through the advertisement.
   */
  eyeFlow: string[];

  //----------------------------------
  // Scene
  //----------------------------------

  peopleCount: number;

  subjectScale: SubjectScale;

  cameraDistance: CameraDistance;

  negativeSpace: NegativeSpace;

  //----------------------------------
  // Subject Direction
  //----------------------------------

  /**
   * Why the people exist in the composition.
   */
  subjectPurpose: string;

  /**
   * Where subjects should direct attention.
   */
  subjectFocus: "product";

  /**
   * How subjects should interact with the invisible product.
   */
  subjectInteraction: string;

  //----------------------------------
  // Environment
  //----------------------------------

  /**
   * Why the environment exists.
   */
  environmentPurpose: string;

  /**
   * Overall scene complexity.
   */
  environmentComplexity:
    | "minimal"
    | "moderate"
    | "rich";

  /**
   * Overall visual distraction level.
   */
  distractionLevel:
    | "low"
    | "medium"
    | "high";

  //----------------------------------
  // Presentation Area
  //----------------------------------

  /**
   * Canvas percentages (0–100)
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
  // Mobile Optimization
  //----------------------------------

  mobileOptimized: boolean;

  safeReadingDistance: boolean;

}