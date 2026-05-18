import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"

const menuItems = [
  { label: "방문예약", href: "/reservation" },
  { label: "찾아오는 길", href: "/directions" },
  { label: "필요한 거 없어요...", href: "/wishes" },
  { label: "주변 맛집 안내", href: "/restaurants" },
  { label: "해리집 비하인드", href: "/behind" },
]

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
        <Gnb />
        <div className="px-8 pt-2">
          <p className="text-[20px] font-medium text-[#255435] leading-normal">
            언제든지 놀러오세요. 해리집.
          </p>
        </div>
        <div className="flex-1" />
        <MenuSet items={menuItems} />
      </main>
      <div className="max-w-[420px] mx-auto w-full bg-[#819E7A] h-[360px]" />
    </>
  )
}
