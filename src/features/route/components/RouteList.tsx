"use client";

import { Route } from "@/types/route";
import { RouteCard } from "./RouteCard";
import { RouteFilter } from "./RouteFilter";

export const routes: Route[] = [
    {
        id: "1",
        code: "Route RT-001",
        createdAt: "2 hours ago",
        district: "District 1-3",
        stops: 5,
        distance: 32.5,
        duration: "2h 15m",
        weight: 4.2,
        vehicle: {
            id: "VH-001",
            plate: "(29A-12345)"
        },
        status: "draft",
    },
    {
        id: "2",
        code: "Route RT-002",
        createdAt: "4 hours ago",
        district: "District 2-4",
        stops: 7,
        distance: 28.1,
        duration: "3h 05m",
        weight: 6.8,
        vehicle: {
            id: "VH-002",
            plate: "(29B-67890)"
        },
        status: "completed",
    },
]


export function RouteList() {
    return (
        <div className="space-y-4">
            <RouteFilter />
            <div className="mt-6 space-y-4">
                {routes?.map((r) => <RouteCard key={r.id} route={r} />)}
            </div>
        </div>
    );
}
