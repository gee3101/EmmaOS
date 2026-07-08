"use client";

import { CreativeAsset } from "../../types/CreativeAsset";

interface AssetGalleryProps {
  assets: CreativeAsset[];
  selectedAsset?: CreativeAsset | null;
  onSelectAsset?: (asset: CreativeAsset) => void;
}

export default function AssetGallery({
  assets,
  selectedAsset,
  onSelectAsset,
}: AssetGalleryProps) {

  if (assets.length === 0) {

    return (

      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-xl font-semibold text-slate-900">
          Asset Library
        </h2>

        <p className="mt-3 text-slate-500">
          No creative assets have been generated yet.
        </p>

      </div>

    );

  }

  return (

    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-xl font-semibold text-slate-900">
          Asset Library
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Every creative generated for this product.
        </p>

      </div>

      <div className="divide-y divide-slate-200">

        {assets.map((asset) => {

          const active =
            selectedAsset?.id === asset.id;

          return (

            <button
              key={asset.id}
              type="button"
              onClick={() => onSelectAsset?.(asset)}
              className={`w-full px-6 py-4 text-left transition hover:bg-slate-50 ${
                active
                  ? "bg-blue-50"
                  : ""
              }`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <div className="font-semibold text-slate-900">

                    {asset.name}

                  </div>

                  <div className="mt-1 text-sm text-slate-500">

                    {asset.provider}

                    {" • "}

                    {asset.type}

                    {" • "}

                    {asset.strategy}

                  </div>

                </div>

                <div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">

                    {asset.status}

                  </span>

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </div>

  );

}