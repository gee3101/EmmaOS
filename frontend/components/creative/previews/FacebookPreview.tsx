"use client";

import { CreativeAsset } from "../../../types/CreativeAsset";

interface FacebookPreviewProps {
  asset: CreativeAsset;
  logoUrl?: string;
}

export default function FacebookPreview({
  asset,
  logoUrl,
}: FacebookPreviewProps) {
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
          <div className="text-5xl">📱</div>

          <p className="mt-4 text-slate-500">
            Facebook preview unavailable.
          </p>
        </div>
      </div>
    );
  }

  //------------------------------------------
  // Defaults
  //------------------------------------------

  const pageName = "Emma Jewelry";

  const primaryText =
    asset.headline ||
    "Discover meaningful personalized gifts designed to celebrate life's most important moments.";

  const headline =
    asset.headline ||
    asset.name;

  const description =
    "Shop today and create a personalized gift they'll treasure forever.";

  //------------------------------------------
  // Render
  //------------------------------------------

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-lg
        "
      >
        {/* =====================================
            Header
        ===================================== */}

        <div className="flex items-center gap-3 p-4">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className="
                h-12
                w-12
                rounded-full
                object-cover
                border
                border-slate-200
              "
            />
          ) : (
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-slate-200
                text-lg
                font-semibold
                text-slate-600
              "
            >
              E
            </div>
          )}

          <div>
            <div className="font-semibold text-slate-900">
              {pageName}
            </div>

            <div className="text-xs text-slate-500">
              Sponsored
            </div>
          </div>
        </div>

        {/* =====================================
            Primary Text
        ===================================== */}

        <div className="px-4 pb-4">
          <p className="text-sm leading-6 text-slate-800">
            {primaryText}
          </p>
        </div>

        {/* =====================================
            Photography
        ===================================== */}

        <img
          src={asset.url}
          alt={asset.name}
          className="block w-full object-cover"
        />

        {/* =====================================
            Link Preview
        ===================================== */}

        <div className="border-t border-slate-200 bg-slate-50 p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500">
            YOURSTORE.COM
          </div>

          <div className="mt-1 font-semibold text-slate-900">
            {headline}
          </div>

          <div className="mt-1 text-sm text-slate-600">
            {description}
          </div>

          <button
            className="
              mt-4
              rounded-md
              bg-slate-200
              px-4
              py-2
              text-sm
              font-semibold
              text-slate-800
            "
          >
            Shop Now
          </button>
        </div>

        {/* =====================================
            Engagement
        ===================================== */}

        <div
          className="
            flex
            justify-around
            border-t
            border-slate-200
            p-3
            text-sm
            text-slate-600
          "
        >
          <button className="font-medium hover:text-slate-900">
            👍 Like
          </button>

          <button className="font-medium hover:text-slate-900">
            💬 Comment
          </button>

          <button className="font-medium hover:text-slate-900">
            ↗ Share
          </button>
        </div>
      </div>
    </div>
  );
}