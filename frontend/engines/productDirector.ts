import { ProcessedProduct } from "./processProducts";

export interface ProductDirection {

  //------------------------------------------
  // Product Importance
  //------------------------------------------

  heroPriority: string;

  prominence: string;

  //------------------------------------------
  // Visibility
  //------------------------------------------

  visibility: string;

  framing: string;

  focus: string;

  //------------------------------------------
  // Product Placement
  //------------------------------------------

  placement: string;

  orientation: string;

  //------------------------------------------
  // Human Interaction
  //------------------------------------------

  handPlacement: string;

  subjectInteraction: string;

  //------------------------------------------
  // Photography
  //------------------------------------------

  backgroundBlur: string;

  productLighting: string;

  //------------------------------------------
  // Protection Rules
  //------------------------------------------

  preserveDetails: string[];

}

export function directProduct(
  product: ProcessedProduct
): ProductDirection {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  let direction: ProductDirection = {

    heroPriority:
      "Primary subject",

    prominence:
      "Large and immediately noticeable",

    visibility:
      "Completely visible",

    framing:
      "Centered within the composition",

    focus:
      "Sharpest object in the photograph",

    placement:
      "Foreground",

    orientation:
      "Natural product orientation",

    handPlacement:
      "Hands naturally guide attention toward the product",

    subjectInteraction:
      "Subjects admire and interact naturally with the product",

    backgroundBlur:
      "Soft shallow depth of field",

    productLighting:
      "Soft natural light highlighting product details",

    preserveDetails: [

      "Do not redesign the product",

      "Do not change shape",

      "Do not change materials",

      "Do not change colors",

      "Do not change proportions",

      "Do not remove details",

    ],

  };

  //------------------------------------------
  // Jewelry
  //------------------------------------------

  if (

    product.giftType.toLowerCase().includes("necklace") ||

    product.productType.toLowerCase().includes("necklace") ||

    product.productType.toLowerCase().includes("jewelry")

  ) {

    direction = {

      ...direction,

      prominence:
        "Pendant occupies approximately 10-15% of the image",

      visibility:
        "Pendant fully visible",

      framing:
        "Pendant positioned near the visual center",

      focus:
        "Pendant is the sharpest object in the image",

      placement:
        "Centered on the subject's chest",

      orientation:
        "Pendant hangs naturally",

      handPlacement:
        "Hands gently frame or touch the pendant",

      subjectInteraction:
        "Subject emotionally reacts to receiving or wearing the necklace",

      backgroundBlur:
        "Creamy professional portrait blur",

      productLighting:
        "Soft directional lighting emphasizing metal and gemstones",

      preserveDetails: [

        "Keep pendant identical",

        "Keep chain identical",

        "Keep gemstones identical",

        "Keep engraving identical",

        "Do not alter ShineOn design",

        "Do not crop the pendant",

      ],

    };

  }

  //------------------------------------------
  // Wallet
  //------------------------------------------

  if (

    product.productType.toLowerCase().includes("wallet")

  ) {

    direction = {

      ...direction,

      prominence:
        "Wallet occupies approximately 20% of the frame",

      visibility:
        "Wallet fully visible",

      placement:
        "Foreground",

      orientation:
        "Open naturally toward the camera",

      handPlacement:
        "Hands comfortably holding the wallet",

      subjectInteraction:
        "Subject opening or receiving the wallet",

      productLighting:
        "Lighting emphasizes leather texture",

      preserveDetails: [

        "Keep wallet identical",

        "Keep engraving identical",

        "Do not change stitching",

        "Do not alter leather color",

      ],

    };

  }

  //------------------------------------------
  // Generic Gift
  //------------------------------------------

  if (

    product.giftType.toLowerCase().includes("gift")

  ) {

    direction.subjectInteraction =
      "Subject is naturally presenting or receiving the gift";

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return direction;

}