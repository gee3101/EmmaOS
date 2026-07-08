"use client";

import { useProducts } from "../../hooks/useProducts";

import ImportButton from "../buttons/ImportButton";
import StatusCards from "../cards/StatusCards";
import ProductQueue from "./ProductQueue";
import MarketingWorkspace from "../panels/MarketingWorkspace";

export default function ProductWorkspace() {
  const {
    rawProducts,
    products,

    selectedProduct,
    setSelectedProduct,

    addProducts,
    processProducts,
    clearProducts,

    importedCount,
    processedCount,
    pendingCount,
  } = useProducts();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl space-y-6 p-6">

        {/* ======================================
            Header
        ====================================== */}

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            EmmaOS
          </h1>

          <p className="mt-1 text-slate-600">
            AI Marketing Operating System
          </p>

        </div>

        {/* ======================================
            Import Controls
        ====================================== */}

        <ImportButton
          onImport={addProducts}
          onProcess={processProducts}
          onClear={clearProducts}
          hasProducts={rawProducts.length > 0}
          hasProcessedProducts={products.length > 0}
        />

        {/* ======================================
            Dashboard
        ====================================== */}

        <StatusCards
          imported={importedCount}
          processed={processedCount}
          pending={pendingCount}
        />

        {/* ======================================
            Workspace
        ====================================== */}

        <div className="grid grid-cols-3 gap-6">

          <div className="col-span-1">

            <ProductQueue
              products={products}
              selectedProduct={selectedProduct}
              onSelect={setSelectedProduct}
            />

          </div>

          <div className="col-span-2">

            <MarketingWorkspace
              product={selectedProduct}
            />

          </div>

        </div>

      </div>
    </div>
  );
}