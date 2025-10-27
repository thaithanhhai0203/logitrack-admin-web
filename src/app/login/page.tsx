"use client";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { Button, Input } from "@/components/ui";
import { useState } from "react";

export default function LoginPage() {
    const { mutate: login, isPending } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[300px] space-y-3">
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <Button
                    className="w-full"
                    onClick={() => login({ email, password })}
                    disabled={isPending}
                >
                    {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
            </div>
        </div>
    );
}
