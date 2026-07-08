"use client";

import { ProcessedProduct } from "../../engines/processProducts";

interface ProductDetailsProps {
  product?: ProcessedProduct | null;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  //------------------------------------------
  // Empty State
  //------------------------------------------

  if (!product) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-10">
        <div className="text-center">

          <h2 className="text-xl font-semibold text-slate-700">
            Emma Intelligence
          </h2>

          <p className="mt-3 text-slate-500">
            Select a product to view Emma's marketing intelligence.
          </p>

        </div>
      </div>
    );
  }

  //------------------------------------------

  return (
    <div className="space-y-6">

      {/* ======================================
          Product Overview
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">

        <h1 className="text-2xl font-bold">
          {product.title}
        </h1>

        <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">

          <span>
            <strong>Vendor:</strong> {product.vendor}
          </span>

          <span>
            <strong>Type:</strong> {product.productType}
          </span>

          <span>
            <strong>Price:</strong> ${product.price}
          </span>

        </div>

      </div>

      {/* ======================================
          Emma Intelligence
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">

        <h2 className="text-xl font-semibold">
          Emma Intelligence
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4">

          <InfoCard
            title="Relationship"
            value={product.relationship}
          />

          <InfoCard
            title="Occasion"
            value={product.occasion}
          />

          <InfoCard
            title="Emotion"
            value={product.emotion}
          />

          <InfoCard
            title="Gift Type"
            value={product.giftType}
          />

          <InfoCard
            title="Audience"
            value={product.audience}
          />

          <InfoCard
            title="Motivation"
            value={product.motivation}
          />

        </div>

      </div>

      {/* ======================================
          Story
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">

        <h2 className="text-xl font-semibold">
          Story
        </h2>

        <div className="mt-5 space-y-4">

          <Section
            title="Marketing Angle"
            value={product.marketingAngle}
          />

          <Section
            title="Headline"
            value={product.headline}
          />

          <Section
            title="Story"
            value={product.story}
          />

          <Section
            title="Call To Action"
            value={product.callToAction}
          />

        </div>

      </div>

      {/* ======================================
          Campaign
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">

        <h2 className="text-xl font-semibold">
          Campaign
        </h2>

        <div className="mt-5 space-y-6">

          <Section
            title="Facebook Primary Text"
            value={product.campaign.facebookPrimaryText}
          />

          <Section
            title="Facebook Headline"
            value={product.campaign.facebookHeadline}
          />

          <Section
            title="Facebook Description"
            value={product.campaign.facebookDescription}
          />

          <Section
            title="Email Subject"
            value={product.campaign.emailSubject}
          />

          <Section
            title="Email Body"
            value={product.campaign.emailBody}
          />

          <Section
            title="Image Prompt"
            value={product.campaign.imagePrompt}
          />

          <Section
            title="Video Prompt"
            value={product.campaign.videoPrompt}
          />

        </div>

      </div>

    </div>
  );
}

/* ==========================================
   Helper Components
========================================== */

interface InfoCardProps {
  title: string;
  value: string;
}

function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">

      <div className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </div>

      <div className="mt-2 font-semibold">
        {value || "-"}
      </div>

    </div>
  );
}

interface SectionProps {
  title: string;
  value: string;
}

function Section({
  title,
  value,
}: SectionProps) {
  return (
    <div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 whitespace-pre-wrap text-slate-600">
        {value || "-"}
      </p>

    </div>
  );
}