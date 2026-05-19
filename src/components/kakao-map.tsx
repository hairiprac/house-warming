"use client"

import Script from "next/script"
import { useRef, useCallback, useEffect } from "react"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any
  }
}

interface KakaoMapProps {
  placeUrl: string // https://map.kakao.com/?urlX=...&urlY=...&urlLevel=...
  className?: string
}

function parseKakaoUrl(url: string) {
  const u = new URL(url)
  const x = parseFloat(u.searchParams.get("urlX") ?? "")
  const y = parseFloat(u.searchParams.get("urlY") ?? "")
  const level = parseInt(u.searchParams.get("urlLevel") ?? "3", 10)
  return { x, y, level }
}

export function KakaoMap({ placeUrl, className }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  const initMap = useCallback(() => {
    if (!mapRef.current || !window.kakao?.maps) return
    const { x, y, level } = parseKakaoUrl(placeUrl)
    window.kakao.maps.load(() => {
      const coords = new window.kakao.maps.Coords(x, y).toLatLng()
      const map = new window.kakao.maps.Map(mapRef.current, { center: coords, level })
      const marker = new window.kakao.maps.Marker({ map, position: coords })
      window.kakao.maps.event.addListener(marker, "click", () => {
        window.open(placeUrl, "_blank")
      })
    })
  }, [placeUrl])

  useEffect(() => {
    if (window.kakao?.maps) initMap()
  }, [initMap])

  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

  if (!appKey) {
    return (
      <div
        className={`flex items-center justify-center bg-[#9E9E8E] rounded-[4px] ${className ?? "w-full h-[356px]"}`}
      >
        <p className="text-[#F5F0E8] text-[14px] font-medium">NEXT_PUBLIC_KAKAO_MAP_KEY 미설정</p>
      </div>
    )
  }

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div ref={mapRef} className={className ?? "w-full h-[356px] rounded-[4px]"} />
    </>
  )
}
