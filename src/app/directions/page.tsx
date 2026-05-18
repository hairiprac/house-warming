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

export default function DirectionsPage() {
  return (
    <>
      <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
        <Gnb variant="Lv1" title="찾아오는 길" />
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center p-8 w-full">
            <div className="flex-1 h-[356px] bg-[#9E9E8E] rounded-[4px]" />
          </div>
          <div className="flex flex-col gap-3 items-start px-8 pb-8 w-full">
            <div className="flex items-start w-full">
              <MenuNavs variant="Dot" className="shrink-0" />
              <a
                href="https://place.map.kakao.com/1259903811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-0 text-[20px] font-medium text-[#835B22] leading-normal underline decoration-solid"
              >
                서초구 서운로 17길 11, 프레스티지 서초
              </a>
            </div>
            <div className="flex items-start w-full">
              <MenuNavs variant="Dot" className="shrink-0" />
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                어느 역이든 걸어서 15분 정도 걸리지만 초행길이면 좀 멀게 느껴질 수 있습니다.
              </p>
            </div>
            <div className="flex items-start w-full">
              <MenuNavs variant="Dot" className="shrink-0" />
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                주차 가능. 담당자에게 문의주세요.
              </p>
            </div>
          </div>
          <div className="h-20 w-full shrink-0" />
        </div>
        <div className="flex-1" />
        <MenuSet items={menuItems} selectedIndex={1} />
      </main>
      <div className="max-w-[420px] mx-auto w-full bg-[#819E7A] h-[360px]" />
    </>
  )
}
