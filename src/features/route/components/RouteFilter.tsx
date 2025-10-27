"use client";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function RouteFilter() {
    return (
        <div className="flex flex-wrap gap-3 items-center">
            <Input placeholder="Search routes..." className="w-64" />

            <Select>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Vehicles" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Vehicles</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Drivers" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Drivers</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
