import { StatCard } from "@/components/shared/StatCard"
import { OrderStatusPie } from "@/components/charts/OrderStatusPie"
import { DistanceLineChart } from "@/components/charts/DistanceLineChart"
import { DeliveryHeatmap } from "@/components/charts/DeliveryHeatmap"

export default function DashboardPage() {
    const kpis = [
        { title: "Total Orders", value: "2,847", change: "+12.5%" },
        { title: "Total Distance", value: "45,832 km", change: "+8.2%" },
        { title: "Active Vehicles", value: "156", change: "—" },
        { title: "Optimization Rate", value: "87.3%", change: "+5.1%" },
    ]

    return (
        <div className="space-y-5">
            <div className="grid grid-cols-4 gap-4">
                {kpis.map((k) => (
                    <StatCard key={k.title} title={k.title} value={k.value} change={k.change} />
                ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
                <StatCard title="Fuel Savings" value="23.7%" change="Compared to traditional routes" accent="green" />
                <StatCard title="Utilization Rate" value="91.2%" change="Truck capacity" accent="indigo" />
                <StatCard title="Average Cost/km" value="12,500đ" change="Includes fuel & maintenance" accent="rose" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <OrderStatusPie />
                <DistanceLineChart />
            </div>

            <DeliveryHeatmap />
            <div className="text-xs text-gray-400">Last updated: {new Date().toLocaleString()}</div>
        </div>
    )
}
