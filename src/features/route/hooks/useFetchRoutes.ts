import { useQuery } from "@tanstack/react-query";
import { routeService } from "@/services/route.service";

export function useFetchRoutes(filters?: Record<string, any>) {
    return useQuery({
        queryKey: ["routes", filters],
        queryFn: () => routeService.getAll(filters),
    });
}
