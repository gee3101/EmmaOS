import { AdCompositionSpecification } from "../../../types/AdCompositionSpecification";
import { CompositeSceneSpecification } from "../../../types/CompositeSceneSpecification";

export function buildFacebookAdPrompt(

  ad: AdCompositionSpecification,

  scene: CompositeSceneSpecification

): string {

  //------------------------------------------
  // Subjects
  //------------------------------------------

  const subjects =
    scene.subjects
      .map(subject => `• ${subject}`)
      .join("\n");

  //------------------------------------------
  // Subject Actions
  //------------------------------------------

  const actions =
    scene.subjectActions
      .map(action => `• ${action}`)
      .join("\n");

  //------------------------------------------
  // Environment
  //------------------------------------------

  const foreground =
    scene.foregroundElements
      .map(item => `• ${item}`)
      .join("\n");

  const background =
    scene.backgroundElements
      .map(item => `• ${item}`)
      .join("\n");

  //------------------------------------------
  // Notes
  //------------------------------------------

  const notes =
    scene.notes
      .map(note => `• ${note}`)
      .join("\n");

  //------------------------------------------
  // Reserved Product Area
  //------------------------------------------

  const reservedArea = `

Center X: ${scene.reservedProductArea.x + (scene.reservedProductArea.width / 2)}%

Center Y: ${scene.reservedProductArea.y + (scene.reservedProductArea.height / 2)}%

Width: ${scene.reservedProductArea.width}%

Height: ${scene.reservedProductArea.height}%

`;

  //------------------------------------------
  // Prompt
  //------------------------------------------

  return `

====================================================
ROLE
====================================================

${ad.photographerBrief}

====================================================
OBJECTIVE
====================================================

${ad.visualObjective}

====================================================
CREATIVE STRATEGY
====================================================

${ad.compositionIntent}

====================================================
INVISIBLE HERO PRODUCT
====================================================

${ad.heroProductDescription}

Product Dominance

${ad.productDominance}

Target Product Coverage

${Math.round(ad.heroProductCoverage * 100)}%

Breathing Room

${ad.breathingRoomPercent}%


====================================================
VISUAL HIERARCHY
====================================================

Viewer Attention

${ad.viewerAttention}

Visual Hierarchy

${ad.visualHierarchy
  .map((item, index) => `${index + 1}. ${item}`)
  .join("\n")}

Eye Flow

${ad.eyeFlow
  .map(item => `• ${item}`)
  .join("\n")}

====================================================
COMMERCIAL PHILOSOPHY
====================================================

Treat this image as a premium commercial
advertisement—not a lifestyle photograph.

Every visual element should exist for one reason:

To increase the visual importance of the hero
product.

The product is invisible only because it will be
composited later.

Compose the image exactly as though the product
already occupies the reserved presentation area.

Nothing should visually compete with it.

====================================================
====================================================
SUBJECT DIRECTION
====================================================

Subject Purpose

${ad.subjectPurpose}

Subject Interaction

${ad.subjectInteraction}

People Count

${ad.peopleCount}

Subject Scale

${ad.subjectScale}

Left Subject Position

${ad.leftSubjectPosition}

Right Subject Position

${ad.rightSubjectPosition}

Subjects should naturally guide the viewer toward
the invisible hero product.

Subjects may:

• Look toward the product

• Gesture toward the product

• Present the product

• Admire the product

• Frame the product

Body language should naturally reinforce the visual
importance of the reserved presentation area.

Subjects must never overpower the hero product.

Do not allow any part of a subject to overlap the
reserved presentation area.

====================================================
ENVIRONMENT
====================================================

Environment Purpose

${ad.environmentPurpose}

Scene

${scene.environment}

Foreground Elements

${foreground}

Background Elements

${background}

Environment Complexity

${ad.environmentComplexity}

Distraction Level

${ad.distractionLevel}

The environment should provide believable emotional
context while remaining visually secondary.

Avoid visual clutter.

Avoid unnecessary decorative elements.

Avoid strong competing objects.

Everything in the environment should reinforce the
future product.

====================================================
CAMERA DIRECTION
====================================================

Camera Distance

${ad.cameraDistance}

Camera Angle

${ad.cameraAngle}

Camera Height

${ad.cameraHeight}

Focal Length

${ad.focalLength}

Depth of Field

${ad.depthOfField}

Rendering Camera

${scene.cameraAngle}

The camera should be positioned as though the
product already exists inside the composition.

Avoid environmental wide shots.

Avoid compositions where scenery becomes the hero.

Favor commercial product photography framing that
allows the invisible hero product to dominate after
compositing.

====================================================
LIGHTING DIRECTION
====================================================

Lighting Style

${scene.lighting}

Lighting should naturally emphasize the future
product location.

Create bright, premium, commercial-quality lighting.

Avoid harsh shadows crossing the presentation area.

Avoid dramatic theatrical lighting.

Avoid dark or muddy scenes.

The brightest lighting should naturally support the
hero product.

====================================================
MOBILE OPTIMIZATION
====================================================

Mobile Optimized

${ad.mobileOptimized ? "Yes" : "No"}

Safe Reading Distance

${ad.safeReadingDistance ? "Yes" : "No"}

Assume the advertisement will primarily be viewed
on a mobile phone inside a Facebook feed.

The composition should communicate its message
within approximately one second.

Prioritize:

• Large visual relationships

• Strong focal hierarchy

• Clear subject separation

• Immediate readability

Avoid tiny visual details that disappear on mobile.

====================================================
PRESENTATION AREA
====================================================

The following region represents the future location
of the hero product.

Reserved Product Area

${reservedArea}

Treat this area as though the hero product is
already physically present.

The space is NOT empty.

It is intentionally reserved for the future product
composite.

Never obstruct this area with:

• People

• Faces

• Hands

• Furniture

• Decorations

• Props

• Plants

• Product packaging

• Logos

• Watermarks

• Text

• Strong shadows

Instead, compose the photograph around this
invisible object exactly as a commercial
photographer would during a real advertising shoot.

====================================================
====================================================
QUALITY STANDARD
====================================================

Create imagery that could realistically appear in:

• Premium Facebook advertising

• Luxury product campaigns

• National retail marketing

• Magazine-quality commercial photography

• High-end ecommerce advertising

Every creative decision should communicate:

• Premium quality

• Professional craftsmanship

• Trust

• Authentic emotion

• Aspirational lifestyle

• Commercial polish

The finished composition should feel intentionally
designed rather than casually photographed.

The resulting image should immediately communicate
that the invisible hero product is the reason the
scene exists.

====================================================
CREATIVE PRINCIPLES
====================================================

Before finalizing the image, mentally verify the
following creative principles.

Hero Product

✓ The future product is clearly the primary visual
focus of the advertisement.

✓ Nothing visually competes with the future product.

Subjects

✓ Subjects emotionally support the product.

✓ Subjects naturally frame the product.

✓ Subjects do not overpower the product.

✓ Subjects leave the reserved presentation area
completely unobstructed.

Environment

✓ The environment supports the story.

✓ The environment remains visually secondary.

✓ Decorative elements are intentional.

✓ Clutter has been eliminated.

Composition

✓ The composition feels professionally art-directed.

✓ The viewer's eyes naturally arrive at the future
product location.

✓ Negative space feels intentional.

✓ The advertisement remains readable on a mobile
phone.

Lighting

✓ Lighting naturally reinforces the hero product.

✓ Lighting does not distract from the composition.

✓ Lighting appears premium and commercial.

If any of these principles are not satisfied,
improve the composition before completing the image.

====================================================
NEGATIVE PROMPT
====================================================

Do NOT generate:

Products

• Finished products

• Product mockups

• Product packaging

• Gift boxes

• Greeting cards

• Jewelry

• Watches

People

• Duplicate people

• Extra limbs

• Extra fingers

• Cropped faces

• Cropped hands

Branding

• Logos

• Watermarks

• Typography

• Promotional graphics

• Product labels

• QR codes

• Price tags

Composition

• Busy backgrounds

• Distracting foreground objects

• Clutter

• Random props

• Competing focal points

Presentation Area

Never place anything inside the reserved product
area.

Never allow:

• Hands

• Arms

• Faces

• Furniture

• Plants

• Decorations

• Packaging

• Shadows

• Objects

to overlap the presentation area.

====================================================
EMMAOS CREATIVE NOTES
====================================================

${notes}

====================================================
ADDITIONAL CREATIVE GUIDANCE
====================================================

This is a commercial advertisement.

Not a documentary photograph.

Not a family snapshot.

Not social media content.

Every visual element should feel intentional.

Every subject should appear professionally directed.

Every environmental element should support the
advertisement.

Every lighting decision should reinforce the future
hero product.

If the image feels like an ordinary lifestyle
photograph, continue refining the composition until
it resembles a premium commercial advertisement.

====================================================
====================================================
FINAL ART DIRECTION
====================================================

Before completing the image, evaluate it exactly as
a Creative Director reviewing a campaign before it
is presented to a client.

Ask yourself:

"If the hero product were composited into the
reserved presentation area right now, would this
look like a premium Facebook advertisement?"

If the answer is no, continue improving the
composition.

Adjust:

• Camera framing

• Subject positioning

• Eye direction

• Body language

• Visual hierarchy

• Negative space

• Environmental balance

• Lighting

until the answer becomes yes.

The product should feel inevitable.

The composition should appear intentionally designed
around it from the very beginning.

====================================================
SUCCESS CRITERIA
====================================================

The finished image should satisfy ALL of the
following requirements.

✓ Premium commercial photography

✓ Product-first visual hierarchy

✓ Strong emotional storytelling

✓ Clean professional composition

✓ Mobile-first readability

✓ Subjects supporting the product

✓ Environment supporting the story

✓ Lighting supporting the product

✓ Reserved presentation area remains completely
available for compositing

✓ No competing focal points

✓ Advertisement feels professionally art-directed

✓ The future product immediately becomes the visual
hero after compositing

====================================================
FINAL GENERATION INSTRUCTIONS
====================================================

Generate ONE photorealistic commercial advertising
background.

Do NOT generate the product.

Do NOT generate branding.

Do NOT generate typography.

Generate ONLY the photographic foundation for a
premium Facebook advertisement.

Imagine the invisible hero product already exists
inside the reserved presentation area.

Compose every creative decision around that product.

The resulting image should appear as though the
product was photographed with the scene from the
beginning.

Produce imagery suitable for premium ecommerce
marketing, national advertising campaigns, and
high-converting Facebook advertisements.

`;

}