import Image from "next/image"
import { GrStatus } from "./gr-status"

export interface GiftItem {
  Thumbnail: string
  Item: string
  ActualName: string
  Option: string
  Price: string
  Desc: string
  WheretoLink: string
  Link: string
  GRStatus: string
  RequireAuth: string
}

interface GiftListItemProps {
  item: GiftItem
}

export function GiftListItem({ item }: GiftListItemProps) {
  const status = item.GRStatus as "Done" | "Registered" | "Default"
  const dimmed = item.GRStatus !== "Default"

  return (
    <div className="bg-[#F5F0E8] border-b border-[#819E7A] flex gap-4 items-center px-4 py-6 rounded-tl-[24px] rounded-tr-[24px] w-full">
      {/* 썸네일 */}
      <div className="relative h-[118px] rounded-[18px] shrink-0 w-[112px] overflow-hidden bg-[#819E7A]">
        {item.Thumbnail && (
          <Image
            src={item.Thumbnail}
            alt={item.Item}
            fill
            unoptimized
            className={`object-cover ${dimmed ? "opacity-50" : ""}`}
          />
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col gap-3 items-start min-w-0">
        <div className="flex flex-col gap-1 items-start w-full">
          {/* 카테고리명 + GrStatus 배지 인라인 */}
          <div className="flex gap-3 items-center w-full">
            <p
              className={`text-[20px] font-bold text-[#255435] leading-normal whitespace-nowrap ${dimmed ? "opacity-50" : ""}`}
            >
              {item.Item}
            </p>
            <GrStatus status={status} />
          </div>

          {item.ActualName && item.ActualName !== "-" && (
            <p
              className={`text-[16px] font-semibold text-[#255435] leading-normal truncate w-full ${dimmed ? "opacity-50" : ""}`}
            >
              {item.ActualName}
            </p>
          )}
          {item.Option && item.Option !== "-" && (
            <p
              className={`text-[14px] font-semibold text-[#255435] leading-normal ${dimmed ? "opacity-50" : ""}`}
            >
              {item.Option}
            </p>
          )}
          <div
            className={`flex gap-1.5 items-center text-[14px] font-semibold whitespace-nowrap ${dimmed ? "opacity-50" : ""}`}
          >
            {item.Price && (
              <div className="flex gap-0.5 items-center text-[#255435] leading-normal">
                <span>{item.Price}</span>
                <span>원</span>
              </div>
            )}
            {item.Link ? (
              <a
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#835B22] underline decoration-solid leading-normal"
              >
                {item.WheretoLink}
              </a>
            ) : (
              <span className="text-[#9E9E8E] leading-normal">{item.WheretoLink}</span>
            )}
          </div>
        </div>
        {item.Desc && (
          <p
            className={`text-[12px] font-semibold text-[#255435] leading-normal w-full ${dimmed ? "opacity-50" : ""}`}
          >
            {item.Desc}
          </p>
        )}
      </div>
    </div>
  )
}
