"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function VehicleHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold">Vehicle Management</h1>
                <p className="text-sm text-muted-foreground">
                    Manage delivery vehicles and track their locations
                </p>
            </div>

            <Button className="bg-black text-white"> <Plus className="w-4 h-4" />Add Vehicle</Button>
        </div>
    )
}
