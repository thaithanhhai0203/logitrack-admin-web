export interface Order {
    id: string;
    code: string;
    address: string;
    district: string;
    weight: number; // tons
}

export interface Vehicle {
    id: string;
    plate: string;
    driver: string;
    capacity: number;
    status: "active" | "inactive";
}

export interface OptimizationState {
    step: number;
    selectedOrders: Order[];
    selectedVehicles: Vehicle[];
}
