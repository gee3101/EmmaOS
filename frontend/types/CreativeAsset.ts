export type CreativeAssetType =
  | "Image"
  | "Video"
  | "Thumbnail"
  | "Voiceover"
  | "Carousel"
  | "Document";

export type CreativeAssetStatus =
  | "Pending"
  | "Generating"
  | "Completed"
  | "Failed";

export interface CreativeAsset {

  //------------------------------------------
  // Identity
  //------------------------------------------

  id: string;

  name: string;

  type: CreativeAssetType;

  //------------------------------------------
  // Source
  //------------------------------------------

  strategy: string;

  platform: string;

  placement: string;

  //------------------------------------------
  // Marketing
  //------------------------------------------

  headline: string;

  callToAction: string;

  marketingAngle: string;

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  visualConcept: string;

  mood: string;

  //------------------------------------------
  // Generation
  //------------------------------------------

  provider: string;

  status: CreativeAssetStatus;

  //------------------------------------------
  // Files
  //------------------------------------------

  url: string;

  thumbnailUrl: string;

  previewUrl: string;

  //------------------------------------------
  // Metadata
  //------------------------------------------

  prompt: string;

  width: number;

  height: number;

  duration: number;

  size: number;

  //------------------------------------------
  // Audit
  //------------------------------------------

  createdAt: string;

  updatedAt: string;

  //------------------------------------------
  // Future
  //------------------------------------------

  favorite: boolean;

  tags: string[];

  notes: string;

}