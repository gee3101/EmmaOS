"use client";

import { useEffect, useMemo, useState } from "react";

import { CreativeBrief } from "../../types/CreativeBrief";

import { CreativeAsset } from "../../types/CreativeAsset";

import PlacementSelector, {
  PlacementSelection,
} from "./PlacementSelector";

import ProductImageUploader from "./ProductImageUploader";
import CreativeBriefPanel from "./CreativeBriefPanel";
import GenerateButtons from "./GenerateButtons";
import CreativeWorkspace from "./CreativeWorkspace";
import AssetGallery from "./AssetGallery";

interface CreativeStudioProps {
  brief: CreativeBrief;
}

export default function CreativeStudio({
  brief,
}: CreativeStudioProps) {

  //------------------------------------------
  // Placement
  //------------------------------------------

  const [placement, setPlacement] =
    useState<PlacementSelection>({
      platform: brief.platform,
      placement: brief.placement,
    });

  //------------------------------------------
  // Product Image
  //------------------------------------------

  const [productImage, setProductImage] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  //------------------------------------------
  // Generated Assets
  //------------------------------------------

  const [assets, setAssets] =
    useState<CreativeAsset[]>([]);

  const [selectedAsset, setSelectedAsset] =
    useState<CreativeAsset | null>(null);

  //------------------------------------------
  // Update Preview
  //------------------------------------------

  useEffect(() => {

    if (!productImage) {

      setPreviewUrl(null);

      return;

    }

    const objectUrl =
      URL.createObjectURL(productImage);

    setPreviewUrl(objectUrl);

    return () => {

      URL.revokeObjectURL(objectUrl);

    };

  }, [productImage]);

  //------------------------------------------
  // Active Creative Brief
  //------------------------------------------

  const activeBrief =
    useMemo<CreativeBrief>(() => {

      return {

        ...brief,

        platform:
          placement.platform,

        placement:
          placement.placement,

        productImage,

      };

    }, [

      brief,

      placement,

      productImage,

    ]);

  //------------------------------------------
  // Asset Handlers
  //------------------------------------------

  function handleAssetGenerated(
    asset: CreativeAsset
  ) {

    setAssets(previous => [

      asset,

      ...previous,

    ]);

    setSelectedAsset(asset);

  }

  function handleCreativePackGenerated(
    generatedAssets: CreativeAsset[]
  ) {

    setAssets(previous => [

      ...generatedAssets,

      ...previous,

    ]);

    if (generatedAssets.length > 0) {

      setSelectedAsset(
        generatedAssets[0]
      );

    }

  }

  //------------------------------------------

  return (

    <div className="space-y-6">

      {/* ======================================
          Product Image
      ====================================== */}

      <ProductImageUploader
        image={productImage}
        previewUrl={previewUrl}
        onChange={setProductImage}
      />

      {/* ======================================
          Placement
      ====================================== */}

      <PlacementSelector
        value={placement}
        onChange={setPlacement}
      />

      {/* ======================================
          Creative Brief
      ====================================== */}

      <CreativeBriefPanel
        brief={activeBrief}
      />

      {/* ======================================
          Generate
      ====================================== */}

      <GenerateButtons
        brief={activeBrief}
        onAssetGenerated={
          handleAssetGenerated
        }
        onCreativePackGenerated={
          handleCreativePackGenerated
        }
      />

      {/* ======================================
          Workspace
      ====================================== */}

      <CreativeWorkspace
        assets={assets}
      />

      {/* ======================================
          Asset Library
      ====================================== */}

      <AssetGallery
        assets={assets}
        selectedAsset={selectedAsset}
        onSelectAsset={
          setSelectedAsset
        }
      />

    </div>

  );

}