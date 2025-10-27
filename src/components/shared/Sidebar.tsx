"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/cn"
import {
    LayoutDashboard,
    Package,
    Map,
    Truck,
    Settings,
    LogOut,
} from "lucide-react"

const menu = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Orders", icon: Package, href: "/order" },
    { label: "Routes", icon: Map, href: "/route" },
    { label: "Vehicles", icon: Truck, href: "/vehicle" },
    { label: "Setting", icon: Settings, href: "/setting" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
            <div className="flex items-center justify-center h-16 border-b">
                <span className="text-xl font-semibold text-blue-600">LogiTrack</span>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menu.map(({ label, icon: Icon, href }) => {
                    const active = pathname.startsWith(href)
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                                active
                                    ? "bg-blue-50 text-blue-600 font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            <Icon size={18} />
                            {label}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t">
                <button className="flex items-center gap-2 text-gray-500 text-sm hover:text-red-600">
                    <LogOut size={18} />
                    Đăng xuất
                </button>
            </div>
        </aside>
    )
}
