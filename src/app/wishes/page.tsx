"use client"

import { useEffect, useState } from "react"
import { Gnb } from "@/components/gnb/gnb"
import { MenuSet } from "@/components/menu/menu-set"
import { PageBullet } from "@/components/page-bullet"
import { PageLayout } from "@/components/page-layout"
import { ParkButton } from "@/components/park-button"
import { ParkDialog } from "@/components/park-dialog"
import { GiftListItem, type GiftItem } from "@/components/wishes/gift-list-item"
import { menuItems } from "@/lib/menu-items"

export default function WishesPage() {
  const [items, setItems] = useState<GiftItem[]>([])
  const [authed, setAuthed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)

  async function fetchItems(pass?: string) {
    const url = pass ? `/api/wishlist?pass=${encodeURIComponent(pass)}` : "/api/wishlist"
    const res = await fetch(url)
    const data = await res.json()
    setItems(data.items ?? [])
    setAuthed(data.authed ?? false)
  }

  useEffect(() => {
    fetchItems().finally(() => setLoading(false))
  }, [])

  async function handleConfirm(pass?: string) {
    if (!pass) return
    await fetchItems(pass)
    setDialogOpen(false)
  }

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
          {loading ? (
            <p className="text-[16px] font-medium text-[#9E9E8E]">불러오는 중...</p>
          ) : (
            items.map((item, index) => <GiftListItem key={index} item={item} />)
          )}
          {!authed && !loading && (
            <ParkButton
              variant="default"
              btnType="filled"
              className="w-full"
              onClick={() => setDialogOpen(true)}
            >
              더 보기
            </ParkButton>
          )}
        </div>
        <div className="h-20 w-full shrink-0" />
      </div>
      <div className="flex-1" />
      <MenuSet items={menuItems} selectedIndex={2} />

      <ParkDialog
        open={dialogOpen}
        variant="Input"
        message="리스트를 더 보시려면 비밀번호가 필요합니다. 담당자에게 문의해주세요."
        onCancel={() => setDialogOpen(false)}
        onConfirm={handleConfirm}
      />
    </PageLayout>
  )
}
