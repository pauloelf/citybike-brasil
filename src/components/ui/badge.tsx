import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  pulse?: boolean
}

export function Badge({
  className,
  children,
  size = "md",
  pulse = false,
}: BadgeProps) {
  let sizeStyles: string

  switch (size) {
    case "lg":
      sizeStyles = "h-4 w-4"
      break
    case "md":
      sizeStyles = "h-3 w-3"
      break
    case "sm":
      sizeStyles = "h-2 w-2"
      break
    default:
      sizeStyles = "h-3 w-3"
      break
  }

  return (
    <div className="flex items-center gap-1">
      <div
        className={`h-2 w-2 rounded-full ${pulse && "animate-pulse"} ${sizeStyles} ${className}`}
      ></div>
      <span className="text-muted-foreground text-sm">{children}</span>
    </div>
  )
}
