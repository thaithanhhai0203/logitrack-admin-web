import { create } from "zustand";

interface UIState {
    routeStatus: string;
    setRouteStatus: (v: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
    routeStatus: "draft",
    setRouteStatus: (v) => set({ routeStatus: v }),
}));
