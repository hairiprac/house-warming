import { NextRequest, NextResponse } from "next/server"
import { readRows, appendRows, updateRows, deleteRow } from "@/lib/google-sheets"

function err(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status })
}

// GET /api/sheets?range=Sheet1!A1:Z
export async function GET(req: NextRequest) {
  try {
    const range = req.nextUrl.searchParams.get("range") ?? undefined
    const rows = await readRows(range)
    return NextResponse.json({ rows })
  } catch (e) {
    return err(String(e), 500)
  }
}

// POST /api/sheets
// body: { values: string[][] }          → append
// body: { values: string[][], range: string } → append to specific range
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { values, range } = body as { values: string[][]; range?: string }
    if (!Array.isArray(values)) return err("values must be an array")
    const result = await appendRows(values, range)
    return NextResponse.json({ result })
  } catch (e) {
    return err(String(e), 500)
  }
}

// PUT /api/sheets
// body: { range: string, values: string[][] }
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { range, values } = body as { range: string; values: string[][] }
    if (!range) return err("range is required")
    if (!Array.isArray(values)) return err("values must be an array")
    const result = await updateRows(range, values)
    return NextResponse.json({ result })
  } catch (e) {
    return err(String(e), 500)
  }
}

// DELETE /api/sheets
// body: { rowIndex: number }  (1-based, 헤더 포함)
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json()
    const { rowIndex } = body as { rowIndex: number }
    if (!rowIndex || rowIndex < 1) return err("rowIndex must be >= 1")
    const result = await deleteRow(rowIndex)
    return NextResponse.json({ result })
  } catch (e) {
    return err(String(e), 500)
  }
}
