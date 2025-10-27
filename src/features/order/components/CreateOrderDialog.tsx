"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus } from "lucide-react";

export function CreateOrderDialog({ onCreate }: { onCreate?: (order: any) => void }) {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        orderCode: "",
        location: "",
        customer: "",
        weight: "",
        time: "",
        status: "Pending",
    });

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onCreate) onCreate(form);
        setOpen(false);
        setForm({ orderCode: "", location: "", customer: "", weight: "", time: "", status: "Pending" });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-gray-800">
                    <Plus className="w-4 h-4" /> Add Order
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px] bg-white">
                <DialogHeader>
                    <DialogTitle>Create New Order</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="orderCode" className="mb-1">Order Code</Label>
                            <Input
                                id="orderCode"
                                placeholder="ORD-004"
                                value={form.orderCode}
                                onChange={(e) => handleChange("orderCode", e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="weight" className="mb-1">Weight (kg)</Label>
                            <Input
                                id="weight"
                                type="number"
                                placeholder="15.5"
                                value={form.weight}
                                onChange={(e) => handleChange("weight", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="location" className="mb-1">Location</Label>
                        <Input
                            id="location"
                            placeholder="123 Main St, Downtown"
                            value={form.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="Customer" className="mb-1">Customer</Label>
                        <Input
                            id="location"
                            placeholder="Mr. Simple"
                            value={form.location}
                            onChange={(e) => handleChange("customer", e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="time" className="mb-1">Time</Label>
                            <Input
                                id="time"
                                placeholder="09:00–17:00"
                                value={form.time}
                                onChange={(e) => handleChange("time", e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="status" className="mb-1">Status</Label>
                            <Select
                                value={form.status}
                                onValueChange={(value) => handleChange("status", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="Pending">Pending</SelectItem>
                                    <SelectItem value="Assigned">Assigned</SelectItem>
                                    <SelectItem value="Completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                            Create Order
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
