import apiClient from "./apiClient";
import { LoginDto, LoginResponse } from "@/types/auth";

const authService = {
    login: async (payload: LoginDto): Promise<LoginResponse> => {
        const { data } = await apiClient.post("/auth/login", payload);
        return data;
    },
};

export default authService;
