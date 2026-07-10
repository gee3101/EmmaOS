import {
  CameraDistance,
  NegativeSpace,
  SubjectScale,
} from "../../types/AdCompositionSpecification";

interface PlatformRules {

  heroCoverage: number;

  preferredCamera: CameraDistance;

  preferredSubjectScale: SubjectScale;

  preferredNegativeSpace: NegativeSpace;

  mobileOptimized: boolean;

  safeReadingDistance: boolean;

  maxPeople: number;

}

export const FacebookRules = {

  heroCoverage: 0.45,

  preferredCamera: "close",

  preferredSubjectScale: "medium",

  preferredNegativeSpace: "center",

  mobileOptimized: true,

  safeReadingDistance: true,

  maxPeople: 2,

} satisfies PlatformRules;