"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useOptimization } from "../hooks/useOptimization";
import { Vehicle } from "@/types/optimization";
import { Input } from "@/components/ui";
import { useMemo, useState } from "react";

const mockVehicles: Vehicle[] = [
    { id: "1", plate: "29A-12345", driver: "John Doe", capacity: 5, status: "active" },
    { id: "2", plate: "29B-67890", driver: "Jane Smith", capacity: 3.5, status: "active" },
    { id: "3", plate: "29C-13579", driver: "Alice Johnson", capacity: 4, status: "active" },
    { id: "4", plate: "29D-24680", driver: "Bob Brown", capacity: 2.5, status: "inactive" },
    { id: "5", plate: "29E-86420", driver: "Charlie Davis", capacity: 6, status: "active" },
];

export function VehicleSelector() {
    const { selectedVehicles, toggleVehicle } = useOptimization();
    const [query, setQuery] = useState("");
    const filteredVehicles = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return mockVehicles;
        return mockVehicles.filter((o) =>
            // search across any field in the order
            [o.id, o.plate, o.driver, String(o.capacity), o.status]
                .some((v) => v.toLowerCase().includes(q))
        );
    }, [query]);

    // threshold để bật scroll khi item vượt quá 4
    const SCROLL_THRESHOLD = 4;
    const listClass = filteredVehicles.length > SCROLL_THRESHOLD
        ? "space-y-3 max-h-64 overflow-y-auto pr-2"
        : "space-y-3";


    return (
        <div className="mt-6">
            <h1 className="font-semibold mb-2">2. Select the available vehicle fleet</h1>
            <p className="text-sm text-muted-foreground mb-2">{mockVehicles.length} available</p>

            <Input
                placeholder="Search orders by code, address, district or weight..."
                className="mb-3"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />


            <div className={listClass}>
                {filteredVehicles.map((v) => {
                    const checked = selectedVehicles.some((s) => s.id === v.id);
                    return (
                        <div
                            key={v.id}
                            className="flex justify-between items-center border rounded-lg p-3"
                        >
                            <div className="flex items-start gap-2">
                                <Checkbox checked={checked} onCheckedChange={() => toggleVehicle(v)} />
                                <div>
                                    <p className="font-medium text-sm">{v.plate}</p>
                                    <p className="text-xs text-muted-foreground">{v.driver}</p>
                                </div>
                            </div>
                            <p className="text-sm font-medium">{v.capacity} t</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
