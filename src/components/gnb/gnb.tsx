import { GnbTop } from "./gnb-top"
import { GnbIcon } from "./gnb-icon"

interface GnbProps {
  variant?: "Home" | "Lv1"
  title?: string
}

export function Gnb({ variant = "Home", title }: GnbProps) {
  return (
    <div className="sticky top-0 z-10 bg-[#F5F0E8]">
      <GnbTop />
      <nav className="flex items-center gap-2 px-8 py-3">
        <GnbIcon variant={variant === "Lv1" ? "Back" : "Home"} />
        {variant === "Lv1" && title && (
          <span className="text-[32px] font-semibold text-[#255435]">{title}</span>
        )}
      </nav>
    </div>
  )
}
