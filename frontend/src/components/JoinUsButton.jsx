import Link from "next/link"
import { cn } from "../lib/utils"

const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-9 py-4 text-xl",
}

export default function JoinUsButton({ text = "Join Us", size = "md", className= "" }) {
    return (
        <Link
            href="/join-us"
            className={cn(
            "inline-flex items-center rounded-full bg-light-blue text-dark-text transition-transform duration-200 ease-out hover:scale-105",
            sizeClasses[size],
            className
            )}
        >
            {text}
        </Link>
    )
}