export interface Product {

  //------------------------------------------
  // Shopify Fields
  //------------------------------------------

  title: string;

  vendor: string;

  price: string;

  description: string;

  productType: string;

  tags: string;

  sku: string;

  handle: string;

  //------------------------------------------
  // Emma Intelligence
  //------------------------------------------

  relationship: string;

  occasion: string;

  emotion: string;

  giftType: string;

  confidence: number;

}