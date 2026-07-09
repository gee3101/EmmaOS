export interface Placement {

  //------------------------------------------
  // Position
  //------------------------------------------

  left: number;

  top: number;

  //------------------------------------------
  // Size
  //------------------------------------------

  width: number;

  height: number;

  //------------------------------------------
  // Orientation
  //------------------------------------------

  rotation: number;

  //------------------------------------------
  // Future
  //------------------------------------------

  opacity?: number;

  shadow?: {

    enabled: boolean;

    blur: number;

    offsetX: number;

    offsetY: number;

    opacity: number;

  };

}