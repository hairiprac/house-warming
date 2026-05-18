interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
        {children}
      </main>
      <div className="max-w-[420px] mx-auto w-full bg-[#819E7A] h-[360px]" />
    </>
  )
}
