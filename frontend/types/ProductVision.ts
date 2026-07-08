export interface ProductVision {

  //------------------------------------------
  // Classification
  //------------------------------------------

  /**
   * High-level category.
   * Examples:
   * Necklace
   * Bracelet
   * Mug
   * Canvas
   * Blanket
   */
  productType: string;

  /**
   * More detailed description.
   * Examples:
   * Pendant Necklace
   * Coffee Mug
   * Acrylic Plaque
   */
  productSubtype: string;

  //------------------------------------------
  // Physical Characteristics
  //------------------------------------------

  material: string;

  finish: string;

  primaryColor: string;

  secondaryColors: string[];

  shape: string;

  orientation: string;

  //------------------------------------------
  // Design
  //------------------------------------------

  style: string;

  theme: string;

  focalPoint: string;

  designElements: string[];

  //------------------------------------------
  // Personalization
  //------------------------------------------

  personalized: boolean;

  engravingDetected: boolean;

  engravingLocation: string;

  //------------------------------------------
  // Product Quality
  //------------------------------------------

  condition: string;

  quality: string;

  backgroundRemoved: boolean;

  //------------------------------------------
  // Confidence
  //------------------------------------------

  confidence: number;

}