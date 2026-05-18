import { NextRequest, NextResponse } from "next/server"
import { getAllRows } from "@/lib/google-sheets"

const PASS = process.env.REGISTRY_PASS ?? "12341234"

export async function GET(req: NextRequest) {
  try {
    const pass = req.nextUrl.searchParams.get("pass")
    const authed = pass === PASS

    const rows = await getAllRows()
    const items = authed ? rows : rows.filter((r) => r.RequireAuth === "N")

    return NextResponse.json({ items, authed })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
