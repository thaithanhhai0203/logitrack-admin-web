"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteOrderDialogProps {
    open: boolean;
    orderName?: string;
    onClose: () => void;
    onConfirm: () => void;
}

export function DeleteOrderDialog({ open, orderName, onClose, onConfirm }: DeleteOrderDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-sm bg-white">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-destructive">
                        Xác nhận xóa đơn hàng
                    </DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa <span className="font-medium text-foreground">{orderName}</span> không?
                        Hành động này không thể hoàn tác.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline" onClick={onClose}>
                        Hủy
                    </Button>
                    <Button variant="destructive" onClick={onConfirm} className="bg-white text-red-600 hover:bg-red-50">
                        Xóa
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
