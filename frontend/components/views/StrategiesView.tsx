"use client";

import { useEffect, useState } from "react";

import { ProcessedProduct } from "../../engines/processProducts";
import { CampaignStrategy } from "../../types/CampaignStrategy";

import StrategySelector from "../selectors/StrategySelector";
import StrategyCard from "../cards/StrategyCard";

interface StrategiesViewProps {
  product: ProcessedProduct;
}

export default function StrategiesView({
  product,
}: StrategiesViewProps) {

  //------------------------------------------
  // Selected Strategy
  //------------------------------------------

  const [selectedStrategy, setSelectedStrategy] =
    useState<CampaignStrategy | null>(null);

  //------------------------------------------
  // Initialize Strategy
  //------------------------------------------

  useEffect(() => {

    if (product.strategies.length > 0) {

      setSelectedStrategy(product.strategies[0]);

    } else {

      setSelectedStrategy(null);

    }

  }, [product]);

  //------------------------------------------
  // Empty State
  //------------------------------------------

  if (!product.strategies.length) {

    return (

      <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Marketing Strategies
        </h2>

        <p className="mt-3 text-slate-500">
          No strategies have been generated for this product.
        </p>

      </div>

    );

  }

  if (!selectedStrategy) {

    return null;

  }

  //------------------------------------------

  return (

    <div className="space-y-6">

      {/* ======================================
          Header
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Emma Strategy Engine
        </h2>

        <p className="mt-2 text-slate-500">
          Compare multiple marketing philosophies generated for this product.
        </p>

      </div>

      {/* ======================================
          Strategy Selector
      ====================================== */}

      <StrategySelector
        strategies={product.strategies}
        selectedStrategy={selectedStrategy}
        onSelect={setSelectedStrategy}
      />

      {/* ======================================
          Active Strategy
      ====================================== */}

      <StrategyCard
        strategy={selectedStrategy}
      />

    </div>

  );

}