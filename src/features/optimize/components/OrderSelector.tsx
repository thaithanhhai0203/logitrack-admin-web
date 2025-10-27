"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useOptimization } from "../hooks/useOptimization";
import { Order } from "@/types/optimization";
import { useMemo, useState } from "react";

const mockOrders: Order[] = [
    { id: "1", code: "ORD-001", address: "123 Main St", district: "District 1", weight: 2.5 },
    { id: "2", code: "ORD-002", address: "456 Oak Ave", district: "District 2", weight: 1.8 },
    { id: "3", code: "ORD-003", address: "789 Pine St", district: "District 3", weight: 3.2 },
    { id: "4", code: "ORD-004", address: "111 Elm St", district: "District 4", weight: 2.0 },
    { id: "5", code: "ORD-005", address: "222 Birch St", district: "District 5", weight: 1.2 },
];

export function OrderSelector() {
    const { selectedOrders, toggleOrder } = useOptimization();
    const totalWeight = selectedOrders.reduce((sum, o) => sum + o.weight, 0);
    const [query, setQuery] = useState("");
    const filteredOrders = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return mockOrders;
        return mockOrders.filter((o) =>
            // search across any field in the order
            [o.id, o.code, o.address, o.district, String(o.weight)]
                .some((v) => v.toLowerCase().includes(q))
        );
    }, [query]);

    // threshold để bật scroll khi item vượt quá 4
    const SCROLL_THRESHOLD = 4;
    const listClass = filteredOrders.length > SCROLL_THRESHOLD
        ? "space-y-3 max-h-64 overflow-y-auto pr-2"
        : "space-y-3";

    return (
        <div>
            <h1 className="font-semibold mb-2">1. Select the order set to optimize</h1>
            <p className="text-sm text-muted-foreground mb-2">
                {mockOrders.length} pending orders
            </p>

            <Input
                placeholder="Search orders by code, address, district or weight..."
                className="mb-3"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className={listClass}>
                {filteredOrders.map((order) => {
                    const checked = selectedOrders.some((o) => o.id === order.id);
                    return (
                        <div
                            key={order.id}
                            className="flex justify-between items-center border rounded-lg p-3"
                        >
                            <div className="flex items-start gap-2">
                                <Checkbox
                                    checked={checked}
                                    onCheckedChange={() => toggleOrder(order)}
                                />
                                <div>
                                    <p className="font-medium text-sm">#{order.code}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {order.address}, {order.district}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm font-medium">{order.weight} t</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-3 text-sm text-blue-600 font-medium">
                Selected: {selectedOrders.length} orders · Total weight: {totalWeight} t
            </div>
        </div>
    );
}