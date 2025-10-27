"use client";

import { Button } from "@/components/ui/button";
import { ConfigPanel } from "@/features/optimize/components/ConfigPanel";
import { OrderSelector } from "@/features/optimize/components/OrderSelector";
import { ResultPanel } from "@/features/optimize/components/ResultPanel";
import { VehicleSelector } from "@/features/optimize/components/VehicleSelector";

export default function OptimizePage() {

    return (
        <div className="grid grid-cols-2 gap-6">
            <div>
                <h1 className="text-2xl font-semibold mb-1">Create Route Optimization</h1>
                <p className="text-sm text-muted-foreground mb-6">
                    Configure and run route optimization for delivery planning
                </p>

                <div className="space-y-6">
                    <OrderSelector />
                    <VehicleSelector />
                    <ConfigPanel />

                    <div className="pt-4 border-t mt-4 flex justify-end">
                        <Button className="bg-black text-white">Optimize</Button>
                    </div>
                </div>
            </div>

            <div className="border-l pl-6">
                <h3 className="font-semibold mb-4">Optimization Results</h3>
                <ResultPanel />
            </div>
        </div>
    );
}
