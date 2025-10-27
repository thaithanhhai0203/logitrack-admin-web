"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function ConfigPanel() {
    const [depot, setDepot] = useState("");
    const [objective, setObjective] = useState<"distance" | "time" | "cost">(
        "distance"
    );
    const [useCapacity, setUseCapacity] = useState(true);
    const [useTimeWindows, setUseTimeWindows] = useState(false);
    const [maxRuntime, setMaxRuntime] = useState<number>(30);

    return (
        <div className="mt-6">
            <h1 className="font-semibold mb-2">3. Enter optimization parameters</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Depot location */}
                <div>
                    <Label htmlFor="depot" className="mb-1">
                        Depot location
                    </Label>
                    <Input
                        id="depot"
                        value={depot}
                        onChange={(e) => setDepot(e.target.value)}
                        placeholder="Enter depot address or coordinates"
                        className="w-full"
                    />
                </div>

                {/* Objective */}
                <div>
                    <Label htmlFor="objective" className="mb-1">
                        Objective
                    </Label>
                    <Select
                        onValueChange={(val) =>
                            setObjective(val as "distance" | "time" | "cost")
                        }
                        defaultValue={objective}
                    >
                        <SelectTrigger id="objective" className="w-full">
                            <SelectValue placeholder="Select objective" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="distance">Minimize distance</SelectItem>
                            <SelectItem value="time">Minimize time</SelectItem>
                            <SelectItem value="cost">Minimize cost</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Constraints */}
                <div className="md:col-span-2">
                    <Label className="mb-2">Use constraints</Label>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center space-x-2">
                            <Checkbox
                                checked={useCapacity}
                                onCheckedChange={(v) => setUseCapacity(Boolean(v))}
                            />
                            <span className="text-sm">Capacity</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <Checkbox
                                checked={useTimeWindows}
                                onCheckedChange={(v) => setUseTimeWindows(Boolean(v))}
                            />
                            <span className="text-sm">Time windows</span>
                        </label>
                    </div>
                </div>

                {/* Max runtime */}
                <div>
                    <Label htmlFor="maxRuntime" className="mb-1">
                        Max runtime (seconds)
                    </Label>
                    <Input
                        id="maxRuntime"
                        type="number"
                        value={String(maxRuntime)}
                        min={1}
                        max={600}
                        onChange={(e) => setMaxRuntime(Number(e.target.value || 0))}
                        className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Example: 30</p>
                </div>
            </div>
        </div>
    );
}