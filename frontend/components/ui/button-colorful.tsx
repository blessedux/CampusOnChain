'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: 'default' | 'sm' | 'lg';
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    size = 'default',
    ...props
}: ButtonColorfulProps) {
    const sizeClasses = {
        default: "h-10 px-4 text-sm",
        sm: "h-9 px-3 text-sm",
        lg: "h-14 px-8 text-lg"
    };

    return (
        <Button
            className={cn(
                "relative overflow-hidden rounded-2xl",
                sizeClasses[size],
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-emerald-500",
                    "opacity-40 group-hover:opacity-100",
                    "blur-sm group-hover:blur transition-all duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900 font-medium">{label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 dark:text-zinc-900/90" />
            </div>
        </Button>
    );
} 