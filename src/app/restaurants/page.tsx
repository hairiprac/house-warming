"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { menuItems } from "@/lib/menu-items"

interface RestaurantItem {
  "#": string
  Thumbnail: string
  Name: string
  Link: string
  Genre: string
  Desc: string
}

export default function RestaurantsPage() {
  const [items, setItems] = useState<RestaurantItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/restaurants")
      .then((r) => r.json())
      .then((data) => setItems(data.items ?? []))
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout>
      <Gnb variant="Lv1" title="뭐 먹을까요" />
      <div className="p-8 w-full">
        <PageBullet>
          주변의 프랜차이즈 외 맛집을 소개합니다. (담당자의 배달 앱 즐겨찾기 털이) 뭐 먹을지 모르겠을 때 참고만 하셔요. 순서는 랜덤!
        </PageBullet>
      </div>
      <div className="flex flex-col items-start w-full px-8 pb-4 gap-3">
        {loading ? (
          <p className="text-[16px] font-medium text-[#9E9E8E]">불러오는 중...</p>
        ) : (
          items.map((item, i) => (
            <a
              key={i}
              href={item.Link || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center w-full bg-[#F5F0E8] border-b border-[#819E7A] rounded-tl-[16px] rounded-tr-[16px] p-3"
            >
              <div className="relative size-[80px] rounded-[12px] shrink-0 overflow-hidden bg-[#E0D8C8]">
                {item.Thumbnail && (
                  <Image
                    src={item.Thumbnail}
                    alt={item.Name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <p className="text-[16px] font-bold text-[#255435] leading-normal">{item.Name}</p>
                <p className="text-[12px] font-medium text-[#819E7A] leading-normal">{item.Genre}</p>
                {item.Desc && (
                  <p className="text-[11px] text-[#255435] leading-normal line-clamp-2">{item.Desc}</p>
                )}
              </div>
            </a>
          ))
        )}
        <div className="h-4 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={3} />
    </PageLayout>
  )
}
