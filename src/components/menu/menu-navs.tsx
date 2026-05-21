import { ChevronUp, ChevronDown, Plus, X, Minus, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuNavsProps {
  variant?: "Up" | "Down" | "Add" | "Close" | "Subtract" | "Right" | "Dot"
  className?: string
}

export function MenuNavs({ variant = "Dot", className }: MenuNavsProps) {
  if (variant === "Dot") {
    return (
      <div className={cn("relative size-6 overflow-hidden", className)}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F5F0E8]" />
      </div>
    )
  }

  const icons = {
    Up: <ChevronUp size={16} color="#255435" />,
    Down: <ChevronDown size={16} color="#255435" />,
    Add: <Plus size={16} color="#255435" />,
    Close: <X size={16} color="#255435" />,
    Subtract: <Minus size={16} color="#255435" />,
    Right: <ChevronRight size={16} color="#255435" />,
  }

  return (
    <div className={cn("relative size-6 flex items-center justify-center", className)}>
      {icons[variant]}
    </div>
  )
}
