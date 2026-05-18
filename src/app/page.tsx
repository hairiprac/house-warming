import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

export default function Home() {
  return (
    <PageLayout>
      <Gnb />
      <div className="px-8 pt-2">
        <p className="text-[20px] font-medium text-[#255435] leading-normal">
          언제든지 놀러오세요. 해리집.
        </p>
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} />
    </PageLayout>
  )
}
