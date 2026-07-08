import { CreativeBrief } from "../types/CreativeBrief";
import { CreativeAsset } from "../types/CreativeAsset";

export interface AIProvider {

  /**
   * Provider display name
   */
  readonly name: string;

  /**
   * Generate an image from a CreativeBrief
   */
  generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

  /**
   * Generate a video from a CreativeBrief
   */
  generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

}