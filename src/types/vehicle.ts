export interface Vehicle {
    id: string;
    code: string;
    status: 'Active' | 'Idle' | 'Maintenance';
    capacity: number;
    driver?: string;
    location: string;
    fuel?: number;
    etaReturn?: string;
}