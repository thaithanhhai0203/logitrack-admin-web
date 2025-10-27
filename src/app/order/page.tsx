"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Upload, Edit, Trash2 } from "lucide-react"
import { OrderMap } from "@/features/order/components/OrderMap"
import { OrderHeader } from "@/features/order/components/OrderHeader"
import { CreateOrderDialog } from "@/features/order/components/CreateOrderDialog"
import { useState } from "react"
import { UpdateOrderDialog } from "@/features/order/components/UpdateOrderDialog"
import { Order } from "@/types/order"
import { DeleteOrderDialog } from "@/features/order/components/DeleteOrderDialog"

const data = [
    {
        id: "ORD-001",
        customer: "Customer A",
        address: "123 Main St",
        location: "Downtown",
        weight: "15.5 kg",
        time: "09:00–17:00",
        status: "Pending",
    },
    {
        id: "ORD-002",
        customer: "Customer B",
        address: "456 Oak Ave",
        location: "Suburbs",
        weight: "8.2 kg",
        time: "10:00–16:00",
        status: "Pending",
    },
    {
        id: "ORD-003",
        customer: "Customer C",
        address: "789 Pine Rd",
        location: "Industrial",
        weight: "22.8 kg",
        time: "08:00–18:00",
        status: "Pending",
    },
]

export default function OrderPage() {
    const [orders, setOrders] = useState(data);
    const handleCreate = (order: any) => {
        console.log("New order:", order);
        // TODO: 
    };

    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const handleEdit = (order: Order) => {
        setSelectedOrder(order);
        setOpenUpdate(true);
    };

    const handleSave = (updatedOrder: Order) => {
        setOrders((prev: any) =>
            prev.map((o: any) => (o.id === updatedOrder.id ? updatedOrder : o))
        );
        setOpenUpdate(false);
    };

    const handleDelete = (order: Order) => {
        setSelectedOrder(order);
        setOpenDelete(true);
    };

    const handleConfirmDelete = () => {
        if (selectedOrder) {
            setOrders((prev) => prev.filter((o) => o.id !== selectedOrder.id));
        }
        setOpenDelete(false);
    };

    return (
        <div className="flex h-[calc(100vh-100px)] gap-5">
            {/* Left: List orders */}
            <div className="flex-1 space-y-4">
                <OrderHeader />
                <div className="flex justify-between items-center">
                    <Tabs defaultValue="pending">
                        <TabsList className="bg-transparent border-b-0 p-0">
                            <TabsTrigger value="pending">Pending (24)</TabsTrigger>
                            <TabsTrigger value="assigned">Assigned (18)</TabsTrigger>
                            <TabsTrigger value="completed">Completed (156)</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Upload className="w-4 h-4 mr-2" /> Upload CSV
                        </Button>
                        <CreateOrderDialog onCreate={handleCreate} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search orders..." className="pl-8" />
                    </div>
                    <select className="border rounded-md px-3 text-sm">
                        <option>All Locations</option>
                        <option>Downtown</option>
                        <option>Suburbs</option>
                    </select>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="p-3 text-left w-4"></th>
                                    <th className="p-3 text-left">Order</th>
                                    <th className="p-3 text-left">Location</th>
                                    <th className="p-3 text-left">Weight</th>
                                    <th className="p-3 text-left">Time</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3 font-medium">{order.id}</td>
                                        <td className="p-3">
                                            <div>{order.address}</div>
                                            <div className="text-gray-500 text-xs">{order.location}</div>
                                        </td>
                                        <td className="p-3">{order.weight}</td>
                                        <td className="p-3">{order.time}</td>
                                        <td className="p-3">
                                            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="p-3 flex gap-2">
                                            <Edit className="w-4 h-4 text-blue-500 cursor-pointer" onClick={() => handleEdit(order)} />
                                            <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" onClick={() => handleDelete(order)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
            {/* Update Order Dialog */}
            <UpdateOrderDialog
                open={openUpdate}
                order={selectedOrder}
                onClose={() => setOpenUpdate(false)}
                onSave={handleSave}
            />

            {/* Delete Order Dialog */}
            <DeleteOrderDialog
                open={openDelete}
                orderName={selectedOrder?.id}
                onClose={() => setOpenDelete(false)}
                onConfirm={handleConfirmDelete}
            />

            {/* Right: Map */}
            <div className="w-[450px]">
                {/* <Card className="p-4 h-full w-full"> */}
                <OrderMap />
                {/* </Card> */}
            </div>
        </div>
    )
}
