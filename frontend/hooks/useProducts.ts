"use client";

import { useState } from "react";

import { Product } from "../types/Product";
import {
  ProcessedProduct,
  processProducts,
} from "../engines/processProducts";

export function useProducts() {

  //------------------------------------------
  // State
  //------------------------------------------

  const [rawProducts, setRawProducts] =
    useState<Product[]>([]);

  const [products, setProducts] =
    useState<ProcessedProduct[]>([]);

  const [selectedProduct, setSelectedProduct] =
    useState<ProcessedProduct | null>(null);

  //------------------------------------------
  // Import
  //------------------------------------------

  function addProducts(importedProducts: Product[]) {

    setRawProducts(importedProducts);

    setProducts([]);

    setSelectedProduct(null);

  }

  //------------------------------------------
  // Process
  //------------------------------------------

  function processAllProducts() {

    if (rawProducts.length === 0) return;

    const processed =
      processProducts(rawProducts);

    setProducts(processed);

    if (processed.length > 0) {

      setSelectedProduct(processed[0]);

    }

  }

  //------------------------------------------
  // Clear
  //------------------------------------------

  function clearProducts() {

    setRawProducts([]);

    setProducts([]);

    setSelectedProduct(null);

  }

  //------------------------------------------

  return {

    rawProducts,

    products,

    selectedProduct,

    setSelectedProduct,

    addProducts,

    processProducts: processAllProducts,

    clearProducts,

    importedCount: rawProducts.length,

    processedCount: products.length,

    pendingCount: rawProducts.length - products.length,

  };

}