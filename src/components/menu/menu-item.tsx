import Link from "next/link"
import { cn } from "@/lib/utils"
import { MenuNavs } from "./menu-navs"

interface MenuItemProps {
  label: string
  selected?: boolean
  className?: string
  href?: string
}

export function MenuItem({ label, selected = false, className, href }: MenuItemProps) {
  const bg = selected ? "bg-[#2A3D30]" : "bg-[#255435]"

  const inner = (
    <div className={cn("flex items-center w-full", className)}>
      <div className={cn("h-20 pl-8 pr-6 py-[10px] rounded-tr-[52px] flex flex-1 items-center gap-2", bg)}>
        <MenuNavs variant="Dot" />
        <span className="text-2xl font-medium text-[#F5F0E8] text-left leading-normal">
          {label}
        </span>
      </div>
      <div className={cn("w-20 h-20 shrink-0 rounded-tl-[52px]", bg)} />
    </div>
  )

  if (href) return <Link href={href} className="block w-full">{inner}</Link>
  return inner
}
