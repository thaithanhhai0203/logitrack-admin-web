"use client"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
    { name: "Completed", value: 61.4 },
    { name: "In Delivery", value: 23.8 },
    { name: "Pending", value: 10.9 },
    { name: "Cancelled", value: 3.9 },
]

const COLORS = ["#34D399", "#60A5FA", "#FBBF24", "#F87171"]

export function OrderStatusPie() {
    return (
        <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="text-sm font-medium mb-4">Order Status Distribution</div>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90}>
                            {data.map((_, i) => (
                                <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
