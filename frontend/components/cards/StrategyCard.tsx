"use client";

import { CampaignStrategy } from "../../types/CampaignStrategy";

interface StrategyCardProps {
  strategy: CampaignStrategy;
}

interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-slate-800 whitespace-pre-wrap">
        {value || "-"}
      </div>
    </div>
  );
}

export default function StrategyCard({
  strategy,
}: StrategyCardProps) {

  return (

    <div className="space-y-6">

      {/* =====================================
          Header
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-4">

          <div className="text-5xl">
            {strategy.icon}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {strategy.type} Strategy
            </h2>

            <p className="mt-1 text-slate-500">
              Emma's {strategy.type.toLowerCase()} marketing philosophy for this product.
            </p>

          </div>

        </div>

      </div>

      {/* =====================================
          Psychology
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-xl font-semibold">
          Marketing Psychology
        </h3>

        <div className="mt-6 grid grid-cols-3 gap-4">

          <DetailRow
            label="Primary Emotion"
            value={strategy.primaryEmotion}
          />

          <DetailRow
            label="Objective"
            value={strategy.objective}
          />

          <DetailRow
            label="Target Audience"
            value={strategy.targetAudience}
          />

        </div>

      </div>

      {/* =====================================
          Facebook
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-xl font-semibold">
          Facebook Campaign
        </h3>

        <div className="mt-6 space-y-4">

          <DetailRow
            label="Primary Text"
            value={strategy.facebookPrimaryText}
          />

          <DetailRow
            label="Headline"
            value={strategy.facebookHeadline}
          />

          <DetailRow
            label="Description"
            value={strategy.facebookDescription}
          />

        </div>

      </div>

      {/* =====================================
          Email
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-xl font-semibold">
          Email Campaign
        </h3>

        <div className="mt-6 space-y-4">

          <DetailRow
            label="Subject"
            value={strategy.emailSubject}
          />

          <DetailRow
            label="Email Body"
            value={strategy.emailBody}
          />

        </div>

      </div>

      {/* =====================================
          Creative Direction
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-xl font-semibold">
          Creative Direction
        </h3>

        <div className="mt-6 space-y-4">

          <DetailRow
            label="Image Prompt"
            value={strategy.imagePrompt}
          />

          <DetailRow
            label="Video Prompt"
            value={strategy.videoPrompt}
          />

        </div>

      </div>

      {/* =====================================
          CTA
      ====================================== */}

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">

        <h3 className="text-xl font-semibold text-blue-900">
          Recommended Call To Action
        </h3>

        <div className="mt-4">

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            {strategy.callToAction}
          </button>

        </div>

      </div>

    </div>

  );

}