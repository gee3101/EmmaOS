"use client";

import { useMemo, useState } from "react";

import { ProcessedProduct } from "../../engines/processProducts";

import TabBar, { TabItem } from "../tabs/TabBar";

import IntelligenceView from "../views/IntelligenceView";
import FacebookView from "../views/FacebookView";
import EmailView from "../views/EmailView";
import AIPromptsView from "../views/AIPromptsView";
import StrategiesView from "../views/StrategiesView";

interface ProductDetailsProps {
  product?: ProcessedProduct | null;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {

  //------------------------------------------
  // Active Tab
  //------------------------------------------

  const [activeTab, setActiveTab] =
    useState("intelligence");

  //------------------------------------------
  // Reset tab when product changes
  //------------------------------------------

  // Optional: Uncomment if you want every newly
  // selected product to start on Intelligence.

  /*
  useEffect(() => {
    setActiveTab("intelligence");
  }, [product]);
  */

  //------------------------------------------
  // Tabs
  //------------------------------------------

  const tabs: TabItem[] = useMemo(
    () => [
      {
        id: "intelligence",
        label: "Intelligence",
        icon: "🧠",
      },
      {
        id: "facebook",
        label: "Facebook",
        icon: "📘",
      },
      {
        id: "email",
        label: "Email",
        icon: "📧",
      },
      {
        id: "prompts",
        label: "AI Prompts",
        icon: "🤖",
      },
      {
        id: "strategies",
        label: "Strategies",
        icon: "❤️",
      },
    ],
    []
  );

  //------------------------------------------
  // Empty State
  //------------------------------------------

  if (!product) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-12 shadow-sm">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            Emma Intelligence
          </h2>

          <p className="mt-3 text-slate-500">
            Select a product from the queue to begin.
          </p>

        </div>

      </div>
    );
  }

  //------------------------------------------
  // Active View
  //------------------------------------------

  function renderView() {

    switch (activeTab) {

      case "facebook":
        return (
          <FacebookView
            product={product}
          />
        );

      case "email":
        return (
          <EmailView
            product={product}
          />
        );

      case "prompts":
        return (
          <AIPromptsView
            product={product}
          />
        );

      case "strategies":
        return (
          <StrategiesView
            product={product}
          />
        );

      case "intelligence":

      default:
        return (
          <IntelligenceView
            product={product}
          />
        );

    }

  }

  //------------------------------------------

  return (

    <div className="space-y-6">

      {/* ======================================
          Navigation
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

      </div>

      {/* ======================================
          Active View
      ====================================== */}

      {renderView()}

    </div>

  );

}