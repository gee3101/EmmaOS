"use client";

import { CreativeAsset } from "../../types/CreativeAsset";

interface CreativeWorkspaceProps {
  assets: CreativeAsset[];
}

export default function CreativeWorkspace({
  assets,
}: CreativeWorkspaceProps) {

  //------------------------------------------
  // Empty State
  //------------------------------------------

  if (assets.length === 0) {

    return (

      <div className="rounded-xl border border-slate-200 bg-white p-12 shadow-sm">

        <div className="text-center">

          <div className="text-6xl">
            🎨
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Creative Workspace
          </h2>

          <p className="mt-3 text-slate-500">
            Emma hasn't generated any creative assets yet.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Generate an image, video, or complete creative pack to begin.
          </p>

        </div>

      </div>

    );

  }

  //------------------------------------------
  // Workspace
  //------------------------------------------

  return (

    <div className="space-y-6">

      {assets.map((asset) => (

        <div
          key={asset.id}
          className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        >

          {/* ======================================
              Header
          ====================================== */}

          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold text-slate-900">
                  {asset.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">

                  {asset.provider}

                  {" • "}

                  {asset.platform}

                  {" • "}

                  {asset.placement}

                </p>

              </div>

              <div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {asset.status}
                </span>

              </div>

            </div>

          </div>

          {/* ======================================
              Preview
          ====================================== */}

          <div className="flex items-center justify-center bg-slate-100 p-8">

            {asset.type === "Image" && asset.url ? (

              <img
                src={asset.url}
                alt={asset.name}
                className="max-h-[600px] rounded-lg shadow-lg"
              />

            ) : asset.type === "Video" && asset.url ? (

              <video
                controls
                className="max-h-[600px] rounded-lg shadow-lg"
              >
                <source
                  src={asset.url}
                />
              </video>

            ) : (

              <div className="flex h-80 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white">

                <div className="text-center">

                  <div className="text-5xl">

                    {asset.type === "Video"
                      ? "🎬"
                      : "🖼"}

                  </div>

                  <p className="mt-4 text-slate-500">
                    Preview unavailable
                  </p>

                </div>

              </div>

            )}

          </div>

          {/* ======================================
              Details
          ====================================== */}

          <div className="grid gap-6 border-t border-slate-200 p-6 md:grid-cols-2">

            <div>

              <h3 className="mb-2 font-semibold text-slate-900">
                Asset Information
              </h3>

              <div className="space-y-2 text-sm text-slate-600">

                <div>
                  <strong>Type:</strong> {asset.type}
                </div>

                <div>
                  <strong>Provider:</strong> {asset.provider}
                </div>

                <div>
                  <strong>Status:</strong> {asset.status}
                </div>

                <div>
                  <strong>Strategy:</strong> {asset.strategy}
                </div>

              </div>

            </div>

            <div>

              <h3 className="mb-2 font-semibold text-slate-900">
                Generation
              </h3>

              <div className="space-y-2 text-sm text-slate-600">

                <div>
                  <strong>Created:</strong>
                </div>

                <div>

                  {new Date(asset.createdAt).toLocaleString()}

                </div>

              </div>

            </div>

          </div>

          {/* ======================================
              Actions
          ====================================== */}

          <div className="flex flex-wrap gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">

            <button
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
            >
              ⬇ Download
            </button>

            <button
              className="rounded-lg bg-slate-700 px-5 py-2 font-medium text-white hover:bg-slate-800"
            >
              🔄 Regenerate
            </button>

            <button
              className="rounded-lg border border-slate-300 bg-white px-5 py-2 hover:bg-slate-100"
            >
              ⭐ Favorite
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}