export type RouteStatus = "draft" | "active" | "completed";

export interface Route {
    id: string;
    code: string; // RT-001
    createdAt: string;
    district: string;
    stops: number;
    distance: number;
    duration: string;
    weight: number;
    vehicle?: {
        id: string;
        plate: string;
    };
    status: RouteStatus;
}
