interface StatCardProps {
    title: string
    value: string
    change: string
    accent?: "green" | "indigo" | "rose"
}

export function StatCard({ title, value, change, accent }: StatCardProps) {
    const color = accent
        ? {
            green: "text-green-600",
            indigo: "text-indigo-600",
            rose: "text-rose-600",
        }[accent]
        : "text-gray-800"

    return (
        <div className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-500">{title}</div>
            <div className={`mt-2 text-2xl font-semibold ${color}`}>{value}</div>
            <div className="text-xs text-gray-400 mt-1">{change}</div>
        </div>
    )
}
