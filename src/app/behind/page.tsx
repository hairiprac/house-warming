import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

export default function BehindPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="해리집 비하인드" />
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col gap-3 items-start p-8 w-full">
          <PageBullet>
            블로그{" "}
            <a
              href="https://blog.naver.com/neurath-212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#835B22] underline decoration-solid"
            >
              대환장 푸닥거리
            </a>
          </PageBullet>
        </div>
        <div className="h-20 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={4} />
    </PageLayout>
  )
}
