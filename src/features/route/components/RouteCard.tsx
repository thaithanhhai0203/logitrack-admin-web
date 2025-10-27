"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Route } from "@/types/route";
import { useUpdateRoute } from "@/features/route/hooks/useUpdateRoutes";
import { Check, Edit, TruckIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Props {
    route: Route;
}

export function RouteCard({ route }: Props) {
    const { mutate: updateStatus } = useUpdateRoute();
    const statusColor = {
        completed: "text-green-600 bg-green-100",
        active: "text-yellow-600 bg-yellow-100",
        draft: "text-red-600 bg-red-100",
    }[route.status];

    return (
        <Card className="shadow-sm border rounded-2xl">
            <CardContent className="p-5 flex justify-between">
                <div>
                    <h3 className="font-semibold text-lg">{route.code}</h3>
                    <p className="text-sm text-muted-foreground">
                        Created {route.createdAt} · {route.district}
                    </p>

                    <div className="flex gap-6 mt-3 text-sm">
                        <div><span className="font-medium">{route.stops}</span> Stops</div>
                        <div><span className="font-medium">{route.distance}</span> km</div>
                        <div><span className="font-medium">{route.duration}</span> Duration</div>
                        <div><span className="font-medium">{route.weight}</span> tons</div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <TruckIcon size={18} className="text-muted-foreground" />
                        <span className="text-sm">
                            {route.vehicle ? route.vehicle.plate : "Not assigned"}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                    <Badge variant="outline" className="capitalize">
                        <span
                            className={cn("text-xs px-2 py-1 rounded-full font-medium", statusColor)}
                        >
                            {route.status}
                        </span>
                    </Badge>

                    <div className="flex gap-2 mt-auto">
                        <Button variant="outline" size="sm" className="bg-primary text-[#2663EB]"> <Edit className="w-4 h-4" />Reorder</Button>
                        <Button
                            size="sm"
                            onClick={() => updateStatus({ id: route.id, status: "active" })}
                            className="bg-[#2663EB] text-white"
                        >
                            <Check className="w-4 h-4" />Confirm
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
