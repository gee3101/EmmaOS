import { Buffer } from "buffer";

export interface ImageProcessingProvider {

  //------------------------------------------
  // Background Removal
  //------------------------------------------

  removeBackground(
    image: File
  ): Promise<Buffer>;

  //------------------------------------------
  // Image Composition
  //------------------------------------------

  compositeImages(
    background: Buffer,
    foreground: Buffer,
    options?: CompositeOptions
  ): Promise<Buffer>;

  //------------------------------------------
  // Shadow Generation
  //------------------------------------------

  applyShadows(
    image: Buffer,
    options?: ShadowOptions
  ): Promise<Buffer>;

  //------------------------------------------
  // Color Matching
  //------------------------------------------

  matchLighting(
    foreground: Buffer,
    background: Buffer
  ): Promise<Buffer>;

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