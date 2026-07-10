import {
  CompositeSceneSpecification,
} from "../types/CompositeSceneSpecification";

export function buildBackgroundPrompt(
  scene: CompositeSceneSpecification
): string {

  //------------------------------------------
  // Scene Composition
  //------------------------------------------

  const composition =
    scene.sceneComposition;

  //------------------------------------------
  // Subjects
  //------------------------------------------

  const subjects =
    composition.subjects

      .map(subject => `

Role:
${subject.role}

Description:
${subject.description}

Position:
${subject.position}

Body Pose:
${subject.bodyPose}

Hand Pose:
${subject.handPose}

Facial Expression:
${subject.facialExpression}

Eye Direction:
${subject.eyeDirection}

`)

      .join("\n");

  //------------------------------------------
  // Constraints
  //------------------------------------------

  const constraints =
    composition.constraints

      .map(rule => `• ${rule}`)

      .join("\n");

  //------------------------------------------
  // Quality
  //------------------------------------------

  const quality =
    composition.quality

      .map(rule => `• ${rule}`)

      .join("\n");

  //------------------------------------------
  // Prompt
  //------------------------------------------

  return `

You are simultaneously acting as:

• Creative Director

• Art Director

• Commercial Photographer

• Product Stylist

• Advertising Agency

Your responsibility is to produce ONLY the BACKGROUND photograph.

The uploaded product will be composited afterwards.

Never generate the product.

Never redesign the product.

Everything you create must support the future placement of the original uploaded product.

==================================================
MISSION
==================================================

Create a premium commercial lifestyle photograph.

The image should appear to have been photographed by an experienced luxury advertising agency.

The result should be indistinguishable from genuine professional photography.

The environment should naturally guide the viewer's eye toward the future product location.

==================================================
CRITICAL REQUIREMENTS
==================================================

The uploaded product DOES NOT exist yet.

Pretend it will be inserted after the photograph has been taken.

Everything in the image must naturally support this future placement.

Never create anything occupying the product space.

Never imply another product.

Never create packaging.

Never create jewelry.

==================================================
HUMAN ANATOMY
==================================================

Exactly two adults.

Exactly one head per person.

Exactly one neck per person.

Exactly one torso per person.

Exactly two shoulders per person.

Exactly two arms per person.

Exactly two hands per person.

Exactly five fingers per hand.

Hands remain naturally attached.

Natural elbows.

Natural wrists.

Natural body proportions.

Natural posture.

Natural perspective.

Natural shadows.

No duplicated limbs.

No merged bodies.

No floating hands.

No detached arms.

No extra fingers.

No missing fingers.

No cropped faces.

No cropped hands.

No distorted anatomy.

==================================================
SCENE STORY
==================================================

Story:

${composition.story}

Emotion:

${composition.emotionalMoment}

The scene should communicate authentic human emotion.

Nothing should feel posed.

Everything should feel naturally observed.

==================================================
SUBJECT DIRECTION
==================================================

${subjects}

The subjects should behave naturally.

No exaggerated gestures.

No theatrical posing.

Expressions should feel genuine.

Body language should appear relaxed.

==================================================
PRODUCT STAGING
==================================================

Imagine an invisible greeting card exists between the two people.

The invisible object is approximately:

6 inches wide

8 inches tall

The invisible object exists only to guide composition.

It MUST NOT actually appear.

The presentation area should remain completely empty.

The empty area should naturally become the visual focal point.

The presentation area should remain below both faces.

The presentation area should remain above waist level.

The presentation area should occupy approximately 18–22% of the image width.

Both people naturally orient their attention toward this invisible presentation area.

Hands should frame the invisible object without touching it.

No body part should overlap this area.

No furniture should overlap this area.

No decorations should overlap this area.

==================================================
SUBJECT SPACING
==================================================

The two adults should stand naturally.

Maintain comfortable conversational distance.

Approximately three feet apart.

Bodies angled slightly toward each other.

Shoulders remain outside the presentation space.

Faces remain above the presentation space.

Hands extend naturally toward the presentation space.

The presentation space remains centered between them.

Leave generous negative space around the presentation area.

==================================================
CAMERA
==================================================

Camera Angle:

${composition.camera.angle}

Camera Height:

${composition.camera.height}

Lens:

${composition.camera.focalLength}

Depth of Field:

${composition.camera.depthOfField}

Photography Style:

${composition.camera.compositionStyle}

Photographed using a professional full-frame DSLR.

Luxury commercial photography.

Natural perspective.

Magazine-quality framing.

==================================================
LIGHTING
==================================================

Lighting Style:

${composition.lighting.style}

Direction:

${composition.lighting.direction}

Intensity:

${composition.lighting.intensity}

Shadow Style:

${composition.lighting.shadowStyle}

Color Temperature:

${composition.lighting.colorTemperature}

Use believable commercial lighting.

Illuminate the presentation area evenly.

Natural falloff.

Soft shadows.

No harsh hotspots.

No unrealistic rim lighting.

==================================================
ENVIRONMENT
==================================================

Location:

${composition.environment.location}

Time of Day:

${composition.environment.timeOfDay}

Mood:

${composition.environment.mood}

Foreground Objects:

${composition.environment.foregroundObjects.join(", ")}

Background Objects:

${composition.environment.backgroundObjects.join(", ")}

Background Blur:

${composition.environment.backgroundBlur}

The environment should enhance the emotional story.

Nothing should distract from the future product placement.
==================================================
COMPOSITION
==================================================

Compose the scene like a luxury advertising campaign.

The product does not yet exist.

Everything in the composition should naturally lead the viewer's eye toward the presentation area.

Use professional visual hierarchy.

Maintain balance.

Avoid visual clutter.

Maintain generous negative space.

The presentation area should become the strongest visual anchor.

Faces should become the second visual anchor.

Avoid symmetry that feels artificial.

Create believable candid interaction.

==================================================
AI FAILURE PREVENTION
==================================================

The image MUST NOT contain:

Extra people.

Extra heads.

Extra arms.

Extra hands.

Extra fingers.

Missing fingers.

Detached limbs.

Merged bodies.

Floating hands.

Floating objects.

Distorted anatomy.

Twisted joints.

Impossible poses.

Crossed arms that hide anatomy.

Faces behind hands.

Faces behind objects.

People cropped at the forehead.

People cropped at the chin.

People cropped at the wrists.

People cropped at the elbows.

Hands clipped by the edge of the frame.

Presentation space clipped by the frame.

The photograph should resemble a genuine professional photoshoot.

==================================================
PRODUCT PLACEMENT AWARENESS
==================================================

Imagine the original uploaded product will be inserted after the photograph has been completed.

The environment should naturally anticipate this.

The product location should feel intentional.

The viewer should immediately understand that something meaningful belongs there.

No object should compete with this location.

Never create another visual hero.

The uploaded product will always become the visual hero.

==================================================
QUALITY REQUIREMENTS
==================================================

${quality}

Additional Quality Standards:

• Ultra photorealistic.

• Luxury commercial advertising.

• Magazine-quality photography.

• Natural human emotion.

• Beautiful skin tones.

• Realistic fabric texture.

• Natural hair.

• Physically accurate lighting.

• Accurate perspective.

• Professional composition.

• Clean visual storytelling.

• Elegant depth of field.

• Premium color grading.

• Cinematic realism.

==================================================
ABSOLUTELY NEVER GENERATE
==================================================

Do NOT generate:

Jewelry.

Necklaces.

Bracelets.

Watches.

Rings.

Gift boxes.

Greeting cards.

Message cards.

Packaging.

Wrapped presents.

Shopping bags.

Display stands.

Pedestals.

Flowers being held.

Balloons.

Logos.

Branding.

Advertising graphics.

Text.

Captions.

Watermarks.

QR codes.

Barcodes.

Price tags.

Buttons.

UI elements.

Duplicate people.

Additional family members.

Pets.

Vehicles unless explicitly required.

Objects occupying the presentation space.

==================================================
FINAL GOAL
==================================================

Produce an ultra-realistic commercial lifestyle photograph suitable for a premium luxury social media advertisement.

The photograph should appear professionally art directed.

The people should feel authentic.

The environment should support the emotional story.

The presentation area should remain intentionally empty.

The anatomy should be flawless.

The composition should naturally guide the viewer toward the future placement of the uploaded product.

The final image should be indistinguishable from a professionally photographed advertising campaign.

`.trim();

}