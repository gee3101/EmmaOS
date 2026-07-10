import { CreativeBrief } from "../types/CreativeBrief";

import {
  SceneComposition,
} from "../types/SceneComposition";

import {
  PresentationAnchor,
} from "../types/PresentationAnchor";

export interface SubjectShotPlan {

  //------------------------------------------
  // Identity
  //------------------------------------------

  role: string;

  //------------------------------------------
  // Canvas Position
  //------------------------------------------

  centerX: number;

  centerY: number;

  //------------------------------------------
  // Orientation
  //------------------------------------------

  facing: "left" | "right" | "camera";

  //------------------------------------------
  // Gaze
  //------------------------------------------

  lookAt:
    | "presentation"
    | "other-subject"
    | "camera";

  //------------------------------------------
  // Hands
  //------------------------------------------

  handDirection:
    | "toward-center"
    | "holding"
    | "relaxed";

}

export interface CameraShotPlan {

  angle: string;

  framing: string;

  focalLength: string;

  height: string;

}

export interface LightingShotPlan {

  direction: string;

  style: string;

}

export interface ShotPlan {

  //------------------------------------------
  // Subjects
  //------------------------------------------

  subjects: SubjectShotPlan[];

  //------------------------------------------
  // Presentation
  //------------------------------------------

  presentation: PresentationAnchor;

  //------------------------------------------
  // Camera
  //------------------------------------------

  camera: CameraShotPlan;

  //------------------------------------------
  // Lighting
  //------------------------------------------

  lighting: LightingShotPlan;

}

export function buildShotPlan(

  brief: CreativeBrief,

  composition: SceneComposition,

  anchor: PresentationAnchor

): ShotPlan {

  //------------------------------------------
  // Subjects
  //------------------------------------------

  const subjects: SubjectShotPlan[] = [

    {

      role:

        composition.subjects[0].role,

      centerX: 28,

      centerY: 58,

      facing: "right",

      lookAt: "presentation",

      handDirection:
        "toward-center",

    },

    {

      role:

        composition.subjects[1].role,

      centerX: 72,

      centerY: 58,

      facing: "left",

      lookAt: "presentation",

      handDirection:
        "toward-center",

    },

  ];

  //------------------------------------------
  // Camera
  //------------------------------------------

  const camera: CameraShotPlan = {

    angle:

      composition.camera.angle,

    framing:

      composition.camera.compositionStyle,

    focalLength:

      composition.camera.focalLength,

    height:

      composition.camera.height,

  };

  //------------------------------------------
  // Lighting
  //------------------------------------------

  const lighting: LightingShotPlan = {

    direction:

      composition.lighting.direction,

    style:

      composition.lighting.style,

  };

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    subjects,

    presentation:

      anchor,

    camera,

    lighting,

  };

}