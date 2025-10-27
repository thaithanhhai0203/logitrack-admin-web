"use client";

import { useOptimization } from "../hooks/useOptimization";
import { MapPinIcon } from "lucide-react";

export function ResultPanel() {
    const { selectedOrders, selectedVehicles } = useOptimization();

    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <MapPinIcon className="w-10 h-10 text-muted-foreground mb-3" />
            <h3 className="font-semibold text-lg">Ready to Optimize</h3>
            <p className="text-sm text-muted-foreground max-w-xs mt-1">
                Select orders, vehicles, and configure parameters to start optimization
            </p>
            <div className="mt-3 text-sm text-muted-foreground">
                ✓ {selectedOrders.length} orders selected · ✓ {selectedVehicles.length} vehicles selected
            </div>
        </div>
    );
}
