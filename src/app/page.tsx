const menuItems = [
  "방문예약",
  "찾아오는 길",
  "필요한 거 없어요...",
  "주변 맛집 안내",
  "해리집 비하인드",
];

function HomeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M5 14.5L16 5L27 14.5V27.5H20V20H12V27.5H5V14.5Z"
        stroke="#255435"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col flex-1 max-w-[420px] mx-auto w-full overflow-x-hidden bg-[#F5F0E8]">
      {/* GNB */}
      <div className="sticky top-0 z-10 bg-[#F5F0E8]">
        {/* Sage green notch tabs hanging from top */}
        <div className="flex h-4 items-end overflow-hidden">
          <div className="flex-1 h-20 bg-[#819E7A] rounded-br-[52px]" />
          <div className="w-20 h-20 bg-[#819E7A] rounded-bl-[52px]" />
        </div>
        {/* Nav row */}
        <div className="flex items-center gap-2 px-8 py-3">
          <HomeIcon />
        </div>
      </div>

      {/* Welcome message */}
      <div className="px-8 pt-2">
        <p className="text-[20px] font-medium text-[#255435] leading-normal">
          언제든지 놀러오세요. 해리집.
        </p>
      </div>

      {/* Spacer pushes menu to bottom */}
      <div className="flex-1" />

      {/* Menu items */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((label) => (
          <button key={label} className="flex items-center w-full cursor-pointer">
            <div className="flex flex-1 items-center gap-2 h-20 pl-8 pr-6 bg-[#255435] rounded-tr-[52px]">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#F5F0E8]" />
              <span className="text-2xl font-medium text-[#F5F0E8] text-left leading-normal">
                {label}
              </span>
            </div>
            <div className="w-20 h-20 shrink-0 bg-[#255435] rounded-tl-[52px]" />
          </button>
        ))}

        {/* Sage green bottom section */}
        <div>
          {/* Connector tabs rising up into sage */}
          <div className="flex h-9 items-start overflow-hidden">
            <div className="flex-1 h-20 bg-[#819E7A] rounded-tr-[52px]" />
            <div className="w-20 h-20 bg-[#819E7A] rounded-tl-[52px]" />
          </div>
          <div className="bg-[#819E7A] h-40" />
        </div>
      </nav>
    </main>
  );
}
