"use client"

import { useState } from "react"

interface ParkDialogBaseProps {
  message: string
  onCancel: () => void
  onConfirm: (value?: string) => void
}

interface ParkDialogInputProps extends ParkDialogBaseProps {
  variant: "Input"
  confirmText?: never
}

interface ParkDialogConfirmProps extends ParkDialogBaseProps {
  variant: "Confirm"
  confirmText: string
}

type ParkDialogProps = ParkDialogInputProps | ParkDialogConfirmProps

function DialogBox({ message, variant, confirmText, onCancel, onConfirm }: ParkDialogProps) {
  const [password, setPassword] = useState("")

  return (
    <div className="bg-[#F5F0E8] border border-[#255435] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col gap-12 items-start px-8 py-10 rounded-[8px] w-[331px]">
      <p className="text-[16px] font-medium text-[#255435] leading-normal w-full">
        {message}
      </p>

      {variant === "Input" && (
        <div className="flex flex-col gap-1.5 items-start w-full">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onConfirm(password)}
            className="w-full bg-transparent text-[16px] font-medium text-[#255435] leading-6 tracking-[0.15px] placeholder:text-[#9E9E8E] outline-none"
          />
          <div className="h-px w-full bg-[#255435]" />
        </div>
      )}

      {variant === "Confirm" && (
        <p className="text-[16px] font-semibold text-[#255435] leading-normal text-center w-full">
          {confirmText}
        </p>
      )}

      <div className="flex gap-2.5 items-start justify-end w-full">
        <button
          onClick={onCancel}
          className="px-4 py-3 text-[16px] font-medium text-[#CA6129] leading-normal cursor-pointer"
        >
          취소
        </button>
        <button
          onClick={() => onConfirm(variant === "Input" ? password : undefined)}
          className="px-4 py-3 text-[16px] font-medium text-[#255435] leading-normal cursor-pointer"
        >
          확인
        </button>
      </div>
    </div>
  )
}

export function ParkDialog(props: ParkDialogProps & { open: boolean }) {
  const { open, ...rest } = props
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <DialogBox {...rest} />
    </div>
  )
}
