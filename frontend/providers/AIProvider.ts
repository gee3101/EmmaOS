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
  // Lifestyle Image Generation
  //------------------------------------------

  /**
   * Generate a lifestyle marketing image.
   */
  generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

  //------------------------------------------
  // Facebook Advertisement Generation
  //------------------------------------------

  /**
   * Generate a Facebook advertisement.
   *
   * This is intentionally separate from the
   * Lifestyle Image pipeline so each creative
   * type can evolve independently.
   */
  generateFacebookAd(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

  //------------------------------------------
  // Video Generation
  //------------------------------------------

  /**
   * Generate a video creative.
   */
  generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset>;

}