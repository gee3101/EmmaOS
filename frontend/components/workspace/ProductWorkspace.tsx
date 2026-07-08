"use client";

import { useProducts } from "../../hooks/useProducts";

import ImportButton from "../buttons/ImportButton";
import StatusCards from "../cards/StatusCards";
import ProductQueue from "./ProductQueue";
import ProductDetails from "../panels/ProductDetails";

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
  } = useProducts();

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl space-y-6 p-6">

        {/* Header */}

        <header>
          <h1 className="text-3xl font-bold text-slate-900">
            EmmaOS
          </h1>

          <p className="mt-1 text-slate-600">
            AI Marketing Operating System
          </p>
        </header>

        {/* Toolbar */}

        <ImportButton
          onImport={addProducts}
          onProcess={processProducts}
          onClear={clearProducts}
          hasProducts={rawProducts.length > 0}
          hasProcessedProducts={products.length > 0}
        />

        {/* Dashboard */}

        <StatusCards
          totalProducts={importedCount}
          processedProducts={processedCount}
        />

        {/* Workspace */}

        <section className="grid grid-cols-12 gap-6">

          {/* Product Queue */}

          <aside className="col-span-4">

            <ProductQueue
              products={products}
              selectedProduct={selectedProduct}
              onSelect={setSelectedProduct}
            />

          </aside>

          {/* Emma Intelligence */}

          <section className="col-span-8">

            <ProductDetails
              product={selectedProduct}
            />

          </section>

        </section>

      </div>
    </main>
  );
}