export interface Order {
    id: string,
    customer: string,
    address: string,
    location: string,
    weight: string,
    time: string,
    status: string,
}

export interface UpdateOrder {
    id: string,
    location?: string,
    weight?: string,
    time?: string,
    status?: string,
}
