interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="flex flex-col min-h-dvh max-w-[420px] mx-auto w-full bg-[#F5F0E8]">
      {children}
    </main>
  )
}
