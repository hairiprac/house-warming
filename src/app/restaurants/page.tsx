import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

export default function RestaurantsPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="뭐 먹을까요" />
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col gap-3 items-start p-8 w-full">
          <PageBullet>담당자의 배달 앱 즐겨찾기 털이 예정...</PageBullet>
        </div>
        <div className="h-20 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={3} />
    </PageLayout>
  )
}
