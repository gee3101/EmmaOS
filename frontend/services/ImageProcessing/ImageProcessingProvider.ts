export interface ImageProcessingProvider {

  //------------------------------------------
  // Background Removal
  //------------------------------------------

  /**
   * Removes the background from an uploaded
   * product image and returns a transparent PNG.
   */
  removeBackground(
    image: File
  ): Promise<Blob>;

  //------------------------------------------
  // Image Composition
  //------------------------------------------

  /**
   * Places the original product onto a generated
   * lifestyle background.
   */
  compositeImages(
    background: Blob,
    foreground: Blob,
    options?: CompositeOptions
  ): Promise<Blob>;

  //------------------------------------------
  // Shadow Generation
  //------------------------------------------

  /**
   * Applies natural shadows so the composited
   * product appears grounded in the scene.
   */
  applyShadows(
    image: Blob,
    options?: ShadowOptions
  ): Promise<Blob>;

  //------------------------------------------
  // Color Matching
  //------------------------------------------

  /**
   * Matches brightness, white balance, and color
   * grading between foreground and background.
   */
  matchLighting(
    foreground: Blob,
    background: Blob
  ): Promise<Blob>;

}

export interface CompositeOptions {

  //------------------------------------------
  // Placement
  //------------------------------------------

  x: number;

  y: number;

  width: number;

  height: number;

  //------------------------------------------
  // Rotation
  //------------------------------------------

  rotation?: number;

  //------------------------------------------
  // Layering
  //------------------------------------------

  zIndex?: number;

}

export interface ShadowOptions {

  //------------------------------------------
  // Direction
  //------------------------------------------

  direction:
    | "left"
    | "right"
    | "front"
    | "behind";

  //------------------------------------------
  // Appearance
  //------------------------------------------

  opacity: number;

  blur: number;

  distance: number;

}