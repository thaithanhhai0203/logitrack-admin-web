import apiClient from "./apiClient";
import { Vehicle } from "@/types/vehicle";

export const vehicleService = {
    async getAll(): Promise<Vehicle[]> {
        const res = await apiClient.get("/vehicles");
        return res.data;
    },
};
