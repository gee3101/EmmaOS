export interface Product {
  // Shopify Data
  title: string;
  handle: string;
  vendor: string;
  productType: string;
  price: string;
  image: string;
  status: string;

  // Product Details
  description?: string;
  tags?: string;
  collections?: string;

  // Emma Intelligence (filled in later)
  relationship?: string;
  recipient?: string;
  occasion?: string;
  emotion?: string;
  audience?: string;
  giftType?: string;
  productCategory?: string;

  // Story Engine
  storyAngle?: string;
  emotionalHook?: string;
  headline?: string;
  callToAction?: string;

  // Emma Metadata
  creativeScore?: number;
  processed?: boolean;
}