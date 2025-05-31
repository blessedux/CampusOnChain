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
                "relative overflow-hidden rounded-2xl border-0",
                sizeClasses[size],
                "transition-all duration-300",
                "group",
                className
            )}
            {...props}
        >
            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white group-hover:text-black dark:text-orange-500 dark:group-hover:text-black font-medium transition-colors">{label}</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black/90 dark:text-orange-500/90 dark:group-hover:text-black/90 transition-colors" />
            </div>
        </Button>
    );
} 