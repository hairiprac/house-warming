import { Gnb } from "@/components/gnb/gnb"
import { KakaoMap } from "@/components/kakao-map"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

const KAKAO_URL = "https://map.kakao.com/?urlX=506110.9999999995&urlY=1107805&urlLevel=3&itemId=1259903811&q=%ED%94%84%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%A7%80%EC%84%9C%EC%B4%88&srcid=1259903811&map_type=TYPE_MAP"
const PLACE_URL = "https://place.map.kakao.com/1259903811"

export default function DirectionsPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="찾아오는 길" />
      <div className="flex flex-col items-start w-full">
        <div className="px-8 pt-8 pb-6 w-full">
          <KakaoMap
            placeUrl={KAKAO_URL}
            className="w-full h-[356px] rounded-[4px]"
          />
        </div>
        <div className="flex flex-col gap-3 items-start px-8 pb-8 w-full">
          <PageBullet>
            <a
              href={PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#835B22] underline decoration-solid"
            >
              서초구 서운로 11길 17, 프레스티지 서초
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
