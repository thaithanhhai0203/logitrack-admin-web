"use client";

import { useState } from "react";
import { VehicleList } from "@/features/vehicle/components/VehicleList";
import { VehicleStatusFilter } from "@/features/vehicle/components/VehicleStatusFilter";
import { VehicleMap } from "@/features/vehicle/components/VehicleMap";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Vehicle } from "@/types/vehicle";
import { VehicleHeader } from "@/features/vehicle/components/VehicleHeader";

const vehicles: Vehicle[] = [
    {
        id: "1",
        code: "1",
        status: 'Active',
        capacity: 10,
        driver: "A",
        location: "Location A",
        fuel: 1,
        etaReturn: "eta A",
    },
    {
        id: "2",
        code: "2",
        status: 'Maintenance',
        capacity: 5,
        driver: "B",
        location: "Location A",
        fuel: 1,
        etaReturn: "eta A",
    },
    {
        id: "3",
        code: "3",
        status: 'Idle',
        capacity: 5,
        driver: "B",
        location: "Location A",
        fuel: 1,
        etaReturn: "eta A",
    },


]
export default function VehiclePage() {
    // const { data: vehicles = [], isLoading } = useVehicles();
    const [status, setStatus] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = vehicles.filter((v) => {
        const matchStatus = status === "All" || v.status === status;
        const matchSearch = v.code.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    return (
        <div className="flex h-full gap-4">
            <div className="flex-1">
                <VehicleHeader />

                <div className="flex items-center gap-2 mb-4 mt-4">
                    <Input
                        placeholder="Search vehicles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-100"
                    />
                    <VehicleStatusFilter status={status} onChange={setStatus} />
                </div>

                <VehicleList vehicles={filtered} />
            </div>

            <div className="w-[350px]">
                <Card className="p-4 h-full">
                    <h2 className="font-semibold mb-4">Vehicle Tracking</h2>
                    <VehicleMap />
                </Card>
            </div>
        </div>
    );
}
