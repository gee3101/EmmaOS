"use client";

interface TabButtonProps {
  label: string;
  icon?: string;
  active: boolean;
  onClick: () => void;
}

export default function TabButton({
  label,
  icon,
  active,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        rounded-lg
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          active
            ? "bg-blue-600 text-white shadow-md"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }
      `}
    >
      {icon && (
        <span className="text-base">
          {icon}
        </span>
      )}

      <span>{label}</span>
    </button>
  );
}