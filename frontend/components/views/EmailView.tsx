"use client";

import { ProcessedProduct } from "../../engines/processProducts";

interface EmailViewProps {
  product: ProcessedProduct;
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
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>

      <p className="mt-3 whitespace-pre-wrap text-slate-700 leading-relaxed">
        {value || "-"}
      </p>

    </div>
  );
}

export default function EmailView({
  product,
}: EmailViewProps) {

  const campaign = product.campaign;

  return (
    <div className="space-y-6">

      {/* ======================================
          Header
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Email Campaign
        </h2>

        <p className="mt-2 text-slate-500">
          Emma's recommended email marketing campaign for this product.
        </p>

      </div>

      {/* ======================================
          Campaign Content
      ====================================== */}

      <Section
        title="Subject Line"
        value={campaign.emailSubject}
      />

      <Section
        title="Email Body"
        value={campaign.emailBody}
      />

      <Section
        title="Call To Action"
        value={campaign.callToAction}
      />

      {/* ======================================
          Email Preview
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        {/* Email Header */}

        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

          <div className="text-xs uppercase tracking-wide text-slate-500">
            Subject
          </div>

          <div className="mt-1 text-lg font-semibold text-slate-900">
            {campaign.emailSubject}
          </div>

        </div>

        {/* Email Body */}

        <div className="p-6">

          <div className="whitespace-pre-wrap leading-relaxed text-slate-700">
            {campaign.emailBody}
          </div>

          <div className="mt-8">

            <button
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white"
              type="button"
            >
              {campaign.callToAction}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}