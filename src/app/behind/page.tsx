import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { MenuNavs } from "@/components/menu/menu-navs"

const menuItems = [
  { label: "방문예약", href: "/reservation" },
  { label: "찾아오는 길", href: "/directions" },
  { label: "필요한 거 없어요...", href: "/wishes" },
  { label: "주변 맛집 안내", href: "/restaurants" },
  { label: "해리집 비하인드", href: "/behind" },
]

export default function BehindPage() {
  return (
    <>
      <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
        <Gnb variant="Lv1" title="해리집 비하인드" />
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col gap-3 items-start p-8 w-full">
            <div className="flex items-start w-full">
              <MenuNavs variant="Dot" className="shrink-0" />
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                블로그{" "}
                <a
                  href="https://blog.naver.com/neurath-212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#835B22] underline decoration-solid"
                >
                  대환장 푸닥거리
                </a>
              </p>
            </div>
          </div>
          <div className="h-20 w-full shrink-0" />
        </div>
        <div className="flex-1" />
        <MenuSet items={menuItems} selectedIndex={4} />
      </main>
      <div className="max-w-[420px] mx-auto w-full bg-[#819E7A] h-[360px]" />
    </>
  )
}
