"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Vehicle } from "@/types/vehicle";
import { Edit } from "lucide-react";

interface Props {
    vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: Props) {
    const statusColor = {
        Active: "text-green-600 bg-green-100",
        Idle: "text-yellow-600 bg-yellow-100",
        Maintenance: "text-red-600 bg-red-100",
    }[vehicle.status];

    return (
        <Card className="w-[250px]">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span>{vehicle.code}</span>
                    <span
                        className={cn("text-xs px-2 py-1 rounded-full font-medium", statusColor)}
                    >
                        {vehicle.status}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p>
                    <b>Capacity:</b> {vehicle.capacity} tons
                </p>
                <p>
                    <b>Driver:</b> {vehicle.driver || "-"}
                </p>
                <p>
                    <b>Location:</b> {vehicle.location}
                </p>
                {vehicle.fuel && (
                    <div>
                        <b>Fuel:</b>
                        <div className="w-full bg-gray-200 rounded h-2 mt-1">
                            <div
                                className="bg-green-500 h-2 rounded"
                                style={{ width: `${vehicle.fuel}%` }}
                            />
                        </div>
                    </div>
                )}
                {vehicle.etaReturn && (
                    <p>
                        <b>ETA Return:</b> {vehicle.etaReturn}
                    </p>
                )}
                <Button variant="outline" size="sm" className="mt-2 w-full text-[#2663EB]">
                    <Edit className="w-4 h-4" />Edit
                </Button>
            </CardContent>
        </Card>
    );
}
