import type React from "react"

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-lg border shadow-sm ${className || ""}`}>{children}</div>
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className || ""}`}>{children}</h3>
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={`text-sm text-muted-foreground ${className || ""}`}>{children}</p>
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>
}
