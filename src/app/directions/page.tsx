import { Gnb } from "@/components/gnb/gnb"
import { KakaoMap } from "@/components/kakao-map"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

// 서초구 서운로 17길 11, 프레스티지 서초
const LAT = 37.489616
const LNG = 127.014186

export default function DirectionsPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="찾아오는 길" />
      <div className="flex flex-col items-start w-full">
        <div className="px-8 pt-8 w-full">
          <KakaoMap
            lat={LAT}
            lng={LNG}
            placeUrl="https://place.map.kakao.com/1259903811"
            className="w-full h-[356px] rounded-[4px]"
          />
        </div>
        <div className="flex flex-col gap-3 items-start px-8 pb-8 w-full">
          <PageBullet>
            <a
              href="https://place.map.kakao.com/1259903811"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#835B22] underline decoration-solid"
            >
              서초구 서운로 17길 11, 프레스티지 서초
            </a>
          </PageBullet>
          <PageBullet>어느 역이든 걸어서 15분 정도 걸리지만 초행길이면 좀 멀게 느껴질 수 있습니다.</PageBullet>
          <PageBullet>주차 가능. 담당자에게 문의주세요.</PageBullet>
        </div>
        <div className="h-20 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={1} />
    </PageLayout>
  )
}
