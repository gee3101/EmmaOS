"use client";

import { ProcessedProduct } from "../../engines/processProducts";
import { buildCreativeBrief } from "../../engines/creativeBriefBuilder";

import CreativeStudio from "../creative/CreativeStudio";

interface FacebookViewProps {
  product: ProcessedProduct;
}

export default function FacebookView({
  product,
}: FacebookViewProps) {

  //------------------------------------------
  // Build Creative Brief
  //------------------------------------------

  const brief = buildCreativeBrief(product);

  //------------------------------------------

  return (

    <div className="space-y-6">

      {/* =====================================
          Header
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Emma Creative Studio
        </h2>

        <p className="mt-2 text-slate-600">
          Generate Facebook advertisements using Emma's
          Story Intelligence and Creative Engine.
        </p>

      </div>

      {/* =====================================
          Creative Studio
      ====================================== */}

      <CreativeStudio
        brief={brief}
      />

    </div>

  );

}