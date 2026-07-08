"use client";

import { ProcessedProduct } from "../../engines/processProducts";

interface AIPromptsViewProps {
  product: ProcessedProduct;
}

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
}

function PromptCard({
  title,
  description,
  prompt,
}: PromptCardProps) {
  function copyPrompt() {
    navigator.clipboard.writeText(prompt);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-4">

        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

      </div>

      <div className="p-6">

        <div className="rounded-lg bg-slate-50 p-4">

          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
{prompt || "No prompt available."}
          </pre>

        </div>

        <button
          type="button"
          onClick={copyPrompt}
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Copy Prompt
        </button>

      </div>

    </div>
  );
}

export default function AIPromptsView({
  product,
}: AIPromptsViewProps) {

  const campaign = product.campaign;

  return (
    <div className="space-y-6">

      {/* ======================================
          Header
      ====================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          AI Creative Prompts
        </h2>

        <p className="mt-2 text-slate-500">
          Emma-generated prompts for image and video creation tools.
        </p>

      </div>

      {/* ======================================
          Image Prompt
      ====================================== */}

      <PromptCard
        title="Image Prompt"
        description="Use this prompt with ChatGPT Images, Midjourney, Flux, Ideogram, or other image generators."
        prompt={campaign.imagePrompt}
      />

      {/* ======================================
          Video Prompt
      ====================================== */}

      <PromptCard
        title="Video Prompt"
        description="Use this prompt with Sora, Runway, Pika, Veo, Kling, or other AI video generation tools."
        prompt={campaign.videoPrompt}
      />

      {/* ======================================
          Future Features
      ====================================== */}

      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">

        <h3 className="font-semibold text-slate-700">
          Coming Soon
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-slate-600">

          <li>🎙 AI Voiceover Prompts</li>

          <li>🎬 Scene-by-Scene Storyboards</li>

          <li>📸 Creative Shot Lists</li>

          <li>🎨 Brand Style Prompts</li>

          <li>📱 UGC Creator Scripts</li>

        </ul>

      </div>

    </div>
  );
}