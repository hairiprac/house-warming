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
    <div className="bg-[#F5F0E8] border-b border-[#819E7A] flex gap-3 items-center p-3 rounded-tl-[24px] rounded-tr-[24px] w-full">
      <div className="relative size-[118px] rounded-[18px] shrink-0 overflow-hidden bg-[#E0D8C8]">
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

      <div className="flex flex-1 flex-col gap-3 items-start min-w-0 self-stretch">
        <div className="flex flex-col gap-1 items-start w-full">
          <div className="flex gap-2 items-center w-full">
            <p
              className={`text-[16px] font-bold text-[#255435] leading-normal whitespace-nowrap ${dimmed ? "opacity-50" : ""}`}
            >
              {item.Item}
            </p>
            <GrStatus status={status} />
          </div>

          {item.ActualName && item.ActualName !== "-" && (
            <p
              className={`text-[14px] font-medium text-[#255435] leading-normal truncate w-full ${dimmed ? "opacity-50" : ""}`}
            >
              {item.ActualName}
            </p>
          )}
          {item.Option && item.Option !== "-" && (
            <p
              className={`text-[12px] text-[#255435] leading-normal ${dimmed ? "opacity-50" : ""}`}
            >
              {item.Option}
            </p>
          )}
          <div
            className={`flex gap-1 items-center text-[12px] font-semibold whitespace-nowrap ${dimmed ? "opacity-50" : ""}`}
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
            className={`text-[11px] font-medium text-[#255435] leading-normal w-full ${dimmed ? "opacity-50" : ""}`}
          >
            {item.Desc}
          </p>
        )}
      </div>
    </div>
  )
}
