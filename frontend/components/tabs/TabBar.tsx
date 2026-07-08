"use client";

import TabButton from "./TabButton";

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
}

interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function TabBar({
  tabs,
  activeTab,
  onChange,
}: TabBarProps) {
  return (
    <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          icon={tab.icon}
          active={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  );
}