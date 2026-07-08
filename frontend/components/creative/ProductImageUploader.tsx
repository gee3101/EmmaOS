"use client";

import { ChangeEvent, useRef } from "react";

interface ProductImageUploaderProps {
  image: File | null;
  previewUrl?: string | null;
  onChange: (file: File | null) => void;
}

export default function ProductImageUploader({
  image,
  previewUrl,
  onChange,
}: ProductImageUploaderProps) {

  const fileInput =
    useRef<HTMLInputElement>(null);

  //------------------------------------------
  // Upload
  //------------------------------------------

  function handleFileSelected(
    event: ChangeEvent<HTMLInputElement>
  ) {

    const file =
      event.target.files?.[0];

    if (!file) return;

    onChange(file);

  }

  //------------------------------------------
  // Remove
  //------------------------------------------

  function removeImage() {

    onChange(null);

    if (fileInput.current) {

      fileInput.current.value = "";

    }

  }

  //------------------------------------------

  return (

    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-5">

        <h2 className="text-xl font-semibold text-slate-900">
          Product Asset
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload the primary product image Emma will
          use when creating advertisements.
        </p>

      </div>

      {/* Preview */}

      {image && previewUrl ? (

        <div className="space-y-4">

          <div className="overflow-hidden rounded-xl border border-slate-200">

            <img
              src={previewUrl}
              alt="Product Preview"
              className="max-h-[450px] w-full object-contain bg-slate-50"
            />

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Replace Image
            </button>

            <button
              type="button"
              onClick={removeImage}
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Remove Image
            </button>

          </div>

        </div>

      ) : (

        <div
          onClick={() => fileInput.current?.click()}
          className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 transition hover:border-blue-500 hover:bg-slate-50"
        >

          <div className="text-6xl">
            🖼️
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-800">
            Upload Product Image
          </h3>

          <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
            Click anywhere to upload the primary
            product image used for AI ad generation.
          </p>

        </div>

      )}

      <input
        ref={fileInput}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleFileSelected}
      />

    </div>

  );

}