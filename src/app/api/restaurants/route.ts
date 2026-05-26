import { NextResponse } from "next/server"
import { getAllRows } from "@/lib/google-sheets"

export async function GET() {
  try {
    const items = await getAllRows("Restaurants")
    return NextResponse.json({ items })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
