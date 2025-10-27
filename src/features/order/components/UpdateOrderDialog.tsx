"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Order } from "@/types/order";

interface UpdateOrderDialogProps {
    open: boolean;
    order: Order | null;
    onClose: () => void;
    onSave: (order: Order) => void;
}

export function UpdateOrderDialog({ open, order, onClose, onSave }: UpdateOrderDialogProps) {
    const [form, setForm] = useState<Order | null>(null);

    useEffect(() => {
        if (order) setForm(order);
    }, [order]);

    if (!form) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(form);
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-lg bg-white">
                <DialogHeader>
                    <DialogTitle>Update Order</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <Label htmlFor="location" className="mb-1">Location</Label>
                        <Input
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                        />
                    </div>

                    <div>
                        <Label htmlFor="weight" className="mb-1">Weight</Label>
                        <Input
                            value={form.weight}
                            onChange={(e) => setForm({ ...form, weight: e.target.value })}
                        />
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="time" className="mb-1">Time</Label>
                            <Input
                                id="time"
                                placeholder="09:00–17:00"
                                value={form.time}
                                onChange={(e) => setForm({ ...form, time: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="status" className="mb-1">Status</Label>
                            <Select
                                value={form.status}
                                onValueChange={(value) => setForm({ ...form, status: value })}
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

                    <div className="flex justify-end gap-3 pt-3">
                        <Button variant="outline" type="button" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-black text-white">Update</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
