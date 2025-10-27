"use client";

import { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "./VehicleCard";

interface Props {
    vehicles: Vehicle[];
}

export function VehicleList({ vehicles }: Props) {
    return (
        <div className="flex flex-wrap gap-4">
            {vehicles.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
            ))}
        </div>
    );
}
