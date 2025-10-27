"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation";

export function RouteHeader() {
    const router = useRouter();
    const handleOnClick = () => {
        router.push('optimize');     
    }
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold">Routes Management</h1>
                <p className="text-sm text-muted-foreground">
                    Review, manage and track delivery routes
                </p>
            </div>

            <Button onClick={handleOnClick} className="bg-black text-white"> <Plus className="w-4 h-4" />Create Route</Button>
        </div>
    )
}
