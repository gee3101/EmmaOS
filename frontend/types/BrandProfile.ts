export interface BrandProfile {

  //------------------------------------------
  // Identity
  //------------------------------------------

  name: string;

  tagline: string;

  mission: string;

  website?: string;

  //------------------------------------------
  // Brand Personality
  //------------------------------------------

  personality: {

    luxury: number;

    warmth: number;

    sentiment: number;

    elegance: number;

    authenticity: number;

  };

  //------------------------------------------
  // Creative Direction
  //------------------------------------------

  creative: {

    photographyStyle: string;

    lightingStyle: string;

    mood: string;

    colorPalette: string[];

    preferredEnvironment: string;

    preferredBackgroundStyle: string;

  };

  //------------------------------------------
  // Prompt Guidance
  //------------------------------------------

  prompting: {

    visualIdentity: string;

    emotionalTone: string;

    photographyNotes: string[];

    prohibitedElements: string[];

  };

  //------------------------------------------
  // Logo
  //------------------------------------------

  logo: {

    enabled: boolean;

    assetPath: string;

    placement:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right"
      | "center";

    widthPercent: number;

    opacity: number;

    padding: number;

  };

  //------------------------------------------
  // Watermark
  //------------------------------------------

  watermark: {

    enabled: boolean;

    opacity: number;

    scale: number;

  };

  //------------------------------------------
  // Brand Colors
  //------------------------------------------

  colors: {

    primary: string;

    secondary: string;

    accent: string;

    background: string;

    textPrimary: string;

    textSecondary: string;

  };

  //------------------------------------------
  // Typography
  //------------------------------------------

  typography: {

    headlineStyle: string;

    bodyStyle: string;

    preferredAlignment:
      | "left"
      | "center"
      | "right";

  };

  //------------------------------------------
  // Platform Preferences
  //------------------------------------------

  platforms: {

    facebook: {

      reserveHeadlineArea: boolean;

      reservePrimaryTextArea: boolean;

      reserveLogoArea: boolean;

    };

    instagram: {

      reserveHeadlineArea: boolean;

      reserveLogoArea: boolean;

    };

  };

  //------------------------------------------
  // Product Presentation
  //------------------------------------------

  productPresentation: {

    heroStyle: string;

    preferredScale: number;

    preserveOriginalProduct: boolean;

    preservePackaging: boolean;

    allowPerspectiveAdjustment: boolean;

    allowArtificialReflections: boolean;

  };

}