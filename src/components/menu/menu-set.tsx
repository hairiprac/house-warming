import { MenuItem } from "./menu-item"
import { MenuBottom } from "./menu-bottom"

interface MenuSetItem {
  label: string
  href?: string
}

interface MenuSetProps {
  items: MenuSetItem[]
  selectedIndex?: number
}

export function MenuSet({ items, selectedIndex }: MenuSetProps) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, index) => (
        <MenuItem
          key={item.label}
          label={item.label}
          selected={index === selectedIndex}
          href={item.href}
        />
      ))}
      <MenuBottom />
    </div>
  )
}
