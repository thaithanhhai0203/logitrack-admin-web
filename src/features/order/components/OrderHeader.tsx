"use client"

export function OrderHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold">Orders Management</h1>
                <p className="text-sm text-muted-foreground">
                    Manage delivery orders and track their locations
                </p>
            </div>
        </div>
    )
}
