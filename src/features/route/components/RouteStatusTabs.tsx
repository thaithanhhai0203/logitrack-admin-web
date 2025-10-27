"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUIStore } from "@/store/useUIStore";

const statuses = [
  { key: "draft", label: "Draft" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export function RouteStatusTabs() {
  const { routeStatus, setRouteStatus } = useUIStore();

  return (
    <Tabs value={routeStatus} onValueChange={setRouteStatus}>
      <TabsList>
        {statuses.map((s) => (
          <TabsTrigger key={s.key} value={s.key}>
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
