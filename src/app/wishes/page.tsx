import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { ParkButton } from "@/components/park-button"
import { GiftListItem, type GiftItem } from "@/components/wishes/gift-list-item"
import { menuItems } from "@/lib/menu-items"

const giftItems: GiftItem[] = [
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl: "https://www.29cm.co.kr/products/3932815",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl: "https://www.29cm.co.kr/products/3932815",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl: "https://www.29cm.co.kr/products/3932815",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl: "https://www.29cm.co.kr/products/3932815",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
  {
    category: "티슈 커버",
    name: "콜럼 파인 티슈 커버",
    size: "Half size",
    price: "200,000",
    storeName: "29cm",
    storeUrl: "https://www.29cm.co.kr/products/3932815",
    note: "다 예쁘긴 하지만 역시 초록색이 좋네요.",
  },
]

export default function WishesPage() {
  return (
    <PageLayout>
      <Gnb variant="Lv1" title="Gift Registry" />
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col gap-3 items-start p-8 w-full">
          <PageBullet>진짜 아무것도 필요 없는데 그래도 뭔가 갖고 올 거잖아요... 그래서 즐겨찾기 털어봅니다.</PageBullet>
          <PageBullet>근데 진짜 뭐든 감사히 받습니다.</PageBullet>
          <PageBullet>링크가 최저가가 아닐 수 있습니다.</PageBullet>
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
    </PageLayout>
  )
}
