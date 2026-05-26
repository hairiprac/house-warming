interface GrStatusProps {
  status: "Sent" | "Reserved" | "Default"
  className?: string
}

export function GrStatus({ status, className }: GrStatusProps) {
  if (status === "Default") return null

  const bg = status === "Sent" ? "bg-[#CA6129]" : "bg-[#835B22]"
  const label = status === "Sent" ? "증정완료" : "예약됨"

  return (
    <div
      className={`${bg} flex items-center justify-center px-[6px] py-[4px] rounded-[12px] ${className ?? ""}`}
    >
      <span className="text-[#F5F0E8] text-[10px] font-semibold leading-normal whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
