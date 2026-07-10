import {
  CompositeSceneSpecification,
} from "../types/CompositeSceneSpecification";

export interface SceneRelationship {

  //------------------------------------------
  // Presentation
  //------------------------------------------

  presentation: PresentationRelationship;

  //------------------------------------------
  // Subjects
  //------------------------------------------

  subjects: SubjectRelationship[];

  //------------------------------------------
  // Camera
  //------------------------------------------

  camera: CameraRelationship;

  //------------------------------------------
  // Lighting
  //------------------------------------------

  lighting: LightingRelationship;

  //------------------------------------------
  // Composition
  //------------------------------------------

  composition: CompositionRelationship;

}

export interface PresentationRelationship {

  //------------------------------------------
  // Anchor
  //------------------------------------------

  anchorX: number;

  anchorY: number;

  width: number;

  height: number;

  //------------------------------------------
  // Relative Geometry
  //------------------------------------------

  eyeLineY: number;

  handLineY: number;

  shoulderLineY: number;

  centerBetweenSubjectsX: number;

  //------------------------------------------
  // Perspective
  //------------------------------------------

  perspective: string;

  confidence: number;

}

export interface SubjectRelationship {

  //------------------------------------------
  // Identity
  //------------------------------------------

  role: string;

  position: string;

  //------------------------------------------
  // Estimated Body Geometry
  //------------------------------------------

  estimatedCenterX: number;

  estimatedEyeY: number;

  estimatedShoulderY: number;

  estimatedHandY: number;

  //------------------------------------------
  // Interaction
  //------------------------------------------

  lookingAtPresentation: boolean;

}

export interface CameraRelationship {

  //------------------------------------------
  // Camera
  //------------------------------------------

  angle: string;

  focalLength: string;

  //------------------------------------------
  // Perspective
  //------------------------------------------

  perspectiveStrength: number;

  horizonY: number;

}

export interface LightingRelationship {

  //------------------------------------------
  // Lighting
  //------------------------------------------

  style: string;

  direction: string;

  intensity: string;

  //------------------------------------------
  // Rendering
  //------------------------------------------

  shadowDirection: string;

  colorTemperature: string;

}

export interface CompositionRelationship {

  //------------------------------------------
  // Layout
  //------------------------------------------

  ruleOfThirds: boolean;

  presentationCentered: boolean;

  subjectsFramePresentation: boolean;

  //------------------------------------------
  // Negative Space
  //------------------------------------------

  negativeSpaceAbove: number;

  negativeSpaceBelow: number;

}

export function buildSceneRelationship(
  scene: CompositeSceneSpecification
): SceneRelationship {

  const composition =
    scene.sceneComposition;

  //------------------------------------------
  // Presentation
  //------------------------------------------

  const presentation =
    analyzePresentation(scene);

  //------------------------------------------
  // Subjects
  //------------------------------------------

  const subjects =
    analyzeSubjects(scene);

  //------------------------------------------
  // Camera
  //------------------------------------------

  const camera =
    analyzeCamera(scene);

  //------------------------------------------
  // Lighting
  //------------------------------------------

  const lighting =
    analyzeLighting(scene);

  //------------------------------------------
  // Composition
  //------------------------------------------

  const compositionAnalysis =
    analyzeComposition(scene);

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    presentation,

    subjects,

    camera,

    lighting,

    composition:
      compositionAnalysis,

  };

}

function analyzePresentation(
  scene: CompositeSceneSpecification
): PresentationRelationship {

  const presentation =
    scene.sceneComposition.presentation;

  const centerX =
    presentation.x +
    (presentation.width / 2);

  const centerY =
    presentation.y +
    (presentation.height / 2);

  return {

    anchorX:
      centerX,

    anchorY:
      centerY,

    width:
      presentation.width,

    height:
      presentation.height,

    //------------------------------------------
    // Estimated Human Geometry
    //------------------------------------------

    eyeLineY:
      centerY - 16,

    shoulderLineY:
      centerY - 8,

    handLineY:
      centerY + 10,

    centerBetweenSubjectsX:
      centerX,

    //------------------------------------------
    // Perspective
    //------------------------------------------

    perspective:
      scene.cameraAngle,

    confidence:
      0.98,

  };

}

function analyzeSubjects(
  scene: CompositeSceneSpecification
): SubjectRelationship[] {

  return scene.sceneComposition.subjects.map(

    subject => ({

      role:
        subject.role,

      position:
        subject.position,

      estimatedCenterX:

        subject.position.toLowerCase() === "left"

          ? 30

          : 70,

      estimatedEyeY:
        28,

      estimatedShoulderY:
        42,

      estimatedHandY:
        66,

      lookingAtPresentation:
        true,

    })

  );

}

function analyzeCamera(
  scene: CompositeSceneSpecification
): CameraRelationship {

  const camera =
    scene.sceneComposition.camera;

  return {

    angle:
      camera.angle,

    focalLength:
      camera.focalLength,

    perspectiveStrength:
      1.0,

    horizonY:
      38,

  };

}

function analyzeLighting(
  scene: CompositeSceneSpecification
): LightingRelationship {

  const lighting =
    scene.sceneComposition.lighting;

  return {

    style:
      lighting.style,

    direction:
      lighting.direction,

    intensity:
      lighting.intensity,

    shadowDirection:
      scene.shadowDirection,

    colorTemperature:
      lighting.colorTemperature,

  };

}

function analyzeComposition(
  scene: CompositeSceneSpecification
): CompositionRelationship {

  const rules =
    scene.sceneComposition.composition;

  return {

    ruleOfThirds:
      rules.ruleOfThirds,

    presentationCentered:
      true,

    subjectsFramePresentation:
      true,

    negativeSpaceAbove:
      18,

    negativeSpaceBelow:
      14,

  };

}