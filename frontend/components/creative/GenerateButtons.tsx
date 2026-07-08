"use client";

import { useState } from "react";

import { CreativeBrief } from "../../types/CreativeBrief";
import { CreativeAsset } from "../../types/CreativeAsset";

import { generationService } from "../../services/GenerationService";

interface GenerateButtonsProps {
  brief: CreativeBrief;

  onAssetGenerated?: (asset: CreativeAsset) => void;

  onCreativePackGenerated?: (
    assets: CreativeAsset[]
  ) => void;
}

export default function GenerateButtons({
  brief,
  onAssetGenerated,
  onCreativePackGenerated,
}: GenerateButtonsProps) {

  //------------------------------------------
  // State
  //------------------------------------------

  const [generatingImage, setGeneratingImage] =
    useState(false);

  const [generatingVideo, setGeneratingVideo] =
    useState(false);

  const [generatingPack, setGeneratingPack] =
    useState(false);

  //------------------------------------------
  // Generate Image
  //------------------------------------------

  async function handleGenerateImage() {

    try {

      setGeneratingImage(true);

      const asset =
        await generationService.generateImage(
          brief
        );

      onAssetGenerated?.(asset);

    } catch (err) {

      console.error(err);

      alert("Unable to generate image.");

    } finally {

      setGeneratingImage(false);

    }

  }

  //------------------------------------------
  // Generate Video
  //------------------------------------------

  async function handleGenerateVideo() {

    try {

      setGeneratingVideo(true);

      const asset =
        await generationService.generateVideo(
          brief
        );

      onAssetGenerated?.(asset);

    } catch (err) {

      console.error(err);

      alert("Unable to generate video.");

    } finally {

      setGeneratingVideo(false);

    }

  }

  //------------------------------------------
  // Generate Creative Pack
  //------------------------------------------

  async function handleGeneratePack() {

    try {

      setGeneratingPack(true);

      const assets =
        await generationService.generateCreativePack(
          brief
        );

      onCreativePackGenerated?.(assets);

    } catch (err) {

      console.error(err);

      alert("Unable to generate creative pack.");

    } finally {

      setGeneratingPack(false);

    }

  }

  //------------------------------------------
  // Copy Image Prompt
  //------------------------------------------

  async function copyImagePrompt() {

    await navigator.clipboard.writeText(
      brief.imagePrompt
    );

    alert("Image prompt copied.");
  }

  //------------------------------------------
  // Copy Video Prompt
  //------------------------------------------

  async function copyVideoPrompt() {

    await navigator.clipboard.writeText(
      brief.videoPrompt
    );

    alert("Video prompt copied.");
  }

  //------------------------------------------

  return (

    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Generate Creative
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Generate assets using Emma's creative brief.
        </p>

      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">

        <button
          onClick={handleGenerateImage}
          disabled={generatingImage}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {generatingImage
            ? "Generating Image..."
            : "🖼 Generate Image"}
        </button>

        <button
          onClick={handleGenerateVideo}
          disabled={generatingVideo}
          className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-700 disabled:opacity-50"
        >
          {generatingVideo
            ? "Generating Video..."
            : "🎬 Generate Video"}
        </button>

        <button
          onClick={handleGeneratePack}
          disabled={generatingPack}
          className="rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {generatingPack
            ? "Generating Creative Pack..."
            : "🚀 Generate Creative Pack"}
        </button>

        <button
          onClick={copyImagePrompt}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 hover:bg-slate-50"
        >
          📋 Copy Image Prompt
        </button>

        <button
          onClick={copyVideoPrompt}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 hover:bg-slate-50 md:col-span-2"
        >
          📋 Copy Video Prompt
        </button>

      </div>

    </div>

  );

}