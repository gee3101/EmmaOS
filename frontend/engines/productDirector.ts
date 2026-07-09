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

}

export function directProduct(
  product: ProcessedProduct
): ProductDirection {

  //------------------------------------------
  // Defaults
  //------------------------------------------

  const direction: ProductDirection = {

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
      "Subjects naturally interact with the product",

    backgroundBlur:
      "Soft shallow depth of field",

    productLighting:
      "Soft natural light emphasizing product details",

  };

  //------------------------------------------
  // Jewelry
  //------------------------------------------

  if (

    product.giftType.toLowerCase().includes("necklace") ||

    product.productType.toLowerCase().includes("necklace") ||

    product.productType.toLowerCase().includes("jewelry")

  ) {

    direction.prominence =
      "Pendant occupies approximately 10–15% of the image";

    direction.visibility =
      "Pendant fully visible";

    direction.framing =
      "Pendant positioned near the visual center";

    direction.focus =
      "Pendant is the sharpest object in the image";

    direction.placement =
      "Centered on the subject's chest";

    direction.orientation =
      "Pendant hangs naturally";

    direction.handPlacement =
      "Hands gently frame the pendant without covering it";

    direction.subjectInteraction =
      "Subject emotionally reacts to receiving or wearing the necklace";

    direction.backgroundBlur =
      "Creamy professional portrait bokeh";

    direction.productLighting =
      "Soft directional lighting emphasizing metal and gemstones";

  }

  //------------------------------------------
  // Wallet
  //------------------------------------------

  if (

    product.productType.toLowerCase().includes("wallet")

  ) {

    direction.prominence =
      "Wallet occupies approximately 20% of the frame";

    direction.visibility =
      "Wallet fully visible";

    direction.placement =
      "Foreground";

    direction.orientation =
      "Open naturally toward the camera";

    direction.handPlacement =
      "Hands comfortably holding the wallet";

    direction.subjectInteraction =
      "Subject opening or receiving the wallet";

    direction.productLighting =
      "Lighting emphasizes leather texture";

  }

  //------------------------------------------
  // Generic Gift
  //------------------------------------------

  if (

    product.giftType.toLowerCase().includes("gift")

  ) {

    direction.subjectInteraction =
      "Subject naturally presenting or receiving the gift";

  }

  //------------------------------------------
  // Return
  //------------------------------------------

  return direction;

}