import { BrandProfile } from "../types/BrandProfile";

const treasuredExpressions: BrandProfile = {

  //------------------------------------------
  // Identity
  //------------------------------------------

  name: "Treasured Expressions",

  tagline: "Say It Without Saying a Word",

  mission:
    "Create timeless personalized gifts that celebrate life's most meaningful moments.",

  website: "",

  //------------------------------------------
  // Brand Personality
  //------------------------------------------

  personality: {

    luxury: 9,

    warmth: 10,

    sentiment: 10,

    elegance: 9,

    authenticity: 10,

  },

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  creative: {

    photographyStyle:
      "Luxury Lifestyle Photography",

    lightingStyle:
      "Warm Golden Hour",

    mood:
      "Emotional, Elegant, Authentic",

    colorPalette: [

      "#F8F4ED", // Warm Ivory

      "#C79B5B", // Soft Gold

      "#6E4E2E", // Warm Brown

      "#2C221C", // Dark Chocolate

    ],

    preferredEnvironment:
      "Elegant modern home with warm natural light.",

    preferredBackgroundStyle:
      "Clean premium lifestyle photography with shallow depth of field.",

  },

  //------------------------------------------
  // Prompt Guidance
  //------------------------------------------

  prompting: {

    visualIdentity:
      "Premium personalized keepsake brand focused on emotional storytelling.",

    emotionalTone:
      "Warm, heartfelt, luxurious, genuine, family-oriented.",

    photographyNotes: [

      "Photorealistic commercial photography.",

      "Natural human expressions.",

      "Warm cinematic lighting.",

      "Magazine-quality composition.",

      "Luxury advertising aesthetic.",

      "Minimal visual clutter.",

      "Premium home environments.",

    ],

    prohibitedElements: [

      "Watermarks",

      "Brand logos",

      "Stock photo appearance",

      "Cheap-looking interiors",

      "Cartoon styling",

      "Artificial text",

      "Low quality",

      "Visible AI artifacts",

    ],

  },

  //------------------------------------------
  // Logo
  //------------------------------------------

  logo: {

    enabled: true,

    assetPath:
      "/branding/treasured-expressions-logo.png",

    placement:
      "bottom-right",

    widthPercent: 8,

    opacity: 0.92,

    padding: 32,

  },

  //------------------------------------------
  // Watermark
  //------------------------------------------

  watermark: {

    enabled: false,

    opacity: 0.08,

    scale: 0.30,

  },

  //------------------------------------------
  // Colors
  //------------------------------------------

  colors: {

    primary:
      "#C79B5B",

    secondary:
      "#6E4E2E",

    accent:
      "#F8F4ED",

    background:
      "#FFFDF9",

    textPrimary:
      "#2C221C",

    textSecondary:
      "#6E4E2E",

  },

  //------------------------------------------
  // Typography
  //------------------------------------------

  typography: {

    headlineStyle:
      "Elegant Serif",

    bodyStyle:
      "Modern Sans Serif",

    preferredAlignment:
      "center",

  },

  //------------------------------------------
  // Platform Preferences
  //------------------------------------------

  platforms: {

    facebook: {

      reserveHeadlineArea: true,

      reservePrimaryTextArea: true,

      reserveLogoArea: true,

    },

    instagram: {

      reserveHeadlineArea: false,

      reserveLogoArea: true,

    },

  },

  //------------------------------------------
  // Product Presentation
  //------------------------------------------

  productPresentation: {

    heroStyle:
      "Original product is always the hero.",

    preferredScale: 0.24,

    preserveOriginalProduct: true,

    preservePackaging: true,

    allowPerspectiveAdjustment: false,

    allowArtificialReflections: false,

  },

};

export class BrandEngine {

  //------------------------------------------
  // Active Brand
  //------------------------------------------

  getBrand(): BrandProfile {

    return treasuredExpressions;

  }

}

export const brandEngine =
  new BrandEngine();