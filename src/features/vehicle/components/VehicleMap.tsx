"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function VehicleMap() {
    return (
        <Card className="flex flex-col items-center justify-center h-full text-gray-500 text-sm">
            <MapPin className="mb-2 h-6 w-6" />
            <p>Real-time vehicle tracking</p>
            <p>Depot and active vehicles displayed</p>
        </Card>
    );
}
