interface PageBulletProps {
  children: React.ReactNode
}

export function PageBullet({ children }: PageBulletProps) {
  return (
    <div className="flex items-start gap-1 w-full">
      <div className="relative size-5 shrink-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#255435]" />
      </div>
      <div className="flex-1 min-w-0 text-[16px] font-medium text-[#255435] leading-normal">
        {children}
      </div>
    </div>
  )
}
