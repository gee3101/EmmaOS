import {
  ImageProcessingProvider,
  CompositeOptions,
  ShadowOptions,
} from "../ImageProcessingProvider";

import { removeBgClient } from "../clients/RemoveBgClient";

export class RemoveBgImageProcessingProvider
  implements ImageProcessingProvider {

  //------------------------------------------
  // Remove Background
  //------------------------------------------

  async removeBackground(
    image: File
  ): Promise<Buffer> {

    const result =
      await removeBgClient.removeBackground(
        image
      );

    if (!result.success || !result.image) {

      throw new Error(
        result.error ??
        "Background removal failed."
      );

    }

    return result.image;

  }

  //------------------------------------------
  // Composite Images
  //------------------------------------------

  async compositeImages(
    _background: Buffer,
    _foreground: Buffer,
    _options?: CompositeOptions
  ): Promise<Buffer> {

    throw new Error(
      "Image compositing has not yet been implemented."
    );

  }

  //------------------------------------------
  // Apply Shadows
  //------------------------------------------

  async applyShadows(
    _image: Buffer,
    _options?: ShadowOptions
  ): Promise<Buffer> {

    throw new Error(
      "Shadow generation has not yet been implemented."
    );

  }

  //------------------------------------------
  // Match Lighting
  //------------------------------------------

  async matchLighting(
    _foreground: Buffer,
    _background: Buffer
  ): Promise<Buffer> {

    throw new Error(
      "Lighting matching has not yet been implemented."
    );

  }

}

export const removeBgImageProcessingProvider =
  new RemoveBgImageProcessingProvider();