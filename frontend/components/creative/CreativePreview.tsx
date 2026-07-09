"use client";

import { useState } from "react";

import { CreativeAsset } from "../../types/CreativeAsset";

import PhotographyView from "./previews/PhotographyView";
import FacebookPreview from "./previews/FacebookPreview";

interface CreativePreviewProps {
  //------------------------------------------
  // Asset
  //------------------------------------------

  asset: CreativeAsset;

  //------------------------------------------
  // Optional Branding
  //------------------------------------------

  logoUrl?: string;
}

type PreviewMode =
  | "photography"
  | "facebook";

export default function CreativePreview({
  asset,
  logoUrl,
}: CreativePreviewProps) {
  //------------------------------------------
  // Preview Mode
  //------------------------------------------

  const [previewMode, setPreviewMode] =
    useState<PreviewMode>("photography");

  //------------------------------------------
  // Video Assets
  //------------------------------------------

  if (asset.type === "Video" && asset.url) {
    return (
      <video
        controls
        className="
          max-h-[700px]
          rounded-xl
          shadow-xl
        "
      >
        <source src={asset.url} />

        Your browser does not support the video tag.
      </video>
    );
  }

  //------------------------------------------
  // Unsupported
  //------------------------------------------

  if (asset.type !== "Image" || !asset.url) {
    return (
      <div
        className="
          flex
          h-80
          w-full
          items-center
          justify-center

          rounded-xl

          border-2
          border-dashed
          border-slate-300

          bg-white
        "
      >
        <div className="text-center">
          <div className="text-5xl">
            {asset.type === "Video"
              ? "🎬"
              : "🖼️"}
          </div>

          <p className="mt-4 text-slate-500">
            Preview unavailable
          </p>
        </div>
      </div>
    );
  }

  //------------------------------------------
  // Render
  //------------------------------------------

  return (
    <div className="space-y-6">
      {/* =====================================
          Preview Tabs
      ===================================== */}

      <div className="flex gap-2 border-b border-slate-200">
        <button
          onClick={() =>
            setPreviewMode("photography")
          }
          className={`
            rounded-t-lg
            px-4
            py-2
            text-sm
            font-medium
            transition-colors

            ${
              previewMode === "photography"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-500 hover:text-slate-900"
            }
          `}
        >
          Photography
        </button>

        <button
          onClick={() =>
            setPreviewMode("facebook")
          }
          className={`
            rounded-t-lg
            px-4
            py-2
            text-sm
            font-medium
            transition-colors

            ${
              previewMode === "facebook"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-500 hover:text-slate-900"
            }
          `}
        >
          Facebook Preview
        </button>
      </div>

      {/* =====================================
          Active Preview
      ===================================== */}

      {previewMode === "photography" ? (
        <PhotographyView
          asset={asset}
        />
      ) : (
        <FacebookPreview
          asset={asset}
          logoUrl={logoUrl}
        />
      )}
    </div>
  );
}