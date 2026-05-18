interface GrStatusProps {
  status: "Done" | "Registered"
  className?: string
}

export function GrStatus({ status, className }: GrStatusProps) {
  const bg = status === "Done" ? "bg-[#CA6129]" : "bg-[#835B22]"
  const label = status === "Done" ? "증정완료" : "예약됨"

  return (
    <div className={`${bg} flex items-center justify-center px-1.5 py-1 rounded-[8px] ${className ?? ""}`}>
      <span className="text-[#F5F0E8] text-[12px] font-semibold leading-normal whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
