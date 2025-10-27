import { create } from "zustand";
import { OptimizationState, Order, Vehicle } from "@/types/optimization";

interface OptimizationStore extends OptimizationState {
    setStep: (s: number) => void;
    toggleOrder: (order: Order) => void;
    toggleVehicle: (vehicle: Vehicle) => void;
}

export const useOptimization = create<OptimizationStore>((set, get) => ({
    step: 1,
    selectedOrders: [],
    selectedVehicles: [],

    setStep: (s) => set({ step: s }),

    toggleOrder: (order) => {
        const exists = get().selectedOrders.some((o) => o.id === order.id);
        set({
            selectedOrders: exists
                ? get().selectedOrders.filter((o) => o.id !== order.id)
                : [...get().selectedOrders, order],
        });
    },

    toggleVehicle: (vehicle) => {
        const exists = get().selectedVehicles.some((v) => v.id === vehicle.id);
        set({
            selectedVehicles: exists
                ? get().selectedVehicles.filter((v) => v.id !== vehicle.id)
                : [...get().selectedVehicles, vehicle],
        });
    },
}));
