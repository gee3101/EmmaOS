"use client";

import { ChangeEvent, useRef, useState } from "react";

import { parseShopifyCSV } from "../../engines/csvEngine";
import { Product } from "../../types/Product";

interface ImportButtonProps {
  onImport: (products: Product[]) => void;
  onProcess: () => void;
  onClear: () => void;

  hasProducts: boolean;
  hasProcessedProducts: boolean;
}

export default function ImportButton({
  onImport,
  onProcess,
  onClear,

  hasProducts,
  hasProcessedProducts,
}: ImportButtonProps) {

  const fileInput = useRef<HTMLInputElement>(null);

  const [importing, setImporting] = useState(false);

  async function handleFileChange(
    event: ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];

    if (!file) return;

    try {

      setImporting(true);

      const products = await parseShopifyCSV(file);

      onImport(products);

    } catch (err) {

      console.error(err);

      alert("Unable to import Shopify CSV.");

    } finally {

      setImporting(false);

      event.target.value = "";

    }

  }

  return (

    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5">

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => fileInput.current?.click()}
          disabled={importing}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {importing ? "Importing..." : "📁 Import CSV"}
        </button>

        <button
          onClick={onProcess}
          disabled={!hasProducts}
          className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ⚙️ Process Products
        </button>

        <button
          onClick={onClear}
          disabled={!hasProducts && !hasProcessedProducts}
          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          🗑 Clear Workspace
        </button>

      </div>

      <input
        ref={fileInput}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
      />

    </div>

  );

}