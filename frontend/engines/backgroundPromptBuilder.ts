import { CompositeSceneSpecification } from "../types/CompositeSceneSpecification";

export function buildBackgroundPrompt(
  specification: CompositeSceneSpecification
): string {

  //------------------------------------------
  // Helpers
  //------------------------------------------

  const foreground =
    specification.foregroundElements.length > 0
      ? specification.foregroundElements.join(", ")
      : "Minimal tasteful décor";

  const background =
    specification.backgroundElements.length > 0
      ? specification.backgroundElements.join(", ")
      : "Soft out-of-focus background";

  const subjects =
    specification.subjects.length > 0
      ? specification.subjects.join(", ")
      : "People";

  const actions =
    specification.subjectActions.length > 0
      ? specification.subjectActions.join(", ")
      : "Naturally interacting";

  //------------------------------------------
  // Prompt
  //------------------------------------------

  return `
You are an award-winning commercial advertising photographer working for a luxury lifestyle brand.

Your task is to create ONLY the photographic background for a premium social media advertisement.

The actual product will be professionally composited into the photograph after generation.

Your responsibility is to create a believable environment that naturally supports that product.

==================================================
PRIMARY OBJECTIVE
==================================================

Create a genuine emotional lifestyle photograph.

The people should appear authentic.

The scene should feel candid rather than posed.

The final result should resemble a premium Facebook advertisement photographed by a professional commercial agency.

==================================================
SUBJECTS
==================================================

${subjects}

==================================================
ACTIONS
==================================================

${actions}

The subjects should naturally present an invisible object.

Their hands should be positioned around empty space.

That empty space should feel intentional.

Nothing should occupy the presentation space.

Their attention should naturally focus on each other or the empty presentation area.

==================================================
ENVIRONMENT
==================================================

${specification.environment}

==================================================
FOREGROUND
==================================================

${foreground}

==================================================
BACKGROUND
==================================================

${background}

==================================================
LIGHTING
==================================================

Lighting Style:

${specification.lighting}

Create soft natural lighting.

Illuminate the presentation area evenly.

Use realistic shadows.

Avoid harsh contrast.

==================================================
CAMERA
==================================================

Camera Angle:

${specification.cameraAngle}

Professional full-frame DSLR.

50mm prime lens.

Natural depth of field.

Luxury commercial photography.

==================================================
STYLE
==================================================

Ultra photorealistic.

Premium lifestyle photography.

Natural skin tones.

Magazine-quality composition.

Elegant framing.

Clean composition.

Balanced visual hierarchy.

The empty presentation space should naturally become the visual focal point.

==================================================
IMPORTANT
==================================================

Do NOT generate:

• Jewelry

• Necklaces

• Rings

• Watches

• Gift boxes

• Message cards

• Greeting cards

• Packaging

• Wrapped presents

• Pedestals

• Display stands

• Shopping bags

• Flowers being held

• Decorative props in the presentation space

• Text

• Logos

• Branding

• Watermarks

• UI elements

==================================================
FINAL GOAL
==================================================

Produce a believable commercial lifestyle photograph that appears intentionally staged for a product that will be composited later.

The empty presentation space should feel completely natural.

The viewer should immediately understand that something meaningful belongs there, while no object has yet been placed.
`.trim();

}