"use client";

import { CreativeBrief } from "../../types/CreativeBrief";

interface CreativeBriefPanelProps {
  brief: CreativeBrief;
}

interface DetailCardProps {
  title: string;
  value: string;
}

function DetailCard({
  title,
  value,
}: DetailCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">

      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </div>

      <div className="mt-2 whitespace-pre-wrap text-sm text-slate-800">
        {value || "-"}
      </div>

    </div>
  );
}

export default function CreativeBriefPanel({
  brief,
}: CreativeBriefPanelProps) {

  return (

    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* =====================================
          Header
      ====================================== */}

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-2xl font-bold text-slate-900">
          Emma Creative Brief
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Emma's marketing intelligence for this product.
        </p>

      </div>

      <div className="space-y-8 p-6">

        {/* =====================================
            Product
        ====================================== */}

        <section>

          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Product
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            <DetailCard
              title="Product"
              value={brief.productTitle}
            />

            <DetailCard
              title="Description"
              value={brief.description}
            />

          </div>

        </section>

        {/* =====================================
            Emma Intelligence
        ====================================== */}

        <section>

          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Emma Intelligence
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            <DetailCard
              title="Relationship"
              value={brief.relationship}
            />

            <DetailCard
              title="Occasion"
              value={brief.occasion}
            />

            <DetailCard
              title="Emotion"
              value={brief.emotion}
            />

            <DetailCard
              title="Audience"
              value={brief.audience}
            />

            <DetailCard
              title="Pain Point"
              value={brief.painPoint}
            />

            <DetailCard
              title="Desire"
              value={brief.desire}
            />

            <DetailCard
              title="Fear"
              value={brief.fear}
            />

            <DetailCard
              title="Motivation"
              value={brief.motivation}
            />

            <DetailCard
              title="Gift Type"
              value={brief.giftType}
            />

          </div>

        </section>

        {/* =====================================
            Story
        ====================================== */}

        <section>

          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Story Intelligence
          </h3>

          <div className="grid gap-4">

            <DetailCard
              title="Story"
              value={brief.story}
            />

            <DetailCard
              title="Marketing Angle"
              value={brief.marketingAngle}
            />

          </div>

        </section>

        {/* =====================================
            Campaign
        ====================================== */}

        <section>

          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Campaign
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <DetailCard
              title="Strategy"
              value={brief.strategy}
            />

            <DetailCard
              title="Platform"
              value={brief.platform}
            />

            <DetailCard
              title="Placement"
              value={brief.placement}
            />

            <DetailCard
              title="Objective"
              value={brief.objective}
            />

          </div>

        </section>

        {/* =====================================
            Marketing Copy
        ====================================== */}

        <section>

          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Marketing Copy
          </h3>

          <div className="grid gap-4">

            <DetailCard
              title="Headline"
              value={brief.headline}
            />

            <DetailCard
              title="Call To Action"
              value={brief.callToAction}
            />

          </div>

        </section>

      </div>

    </div>

  );

}