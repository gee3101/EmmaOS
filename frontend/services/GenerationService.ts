import { AIProvider } from "../providers/AIProvider";
import { OpenAIProvider } from "../providers/OpenAIProvider";

import { CreativeBrief } from "../types/CreativeBrief";
import { CreativeAsset } from "../types/CreativeAsset";

export class GenerationService {

  //------------------------------------------
  // Active Provider
  //------------------------------------------

  private provider: AIProvider;

  constructor(provider?: AIProvider) {

    this.provider =
      provider ?? new OpenAIProvider();

  }

  //------------------------------------------
  // Provider Management
  //------------------------------------------

  getProvider(): AIProvider {

    return this.provider;

  }

  setProvider(provider: AIProvider): void {

    this.provider = provider;

  }

  //------------------------------------------
  // Lifestyle Image Generation
  //------------------------------------------

  async generateImage(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    console.log(
      `[GenerationService] Lifestyle Image → ${this.provider.name}`
    );

    return this.provider.generateImage(
      brief
    );

  }

  //------------------------------------------
  // Facebook Advertisement Generation
  //------------------------------------------

  async generateFacebookAd(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    console.log(
      `[GenerationService] Facebook Advertisement → ${this.provider.name}`
    );

    return this.provider.generateFacebookAd(
      brief
    );

  }

  //------------------------------------------
  // Video Generation
  //------------------------------------------

  async generateVideo(
    brief: CreativeBrief
  ): Promise<CreativeAsset> {

    console.log(
      `[GenerationService] Video → ${this.provider.name}`
    );

    return this.provider.generateVideo(
      brief
    );

  }

  //------------------------------------------
  // Creative Pack
  //------------------------------------------

  async generateCreativePack(
    brief: CreativeBrief
  ): Promise<CreativeAsset[]> {

    const image =
      await this.generateImage(
        brief
      );

    const video =
      await this.generateVideo(
        brief
      );

    return [

      image,

      video,

    ];

  }

}

/**
 * Singleton instance used throughout EmmaOS.
 *
 * Components should import this instance rather
 * than creating their own GenerationService.
 */
export const generationService =
  new GenerationService();