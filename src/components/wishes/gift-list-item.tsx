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
  const status = item.GRStatus === "Done" || item.GRStatus === "Registered"
    ? item.GRStatus
    : null

  return (
    <div className="bg-[#F5F0E8] border-b border-[#819E7A] flex gap-4 items-start px-4 py-6 rounded-tl-[24px] rounded-tr-[24px] w-full">
      <div className="relative h-[118px] rounded-[18px] shrink-0 w-[112px] overflow-hidden bg-[#819E7A]">
        {item.Thumbnail && (
          <img
            src={item.Thumbnail}
            alt={item.Item}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {status && (
          <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-2">
            <GrStatus status={status} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 items-start min-w-0">
        <div className="flex flex-col gap-1 items-start w-full">
          <p className="text-[20px] font-bold text-[#255435] leading-normal whitespace-nowrap">
            {item.Item}
          </p>
          {item.ActualName && item.ActualName !== "-" && (
            <p className="text-[16px] font-semibold text-[#255435] leading-normal truncate w-full">
              {item.ActualName}
            </p>
          )}
          {item.Option && item.Option !== "-" && (
            <p className="text-[14px] font-semibold text-[#255435] leading-normal">
              {item.Option}
            </p>
          )}
          <div className="flex gap-1.5 items-center text-[14px] font-semibold whitespace-nowrap">
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
          <p className="text-[12px] font-semibold text-[#255435] leading-normal w-full">
            {item.Desc}
          </p>
        )}
      </div>
    </div>
  )
}
