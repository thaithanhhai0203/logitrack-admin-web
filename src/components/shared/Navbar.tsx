"use client"

import { Search, Bell, Sun, Moon, Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [dark, setDark] = useState(false)

    return (
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <div className="relative w-80 md:w-120">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-8 pr-3 py-2 text-sm border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5 text-gray-500" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDark(!dark)}
                >
                    {dark ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                        <Moon className="h-5 w-5 text-gray-600" />
                    )}
                </Button>

                <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=Admin"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border"
                />
            </div>
        </header>
    )
}