import type React from "react"

export function Badge({
  className,
  variant = "default",
  children,
}: {
  className?: string
  variant?: "default" | "success" | "warning" | "destructive" | "outline"
  children: React.ReactNode
}) {
  const variantStyles = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    outline: "border border-border",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className || ""}`}
    >
      {children}
    </span>
  )
}
