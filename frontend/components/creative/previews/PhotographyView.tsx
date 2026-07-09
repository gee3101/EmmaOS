"use client";

import { CreativeAsset } from "../../../types/CreativeAsset";

interface PhotographyViewProps {
  asset: CreativeAsset;
}

export default function PhotographyView({
  asset,
}: PhotographyViewProps) {
  //------------------------------------------
  // Unsupported Asset
  //------------------------------------------

  if (asset.type !== "Image" || !asset.url) {
    return (
      <div
        className="
          flex
          h-96
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
          <div className="text-5xl">🖼️</div>

          <p className="mt-4 text-slate-500">
            No photography available.
          </p>
        </div>
      </div>
    );
  }

  //------------------------------------------
  // Metadata
  //------------------------------------------

  const platform =
    asset.platform.length > 0
      ? asset.platform
      : "Unknown";

  const assetType = asset.type;

  //------------------------------------------
  // Render
  //------------------------------------------

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* =====================================
          Header
      ===================================== */}

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Generated Photography
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Review the generated lifestyle image before
          viewing platform-specific advertisement previews.
        </p>
      </div>

      {/* =====================================
          Photography
      ===================================== */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-lg
        "
      >
        <img
          src={asset.url}
          alt={asset.name}
          className="
            block
            w-full
            object-contain
            bg-slate-50
          "
        />
      </div>

      {/* =====================================
          Asset Information
      ===================================== */}

      <div
        className="
          rounded-xl
          border
          border-slate-200
          bg-white
          p-6
        "
      >
        <h3 className="text-lg font-semibold text-slate-900">
          Asset Information
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Name
            </p>

            <p className="mt-1 text-sm text-slate-900">
              {asset.name}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Type
            </p>

            <p className="mt-1 text-sm text-slate-900">
              {assetType}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Intended Platform
            </p>

            <p className="mt-1 text-sm text-slate-900">
              {platform}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}