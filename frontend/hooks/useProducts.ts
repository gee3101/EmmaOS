"use client";

import { useState } from "react";
import { Product } from "../types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProducts(newProducts: Product[]) {
    setProducts(newProducts);
  }

  function clearProducts() {
    setProducts([]);
  }

  return {
    products,
    addProducts,
    clearProducts,
    productCount: products.length,
  };
}