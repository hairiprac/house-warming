import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { ParkButton } from "@/components/park-button"

const menuItems = [
  { label: "방문예약", href: "/reservation" },
  { label: "찾아오는 길", href: "/directions" },
  { label: "필요한 거 없어요...", href: "/wishes" },
  { label: "주변 맛집 안내", href: "/restaurants" },
  { label: "해리집 비하인드", href: "/behind" },
]

interface GiftItem {
  category: string
  name: string
  size: string
  price: string
  storeName: string
  storeUrl: string
  note: string
}

const giftItems: GiftItem[] = [
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl:
      "https://www.29cm.co.kr/products/3932815?reward_key=RK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&is_retargeting=true&source_caller=api&utm_source=29cm_pdp_share&shortlink=o4w23faz&pid=29cm_pdp_share&deep_link_value=app29cm%3A%2F%2Fweb%2Fhttps%3A%2F%2Fwww.29cm.co.kr%2Fproducts%2F3932815%3Freward_key%3DRK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&af_click_lookback=7d",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl:
      "https://www.29cm.co.kr/products/3932815?reward_key=RK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&is_retargeting=true&source_caller=api&utm_source=29cm_pdp_share&shortlink=o4w23faz&pid=29cm_pdp_share&deep_link_value=app29cm%3A%2F%2Fweb%2Fhttps%3A%2F%2Fwww.29cm.co.kr%2Fproducts%2F3932815%3Freward_key%3DRK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&af_click_lookback=7d",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl:
      "https://www.29cm.co.kr/products/3932815?reward_key=RK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&is_retargeting=true&source_caller=api&utm_source=29cm_pdp_share&shortlink=o4w23faz&pid=29cm_pdp_share&deep_link_value=app29cm%3A%2F%2Fweb%2Fhttps%3A%2F%2Fwww.29cm.co.kr%2Fproducts%2F3932815%3Freward_key%3DRK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&af_click_lookback=7d",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl:
      "https://www.29cm.co.kr/products/3932815?reward_key=RK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&is_retargeting=true&source_caller=api&utm_source=29cm_pdp_share&shortlink=o4w23faz&pid=29cm_pdp_share&deep_link_value=app29cm%3A%2F%2Fweb%2Fhttps%3A%2F%2Fwww.29cm.co.kr%2Fproducts%2F3932815%3Freward_key%3DRK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&af_click_lookback=7d",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl:
      "https://www.29cm.co.kr/products/3932815?reward_key=RK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&is_retargeting=true&source_caller=api&utm_source=29cm_pdp_share&shortlink=o4w23faz&pid=29cm_pdp_share&deep_link_value=app29cm%3A%2F%2Fweb%2Fhttps%3A%2F%2Fwww.29cm.co.kr%2Fproducts%2F3932815%3Freward_key%3DRK_LplSYDIkAIMFS7WEjZ0xijiBVyMJPnso&af_click_lookback=7d",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
]

function GiftListItem({ item }: { item: GiftItem }) {
  return (
    <div className="bg-[#F5F0E8] border-b border-[#819E7A] flex gap-4 items-start px-4 py-6 rounded-tl-[24px] rounded-tr-[24px] w-full">
      <div className="bg-[#819E7A] h-[118px] rounded-[18px] shrink-0 w-[112px]" />
      <div className="flex flex-1 flex-col gap-3 items-start min-w-0">
        <div className="flex flex-col gap-1 items-start w-full">
          <p className="text-[20px] font-bold text-[#255435] leading-normal whitespace-nowrap">
            {item.category}
          </p>
          <p className="text-[16px] font-semibold text-[#255435] leading-normal truncate w-full">
            {item.name}
          </p>
          <p className="text-[14px] font-semibold text-[#255435] leading-normal">
            {item.size}
          </p>
          <div className="flex gap-1.5 items-center text-[14px] font-semibold whitespace-nowrap">
            <div className="flex gap-0.5 items-center text-[#255435] leading-normal">
              <span>{item.price}</span>
              <span>원</span>
            </div>
            <a
              href={item.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#835B22] underline decoration-solid leading-normal"
            >
              {item.storeName}
            </a>
          </div>
        </div>
        <p className="text-[12px] font-semibold text-[#255435] leading-normal w-full">
          {item.note}
        </p>
      </div>
    </div>
  )
}

export default function WishesPage() {
  return (
    <>
      <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
        <Gnb variant="Lv1" title="Gift Registry" />
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col gap-3 items-start p-8 w-full">
            <div className="flex items-start w-full">
              <div className="relative size-[25px] overflow-hidden shrink-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#255435]" />
              </div>
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                진짜 아무것도 필요 없는데 그래도 뭔가 갖고 올 거잖아요... 그래서 즐겨찾기 털어봅니다.
              </p>
            </div>
            <div className="flex items-start w-full">
              <div className="relative size-[25px] overflow-hidden shrink-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#255435]" />
              </div>
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                근데 진짜 뭐든 감사히 받습니다.
              </p>
            </div>
            <div className="flex items-start w-full">
              <div className="relative size-[25px] overflow-hidden shrink-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#255435]" />
              </div>
              <p className="flex-1 min-w-0 text-[20px] font-medium text-[#255435] leading-normal">
                링크가 최저가가 아닐 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center px-8 py-4 w-full">
            {giftItems.map((item, index) => (
              <GiftListItem key={index} item={item} />
            ))}
            <ParkButton variant="default" btnType="filled" className="w-full">
              더 보기
            </ParkButton>
          </div>
          <div className="h-20 w-full shrink-0" />
        </div>
        <div className="flex-1" />
        <MenuSet items={menuItems} selectedIndex={2} />
      </main>
      <div className="max-w-[420px] mx-auto w-full bg-[#819E7A] h-[360px]" />
    </>
  )
}
