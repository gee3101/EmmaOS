import { CreativeBrief } from "../types/CreativeBrief";
import { AdCompositionSpecification } from "../types/AdCompositionSpecification";

import {
  SceneComposition,
  SubjectComposition,
  PresentationComposition,
  CameraComposition,
  LightingComposition,
  EnvironmentComposition,
  CompositionRules,
} from "../types/SceneComposition";

export function buildSceneComposition(
  brief: CreativeBrief,
  adComposition: AdCompositionSpecification
): SceneComposition {

  //------------------------------------------
  // Subjects
  //------------------------------------------

  const subjects =
    buildSubjects(brief, adComposition);

  //------------------------------------------
  // Presentation Area
  //------------------------------------------

  const presentation =
    buildPresentation(brief, adComposition);

  //------------------------------------------
  // Camera
  //------------------------------------------

  const camera =
    buildCamera(adComposition);

  //------------------------------------------
  // Lighting
  //------------------------------------------

  const lighting =
    buildLighting(brief);

  //------------------------------------------
  // Environment
  //------------------------------------------

  const environment =
    buildEnvironment(brief);

  //------------------------------------------
  // Composition Rules
  //------------------------------------------

  const composition =
    buildCompositionRules();

  //------------------------------------------
  // Return
  //------------------------------------------

  return {

    title:
      brief.productTitle,

    strategy:
      brief.strategy,

    objective:
      brief.objective,

    story:
      brief.story,

    emotionalMoment:
      brief.emotion,

    subjects,

    presentation,

    camera,

    lighting,

    environment,

    composition,

    constraints: [

      "Exactly two arms per person.",

      "Exactly two hands per person.",

      "Hands remain anatomically connected.",

      "No duplicated limbs.",

      "No floating hands.",

      "No cropped faces.",

      "No cropped hands.",

      "Presentation space remains empty.",

      "Faces remain fully visible.",

      "Natural body posture.",

      "Natural human anatomy.",

    ],

    quality: [

      "Luxury commercial photography",

      "Photorealistic",

      "Magazine quality",

      "Professional advertising",

      "Natural lighting",

      "Balanced composition",

      "Luxury color grading",

    ],

  };

}

function buildSubjects(
  brief: CreativeBrief,
  adComposition: AdCompositionSpecification
): SubjectComposition[] {

  return [

    {

      role:
        "Gift Giver",

      description:
        brief.relationship,

      bodyPose:
        "Standing naturally angled toward the presentation space.",

      handPose:
        "Hands gently extended toward the center without touching.",

      facialExpression:
        "Warm genuine smile.",

      eyeDirection:
        "Looking toward the recipient and presentation space.",

      position:
        adComposition.leftSubjectPosition,

      faceVisible:
        true,

      handsVisible:
        true,

    },

    {

      role:
        "Gift Receiver",

      description:
        brief.audience,

      bodyPose:
        "Standing naturally facing the giver.",

      handPose:
        "Hands gently reaching toward the presentation space.",

      facialExpression:
        "Authentic emotional reaction.",

      eyeDirection:
        "Focused on the presentation area.",

      position:
        adComposition.rightSubjectPosition,

      faceVisible:
        true,

      handsVisible:
        true,

    },

  ];

}

function buildPresentation(
  brief: CreativeBrief,
  adComposition: AdCompositionSpecification
): PresentationComposition {

  return {

    description:
      "Reserved empty presentation space for the original uploaded product.",

    location:
      "Between both subjects at chest height.",

    x:
      adComposition.presentationX,

    y:
      adComposition.presentationY,

    width:
      adComposition.presentationWidth,

    height:
      adComposition.presentationHeight,

    intendedProduct:
      brief.giftType,

    preserveOriginalProduct:
      true,

    allowProps:
      false,

    allowHandsInsideArea:
      false,

    requireEmptySpace:
      true,

  };

}

function buildCamera(
  adComposition: AdCompositionSpecification
): CameraComposition {

  return {

    angle:
      adComposition.cameraAngle,

    height:
      adComposition.cameraHeight,

    focalLength:
      adComposition.focalLength,

    depthOfField:
      adComposition.depthOfField,

    compositionStyle:
      `Commercial lifestyle photography, ${adComposition.cameraDistance} camera distance, ${adComposition.subjectScale} subject scale`,

  };

}

function buildLighting(
  brief: CreativeBrief
): LightingComposition {

  return {

    style:
      brief.lighting,

    direction:
      "Soft Left",

    intensity:
      "Medium",

    shadowStyle:
      "Soft Natural",

    colorTemperature:
      "Warm",

  };

}

function buildEnvironment(
  brief: CreativeBrief
): EnvironmentComposition {

  return {

    location:
      brief.environment,

    timeOfDay:
      "Golden Hour",

    mood:
      brief.mood,

    foregroundObjects: [

      "Coffee table",

      "Soft furniture",

    ],

    backgroundObjects: [

      "Large windows",

      "Elegant decor",

    ],

    backgroundBlur:
      brief.backgroundBlur,

  };

}

function buildCompositionRules(): CompositionRules {

  return {

    ruleOfThirds:
      true,

    centeredComposition:
      true,

    leadingLines:
      false,

    maintainEyeContact:
      true,

    maintainNaturalPosture:
      true,

    presentationAreaClear:
      true,

    facesNeverBlocked:
      true,

    exactlyTwoArmsPerPerson:
      true,

    exactlyTwoHandsPerPerson:
      true,

    noExtraLimbs:
      true,

    noFloatingHands:
      true,

    noMergedBodies:
      true,

    noDuplicatePeople:
      true,

    noCroppedFaces:
      true,

    noCroppedHands:
      true,

  };

}