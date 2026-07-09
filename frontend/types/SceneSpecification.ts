import { LayoutDirection } from "./LayoutDirection";
import { ProductPreservation } from "./ProductPreservation";

export interface SceneSpecification {

  //------------------------------------------
  // Identity
  //------------------------------------------

  name: string;

  objective: string;

  //------------------------------------------
  // Product
  //------------------------------------------

  productTitle: string;

  productDescription: string;

  //------------------------------------------
  // Customer
  //------------------------------------------

  audience: string;

  relationship: string;

  occasion: string;

  emotion: string;

  story: string;

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  concept: string;

  environment: string;

  mood: string;

  lighting: string;

  //------------------------------------------
  // Photography
  //------------------------------------------

  photographyStyle: string;

  cameraAngle: string;

  depthOfField: string;

  focalPoint: string;

  //------------------------------------------
  // Product Direction
  //------------------------------------------

  heroPriority: string;

  prominence: string;

  visibility: string;

  framing: string;

  placement: string;

  orientation: string;

  handPlacement: string;

  subjectInteraction: string;

  //------------------------------------------
  // Layout
  //------------------------------------------

  layout: LayoutDirection;

  //------------------------------------------
  // Product Preservation
  //------------------------------------------

  preservation: ProductPreservation;

  //------------------------------------------
  // Rendering
  //------------------------------------------

  generationPipeline: string;

  renderStyle: string;

  //------------------------------------------
  // Quality
  //------------------------------------------

  quality: string[];

  //------------------------------------------
  // AI Instructions
  //------------------------------------------

  instructions: string[];

  //------------------------------------------
  // Negative Instructions
  //------------------------------------------

  negativeInstructions: string[];

}