import { CreativeBrief } from "../types/CreativeBrief";
import { CreativeAsset } from "../types/CreativeAsset";

export interface AIProvider {

  //------------------------------------------
  // Provider Information
  //------------------------------------------

  /**
   * Provider display name.
   */
  readonly name: string;

  //------------------------------------------
  // Creative Generation
  //------------------------------------------

  /**
   * Generate a completed creative image.
   */
  generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

  /**
   * Generate a video creative.
   */
  generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

}