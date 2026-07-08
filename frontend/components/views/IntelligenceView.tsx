"use client";

import { ProcessedProduct } from "../../engines/processProducts";

interface IntelligenceViewProps {
  product: ProcessedProduct;
}

interface IntelligenceCardProps {
  title: string;
  value: string | number;
}

function IntelligenceCard({
  title,
  value,
}: IntelligenceCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">

      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-base font-semibold text-slate-900">
        {value || "-"}
      </div>

    </div>
  );
}

export default function IntelligenceView({
  product,
}: IntelligenceViewProps) {
  return (
    <div className="space-y-6">

      {/* ======================================
          Product Overview
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          {product.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">

          <span>
            <strong>Vendor:</strong> {product.vendor}
          </span>

          <span>
            <strong>Category:</strong> {product.productType}
          </span>

          <span>
            <strong>Price:</strong> ${product.price}
          </span>

        </div>

      </div>

      {/* ======================================
          Emma Intelligence
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold text-slate-900">
          Emma Intelligence
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Emma's understanding of this product before campaign generation.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <IntelligenceCard
            title="Relationship"
            value={product.relationship}
          />

          <IntelligenceCard
            title="Occasion"
            value={product.occasion}
          />

          <IntelligenceCard
            title="Emotion"
            value={product.emotion}
          />

          <IntelligenceCard
            title="Gift Type"
            value={product.giftType}
          />

          <IntelligenceCard
            title="Audience"
            value={product.audience}
          />

          <IntelligenceCard
            title="Pain Point"
            value={product.painPoint}
          />

          <IntelligenceCard
            title="Desire"
            value={product.desire}
          />

          <IntelligenceCard
            title="Motivation"
            value={product.motivation}
          />

        </div>

      </div>

      {/* ======================================
          Marketing Summary
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold text-slate-900">
          Marketing Summary
        </h2>

        <div className="mt-6 space-y-5">

          <div>

            <h3 className="font-semibold text-slate-800">
              Marketing Angle
            </h3>

            <p className="mt-2 text-slate-600">
              {product.marketingAngle}
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              Headline
            </h3>

            <p className="mt-2 text-slate-600">
              {product.headline}
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              Story Summary
            </h3>

            <p className="mt-2 whitespace-pre-wrap text-slate-600">
              {product.story}
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              Call To Action
            </h3>

            <p className="mt-2 text-slate-600">
              {product.callToAction}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}