import { useMutation, useQueryClient } from "@tanstack/react-query";
import { routeService } from "@/services/route.service";

export function useUpdateRoute() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, status }: { id: string; status: string }) =>
            routeService.updateStatus(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["routes"] });
        },
    });
}
