"use client"
import React, { useEffect, useState } from "react"
import { LineChart, Line, ResponsiveContainer } from "recharts"

type Point = { month: string; planned: number; actual: number }

function makeRandomData(): Point[] {
    return Array.from({ length: 12 }).map((_, i) => ({
        month: `T${i + 1}`,
        planned: 3800 + Math.random() * 800,
        actual: 3600 + Math.random() * 900,
    }))
}

export function DistanceLineChart() {
    // deterministic initial data so SSR output is stable
    const [data, setData] = useState<Point[]>(
        () =>
            Array.from({ length: 12 }).map((_, i) => ({
                month: `T${i + 1}`,
                planned: 3800,
                actual: 3600,
            })),
    )

    useEffect(() => {
        // replace with randomized data only on client
        setData(makeRandomData())
    }, [])

    return (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="text-sm font-medium mb-4">Planned vs Actual Distance</div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="planned" stroke="#60A5FA" strokeWidth={2} />
                        <Line type="monotone" dataKey="actual" stroke="#34D399" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}