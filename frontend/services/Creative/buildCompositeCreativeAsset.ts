import {
  CreativeAsset,
} from "../../types/CreativeAsset";

import {
  CreativeBrief,
} from "../../types/CreativeBrief";

export interface BuildCompositeCreativeAssetOptions {

  //------------------------------------------
  // Creative
  //------------------------------------------

  brief: CreativeBrief;

  //------------------------------------------
  // Image
  //------------------------------------------

  image: Buffer;

  //------------------------------------------
  // Prompt
  //------------------------------------------

  prompt?: string;

}

export function buildCompositeCreativeAsset({

  brief,

  image,

  prompt,

}: BuildCompositeCreativeAssetOptions): CreativeAsset {

  //------------------------------------------
  // Encode Image
  //------------------------------------------

  const imageUrl =

    `data:image/png;base64,${image.toString("base64")}`;

  //------------------------------------------
  // Timestamp
  //------------------------------------------

  const now =
    new Date().toISOString();

  //------------------------------------------
  // Asset
  //------------------------------------------

  return {

    //----------------------------------------
    // Identity
    //----------------------------------------

    id:
      crypto.randomUUID(),

    name:
      `${brief.strategy} Composite Image`,

    type:
      "Image",

    //----------------------------------------
    // Source
    //----------------------------------------

    strategy:
      brief.strategy,

    platform:
      brief.platform,

    placement:
      brief.placement,

    //----------------------------------------
    // Marketing
    //----------------------------------------

    headline:
      brief.headline,

    callToAction:
      brief.callToAction,

    marketingAngle:
      brief.marketingAngle,

    //----------------------------------------
    // Creative Direction
    //----------------------------------------

    visualConcept:
      brief.visualConcept,

    mood:
      brief.mood,

    //----------------------------------------
    // Generation
    //----------------------------------------

    provider:
      "Emma Composite Engine",

    status:
      "Completed",

    //----------------------------------------
    // Files
    //----------------------------------------

    url:
      imageUrl,

    thumbnailUrl:
      imageUrl,

    previewUrl:
      imageUrl,

    //----------------------------------------
    // Metadata
    //----------------------------------------

    prompt:
      prompt ?? "",

    width:
      1024,

    height:
      1024,

    duration:
      0,

    size:
      image.length,

    //----------------------------------------
    // Audit
    //----------------------------------------

    createdAt:
      now,

    updatedAt:
      now,

    //----------------------------------------
    // Future
    //----------------------------------------

    favorite:
      false,

    tags: [

      "Composite",

      "Emma",

      "AI",

    ],

    notes:
      "Generated using the Emma Composite Creative Engine.",

  };

}