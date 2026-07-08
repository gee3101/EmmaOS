"use client";

import ImportButton from "../components/ImportButton";
import ProductQueue from "../components/ProductQueue";
import StatusCards from "../components/StatusCards";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const {
    products,
    addProducts,
    productCount,
  } = useProducts();

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl rounded-3xl bg-white shadow-xl p-10">

        {/* Header */}

        <h1 className="text-5xl font-bold text-slate-800">
          EmmaOS
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          AI Marketing Operating System
        </p>

        {/* Welcome Card */}

        <div className="mt-10 rounded-2xl border border-slate-200 p-8">

          <h2 className="text-2xl font-semibold">
            Welcome back, Gee.
          </h2>

          <p className="mt-2 text-slate-500">
            Import a Shopify CSV to begin processing products.
          </p>

          <div className="mt-8 flex gap-4">

            <ImportButton
              onProductsLoaded={addProducts}
            />

            <button
              disabled={productCount === 0}
              className={`rounded-xl border px-6 py-3 transition ${
                productCount === 0
                  ? "cursor-not-allowed bg-slate-100 text-slate-400"
                  : "hover:bg-slate-100"
              }`}
            >
              Process Products
            </button>

          </div>

        </div>

        {/* Dashboard */}

        <StatusCards
          productCount={productCount}
        />

        {/* Product Queue */}

        <ProductQueue
          products={products}
        />

      </div>
    </main>
  );
}