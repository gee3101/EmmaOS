"use client";

interface StatusCardsProps {

  imported: number;

  processed: number;

  pending: number;

}

export default function StatusCards({

  imported,

  processed,

  pending,

}: StatusCardsProps) {

  const cards = [

    {
      title: "Imported",
      value: imported,
      color: "text-slate-900",
    },

    {
      title: "Processed",
      value: processed,
      color: "text-green-600",
    },

    {
      title: "Pending",
      value: pending,
      color: "text-amber-600",
    },

  ];

  return (

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >

          <p className="text-sm font-medium text-slate-500">
            {card.title}
          </p>

          <p className={`mt-2 text-3xl font-bold ${card.color}`}>
            {card.value}
          </p>

        </div>

      ))}

    </div>

  );

}