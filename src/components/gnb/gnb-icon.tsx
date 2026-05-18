import { ChevronLeft } from "lucide-react"

interface GnbIconProps {
  variant?: "Home" | "Back"
}

export function GnbIcon({ variant = "Home" }: GnbIconProps) {
  if (variant === "Back") {
    return <ChevronLeft size={32} color="#255435" />
  }

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M5 14.5L16 5L27 14.5V27.5H20V20H12V27.5H5V14.5Z"
        stroke="#255435"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
