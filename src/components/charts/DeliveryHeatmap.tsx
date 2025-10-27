"use client"
import React, { useEffect, useState } from "react"

export function DeliveryHeatmap() {
    // start null to render deterministic server HTML (skeleton)
    const [heatmap, setHeatmap] = useState<number[][] | null>(null)

    useEffect(() => {
        // generate random heatmap only on client after mount
        const hm = Array.from({ length: 4 }).map(() =>
            Array.from({ length: 10 }).map(() => Math.floor(Math.random() * 400)),
        )
        setHeatmap(hm)
    }, [])

    // deterministic skeleton matching final DOM shape/structure
    if (!heatmap) {
        return (
            <div className="bg-white border rounded-lg p-6 shadow-sm h-48">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Heatmap of the most delivery areas</div>
                    <div className="text-xs text-gray-400">Number of orders / week</div>
                </div>
                <div className="grid grid-cols-10 gap-2">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="h-12 rounded bg-gray-100" />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium">Heatmap of the most delivery areas</div>
                <div className="text-xs text-gray-400">Number of orders / week</div>
            </div>
            <div className="grid grid-cols-10 gap-2">
                {heatmap.flat().map((value, i) => (
                    <div
                        key={i}
                        className="h-12 rounded flex items-center justify-center text-xs font-medium"
                        style={{ background: `rgba(59,130,246, ${0.15 + (value / 400) * 0.75})` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    )
}