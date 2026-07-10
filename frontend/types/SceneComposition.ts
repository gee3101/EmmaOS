export interface SceneComposition {

  //------------------------------------------
  // Scene Identity
  //------------------------------------------

  title: string;

  strategy: string;

  objective: string;

  //------------------------------------------
  // Story
  //------------------------------------------

  story: string;

  emotionalMoment: string;

  //------------------------------------------
  // Subjects
  //------------------------------------------

  subjects: SubjectComposition[];

  //------------------------------------------
  // Product Presentation
  //------------------------------------------

  presentation: PresentationComposition;

  //------------------------------------------
  // Camera
  //------------------------------------------

  camera: CameraComposition;

  //------------------------------------------
  // Lighting
  //------------------------------------------

  lighting: LightingComposition;

  //------------------------------------------
  // Environment
  //------------------------------------------

  environment: EnvironmentComposition;

  //------------------------------------------
  // Composition
  //------------------------------------------

  composition: CompositionRules;

  //------------------------------------------
  // AI Constraints
  //------------------------------------------

  constraints: string[];

  //------------------------------------------
  // Quality
  //------------------------------------------

  quality: string[];

}

export interface SubjectComposition {

  //------------------------------------------
  // Identity
  //------------------------------------------

  role: string;

  description: string;

  //------------------------------------------
  // Pose
  //------------------------------------------

  bodyPose: string;

  handPose: string;

  facialExpression: string;

  eyeDirection: string;

  //------------------------------------------
  // Placement
  //------------------------------------------

  position: string;

  //------------------------------------------
  // Visibility
  //------------------------------------------

  faceVisible: boolean;

  handsVisible: boolean;

}

export interface PresentationComposition {

  //------------------------------------------
  // Presentation Space
  //------------------------------------------

  description: string;

  location: string;

  //------------------------------------------
  // Canvas Percentages
  //------------------------------------------

  x: number;

  y: number;

  width: number;

  height: number;

  //------------------------------------------
  // Product
  //------------------------------------------

  intendedProduct: string;

  preserveOriginalProduct: boolean;

  //------------------------------------------
  // Rules
  //------------------------------------------

  allowProps: boolean;

  allowHandsInsideArea: boolean;

  requireEmptySpace: boolean;

}

export interface CameraComposition {

  //------------------------------------------
  // Camera
  //------------------------------------------

  angle: string;

  height: string;

  focalLength: string;

  //------------------------------------------
  // Lens
  //------------------------------------------

  depthOfField: string;

  //------------------------------------------
  // Framing
  //------------------------------------------

  compositionStyle: string;

}

export interface LightingComposition {

  //------------------------------------------
  // Lighting
  //------------------------------------------

  style: string;

  direction: string;

  intensity: string;

  //------------------------------------------
  // Shadows
  //------------------------------------------

  shadowStyle: string;

  //------------------------------------------
  // Color
  //------------------------------------------

  colorTemperature: string;

}

export interface EnvironmentComposition {

  //------------------------------------------
  // Location
  //------------------------------------------

  location: string;

  //------------------------------------------
  // Time
  //------------------------------------------

  timeOfDay: string;

  //------------------------------------------
  // Mood
  //------------------------------------------

  mood: string;

  //------------------------------------------
  // Objects
  //------------------------------------------

  foregroundObjects: string[];

  backgroundObjects: string[];

  //------------------------------------------
  // Depth
  //------------------------------------------

  backgroundBlur: string;

}

export interface CompositionRules {

  //------------------------------------------
  // Photography
  //------------------------------------------

  ruleOfThirds: boolean;

  centeredComposition: boolean;

  leadingLines: boolean;

  //------------------------------------------
  // Subjects
  //------------------------------------------

  maintainEyeContact: boolean;

  maintainNaturalPosture: boolean;

  //------------------------------------------
  // Presentation Area
  //------------------------------------------

  presentationAreaClear: boolean;

  facesNeverBlocked: boolean;

  //------------------------------------------
  // AI Safety
  //------------------------------------------

  exactlyTwoArmsPerPerson: boolean;

  exactlyTwoHandsPerPerson: boolean;

  noExtraLimbs: boolean;

  noFloatingHands: boolean;

  noMergedBodies: boolean;

  noDuplicatePeople: boolean;

  noCroppedFaces: boolean;

  noCroppedHands: boolean;

}