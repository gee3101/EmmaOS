import { ProcessedProduct } from "./processProducts";

import {
  ProductPreservation,
} from "../types/ProductPreservation";

export function determineProductPreservation(
  product: ProcessedProduct
): ProductPreservation {

  //------------------------------------------
  // Normalize
  //------------------------------------------

  const title =
    (
      product.title +
      " " +
      product.description
    ).toLowerCase();

  //------------------------------------------
  // Personalized Jewelry
  //------------------------------------------

  if (

    title.includes("necklace") ||
    title.includes("pendant") ||
    title.includes("bracelet") ||
    title.includes("shineon") ||
    title.includes("gift box") ||
    title.includes("engraved")

  ) {

    return {

      //--------------------------------------
      // Classification
      //--------------------------------------

      productCategory:
        "Personalized Jewelry",

      generationPipeline:
        "Composite",

      //--------------------------------------
      // Sacred Elements
      //--------------------------------------

      preserveProduct: true,

      preserveArtwork: true,

      preserveJewelry: true,

      preservePackaging: true,

      preserveEngraving: true,

      preservePrintedText: true,

      preserveMaterials: true,

      preserveColors: true,

      preserveDimensions: true,

      preserveBranding: true,

      //--------------------------------------
      // Creative Freedom
      //--------------------------------------

      allowLightingChange: true,

      allowEnvironmentChange: true,

      allowBackgroundChange: true,

      allowCameraAngleChange: true,

      allowDepthOfField: true,

      allowProps: true,

      allowHumanInteraction: true,

      allowSeasonalDecor: true,

      //--------------------------------------
      // Future Expansion
      //--------------------------------------

      allowCropping: false,

      allowReflection: true,

      allowShadowAdjustment: true,

      allowColorGrading: true,

      allowLensEffects: false,

      allowBackgroundBlur: true,

      //--------------------------------------
      // AI Reasoning
      //--------------------------------------

      reasoning: [

        "This is a personalized jewelry product.",

        "The necklace is part of the customer's purchase.",

        "The printed message card is part of the purchased product.",

        "Artwork and text must remain identical.",

        "Packaging is part of the customer experience.",

        "Composite generation provides the highest product fidelity."

      ]

    };

  }

  //------------------------------------------
  // Personalized Wall Art
  //------------------------------------------

  if (

    title.includes("canvas") ||
    title.includes("wall art") ||
    title.includes("print")

  ) {

    return {

      productCategory:
        "Personalized Wall Art",

      generationPipeline:
        "Composite",

      preserveProduct: true,

      preserveArtwork: true,

      preserveJewelry: false,

      preservePackaging: false,

      preserveEngraving: false,

      preservePrintedText: true,

      preserveMaterials: true,

      preserveColors: true,

      preserveDimensions: true,

      preserveBranding: true,

      allowLightingChange: true,

      allowEnvironmentChange: true,

      allowBackgroundChange: true,

      allowCameraAngleChange: true,

      allowDepthOfField: true,

      allowProps: true,

      allowHumanInteraction: true,

      allowSeasonalDecor: true,

      allowCropping: false,

      allowReflection: true,

      allowShadowAdjustment: true,

      allowColorGrading: true,

      allowLensEffects: false,

      allowBackgroundBlur: true,

      reasoning: [

        "Artwork is the product.",

        "Customer personalization must remain unchanged.",

        "Composite generation preserves exact artwork."

      ]

    };

  }

  //------------------------------------------
  // Generic Merchandise
  //------------------------------------------

  return {

    productCategory:
      "General Merchandise",

    generationPipeline:
      "ImageEdit",

    preserveProduct: true,

    preserveArtwork: false,

    preserveJewelry: false,

    preservePackaging: false,

    preserveEngraving: false,

    preservePrintedText: false,

    preserveMaterials: true,

    preserveColors: true,

    preserveDimensions: true,

    preserveBranding: true,

    allowLightingChange: true,

    allowEnvironmentChange: true,

    allowBackgroundChange: true,

    allowCameraAngleChange: true,

    allowDepthOfField: true,

    allowProps: true,

    allowHumanInteraction: true,

    allowSeasonalDecor: true,

    allowCropping: true,

    allowReflection: true,

    allowShadowAdjustment: true,

    allowColorGrading: true,

    allowLensEffects: true,

    allowBackgroundBlur: true,

    reasoning: [

      "No personalized artwork was detected.",

      "Image editing is appropriate.",

      "The model has greater creative freedom."

    ]

  };

}