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
      : "None";

  const background =
    specification.backgroundElements.length > 0
      ? specification.backgroundElements.join(", ")
      : "None";

  const subjects =
    specification.subjects.length > 0
      ? specification.subjects.join(", ")
      : "None";

  const actions =
    specification.subjectActions.length > 0
      ? specification.subjectActions.join(", ")
      : "None";

  //------------------------------------------
  // Prompt
  //------------------------------------------

  return `
You are an award-winning commercial lifestyle photographer.

Your task is to create ONLY the BACKGROUND ENVIRONMENT for a premium e-commerce advertisement.

The product will be composited later.

DO NOT generate any product.

DO NOT generate jewelry.

DO NOT generate gift boxes.

DO NOT generate message cards.

DO NOT generate packaging.

DO NOT generate branding.

DO NOT generate text.

DO NOT generate logos.

DO NOT generate advertisements.

DO NOT place anything inside the reserved product area.

--------------------------------------------------

SCENE

${specification.environment}

--------------------------------------------------

SUBJECTS

${subjects}

--------------------------------------------------

SUBJECT ACTIONS

${actions}

--------------------------------------------------

FOREGROUND

${foreground}

--------------------------------------------------

BACKGROUND

${background}

--------------------------------------------------

CAMERA

Angle:
${specification.cameraAngle}

Product Placement:
${specification.productPlacement}

Reserved Product Area:

X:
${specification.reservedProductArea.x}%

Y:
${specification.reservedProductArea.y}%

Width:
${specification.reservedProductArea.width}%

Height:
${specification.reservedProductArea.height}%

Leave this area naturally empty.

It should appear that a product could realistically be placed there.

--------------------------------------------------

LIGHTING

Lighting Style:
${specification.lighting}

Shadow Direction:
${specification.shadowDirection}

Lighting should naturally illuminate the reserved product area.

--------------------------------------------------

EMOTIONAL TONE

${specification.emotionalTone}

--------------------------------------------------

STYLE

Ultra realistic.

Premium commercial photography.

Natural depth of field.

Professional composition.

Magazine-quality lighting.

Authentic human expressions.

Clean composition.

No clutter.

No distractions.

No text.

No watermark.

No logos.

No product.

No jewelry.

No gift box.

No message card.

Only generate the environment that will later receive the original uploaded product.
`.trim();

}