"use client";

import { useRef } from "react";
import { parseShopifyCSV } from "../engines/csvEngine";
import { Product } from "../types/Product";

interface Props {
  onProductsLoaded: (products: Product[]) => void;
}

export default function ImportButton({ onProductsLoaded }: Props) {
  const fileInput = useRef<HTMLInputElement>(null);

  const openPicker = () => {
    fileInput.current?.click();
  };

  const handleFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    console.log("CSV Selected:", file.name);

    try {
      const products = await parseShopifyCSV(file);

      onProductsLoaded(products);

      console.log("Imported Products:", products);
    } catch (error) {
      console.error("CSV Import Failed:", error);
      alert("Unable to import CSV.");
    }
  };

  return (
    <>
      <input
        ref={fileInput}
        type="file"
        accept=".csv"
        hidden
        onChange={handleFile}
      />

      <button
        onClick={openPicker}
        className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition"
      >
        Import Products
      </button>
    </>
  );
}