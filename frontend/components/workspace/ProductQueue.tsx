"use client";

import { ProcessedProduct } from "../../engines/processProducts";
import ProductCard from "../cards/ProductCard";

interface ProductQueueProps {
  products: ProcessedProduct[];
  selectedProduct?: ProcessedProduct | null;
  onSelect?: (product: ProcessedProduct) => void;
}

export default function ProductQueue({
  products,
  selectedProduct,
  onSelect,
}: ProductQueueProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-200 p-4">

        <h2 className="text-lg font-semibold">
          Product Queue
        </h2>

        <p className="text-sm text-slate-500">
          {products.length} Products
        </p>

      </div>

      {/* Product List */}

      <div className="max-h-[700px] overflow-y-auto">

        {products.length === 0 ? (

          <div className="p-8 text-center text-slate-500">

            <p className="font-medium">
              No products imported
            </p>

            <p className="mt-2 text-sm">
              Import a Shopify CSV to begin processing products with Emma.
            </p>

          </div>

        ) : (

          products.map((product) => (

            <ProductCard
              key={product.handle}
              product={product}
              selected={selectedProduct?.handle === product.handle}
              onClick={() => onSelect?.(product)}
            />

          ))

        )}

      </div>

    </div>
  );
}