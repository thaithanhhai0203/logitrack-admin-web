"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
    status: string;
    onChange: (val: string) => void;
}

export function VehicleStatusFilter({ status, onChange }: Props) {
    return (
        <Tabs value={status} onValueChange={onChange}>
            <TabsList>
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Active">Active</TabsTrigger>
                <TabsTrigger value="Idle">Idle</TabsTrigger>
                <TabsTrigger value="Maintenance">Maintenance</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
