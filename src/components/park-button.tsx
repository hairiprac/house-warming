"use client"

import { cn } from "@/lib/utils"

interface ParkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "pressed" | "disabled"
  btnType?: "filled" | "lined"
  children: React.ReactNode
}

export function ParkButton({
  variant = "default",
  btnType = "filled",
  className,
  children,
  ...props
}: ParkButtonProps) {
  const isDisabled = variant === "disabled"

  const filledBg: Record<string, string> = {
    default: "bg-[#255435]",
    secondary: "bg-[#CA6129]",
    pressed: "bg-[#2A3D30]",
    disabled: "bg-[#9E9E8E]",
  }

  const linedColor: Record<string, string> = {
    default: "text-[#255435]",
    secondary: "text-[#CA6129]",
    pressed: "text-[#2A3D30]",
    disabled: "text-[#9E9E8E]",
  }

  return (
    <button
      className={cn(
        "font-medium text-base",
        btnType === "filled" && [
          "rounded-[16px] p-4",
          filledBg[variant],
          "text-[#F5F0E8]",
        ],
        btnType === "lined" && ["px-4 py-3", linedColor[variant]],
        isDisabled && "pointer-events-none",
        className
      )}
      disabled={isDisabled || props.disabled}
      {...props}
    >
      {children}
    </button>
  )
}
