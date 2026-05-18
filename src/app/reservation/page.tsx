import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

export default function ReservationPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="방문예약" />
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center p-8 w-full">
          <div className="flex-1 h-[356px] bg-[#9E9E8E] rounded-[4px]" />
        </div>
        <div className="flex flex-col gap-3 items-start px-8 pb-8 w-full">
          <PageBullet>캘린더 연동 준비중.</PageBullet>
          <PageBullet>{`//`}</PageBullet>
        </div>
        <div className="h-20 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={0} />
    </PageLayout>
  )
}
