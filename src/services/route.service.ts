import apiClient from "./apiClient";
import { Route } from "@/types/route";

export const routeService = {
    async getAll(params?: Record<string, any>) {
        const { data } = await apiClient.get<Route[]>("/routes", { params });
        return data;
    },
    async updateStatus(id: string, status: string) {
        const { data } = await apiClient.patch(`/routes/${id}`, { status });
        return data;
    },
};
