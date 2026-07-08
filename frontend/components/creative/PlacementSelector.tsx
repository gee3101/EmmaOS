"use client";

export interface PlacementSelection {
  platform: string;
  placement: string;
}

interface PlacementSelectorProps {
  value: PlacementSelection;
  onChange: (value: PlacementSelection) => void;
}

const placements: PlacementSelection[] = [
  {
    platform: "Facebook",
    placement: "Feed",
  },
  {
    platform: "Facebook",
    placement: "Story",
  },
  {
    platform: "Facebook",
    placement: "Reel",
  },
  {
    platform: "Facebook",
    placement: "Carousel",
  },
  {
    platform: "Instagram",
    placement: "Feed",
  },
  {
    platform: "Instagram",
    placement: "Story",
  },
  {
    platform: "Instagram",
    placement: "Reel",
  },
  {
    platform: "TikTok",
    placement: "Video",
  },
];

export default function PlacementSelector({
  value,
  onChange,
}: PlacementSelectorProps) {

  return (

    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Placement
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Select where Emma should design this creative.
        </p>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

        {placements.map((placement) => {

          const active =
            placement.platform === value.platform &&
            placement.placement === value.placement;

          return (

            <button
              key={`${placement.platform}-${placement.placement}`}
              type="button"
              onClick={() => onChange(placement)}
              className={`rounded-xl border p-4 transition-all duration-200 text-left ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-md"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >

              <div className="text-sm font-semibold text-slate-900">
                {placement.platform}
              </div>

              <div className="mt-1 text-slate-500">
                {placement.placement}
              </div>

            </button>

          );

        })}

      </div>

    </div>

  );

}