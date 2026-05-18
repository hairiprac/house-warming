export interface GiftItem {
  category: string
  name: string
  size: string
  price: string
  storeName: string
  storeUrl: string
  note: string
}

interface GiftListItemProps {
  item: GiftItem
}

export function GiftListItem({ item }: GiftListItemProps) {
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
