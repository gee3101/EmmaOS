"use client";

import { ProcessedProduct } from "../../engines/processProducts";

interface ProductCardProps {
  product: ProcessedProduct;
  selected?: boolean;
  onClick?: () => void;
}

export default function ProductCard({
  product,
  selected = false,
  onClick,
}: ProductCardProps) {
  //------------------------------------------
  // Badge Colors
  //------------------------------------------

  const relationshipColor =
    product.relationship === "Wife"
      ? "bg-pink-100 text-pink-700"
      : product.relationship === "Husband"
      ? "bg-blue-100 text-blue-700"
      : "bg-slate-100 text-slate-700";

  const emotionColor =
    product.emotion === "Love"
      ? "bg-red-100 text-red-700"
      : product.emotion === "Gratitude"
      ? "bg-green-100 text-green-700"
      : "bg-slate-100 text-slate-700";

  //------------------------------------------

  return (
    <button
      onClick={onClick}
      className={`w-full border-b border-slate-100 p-4 text-left transition-all duration-150 hover:bg-slate-50 ${
        selected
          ? "bg-blue-50 border-l-4 border-l-blue-600"
          : "bg-white"
      }`}
    >
      {/* Product Title */}

      <h3 className="font-semibold text-slate-900 line-clamp-2">
        {product.title}
      </h3>

      {/* Vendor / Type */}

      <div className="mt-1 text-sm text-slate-500">
        <span>{product.vendor}</span>

        {product.productType && (
          <>
            <span className="mx-1">•</span>
            <span>{product.productType}</span>
          </>
        )}
      </div>

      {/* Price */}

      {product.price && (
        <div className="mt-2 text-lg font-bold text-slate-900">
          ${product.price}
        </div>
      )}

      {/* Emma Intelligence */}

      <div className="mt-3 flex flex-wrap gap-2">

        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${relationshipColor}`}
        >
          {product.relationship}
        </span>

        <span
          className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700"
        >
          {product.occasion}
        </span>

        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${emotionColor}`}
        >
          {product.emotion}
        </span>

      </div>

      {/* Marketing Angle */}

      {product.marketingAngle && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Marketing Angle
          </div>

          <p className="mt-1 text-sm text-slate-700 line-clamp-2">
            {product.marketingAngle}
          </p>
        </div>
      )}
    </button>
  );
}