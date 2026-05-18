"use client"

import Script from "next/script"
import { useRef, useCallback } from "react"

declare global {
  interface Window {
    kakao: any
  }
}

interface KakaoMapProps {
  lat: number
  lng: number
  level?: number
  placeUrl?: string
  className?: string
}

export function KakaoMap({ lat, lng, level = 3, placeUrl, className }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  const initMap = useCallback(() => {
    if (!mapRef.current || !window.kakao?.maps) return
    window.kakao.maps.load(() => {
      const coords = new window.kakao.maps.LatLng(lat, lng)
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: coords,
        level,
      })
      const marker = new window.kakao.maps.Marker({ map, position: coords })
      if (placeUrl) {
        window.kakao.maps.event.addListener(marker, "click", () => {
          window.open(placeUrl, "_blank")
        })
      }
    })
  }, [lat, lng, level, placeUrl])

  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

  if (!appKey) {
    return (
      <div className={`flex items-center justify-center bg-[#9E9E8E] rounded-[4px] ${className ?? "w-full h-[356px]"}`}>
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
      <div
        ref={mapRef}
        className={className ?? "w-full h-[356px] rounded-[4px]"}
      />
    </>
  )
}
