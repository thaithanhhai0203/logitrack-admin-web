import { useQuery } from "@tanstack/react-query";
import { vehicleService } from "@/services/vehicle.service";

export const useVehicles = () => {
    return useQuery({
        queryKey: ["vehicles"],
        queryFn: vehicleService.getAll,
    });
};
