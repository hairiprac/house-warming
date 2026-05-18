import { google } from "googleapis"

function getCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY is not set")
  try {
    return JSON.parse(raw)
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY is not valid JSON")
  }
}

function getSheets() {
  const credentials = getCredentials()
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  return google.sheets({ version: "v4", auth })
}

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID!
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME ?? "Sheet1"

export function range(r?: string) {
  return r ?? `${SHEET_NAME}`
}

export async function readRows(sheetRange?: string) {
  const sheets = getSheets()
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: range(sheetRange),
  })
  return res.data.values ?? []
}

export async function getAllRows(): Promise<Record<string, string>[]> {
  const rows = await readRows()
  if (rows.length < 2) return []
  const [headers, ...dataRows] = rows
  return dataRows.map((row) =>
    Object.fromEntries(headers.map((key, i) => [key, row[i] ?? ""]))
  )
}

export async function appendRows(values: string[][], sheetRange?: string) {
  const sheets = getSheets()
  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: range(sheetRange),
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  })
  return res.data
}

export async function updateRows(sheetRange: string, values: string[][]) {
  const sheets = getSheets()
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: sheetRange,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  })
  return res.data
}

// rowIndex: 1-based sheet row number (헤더 포함)
export async function deleteRow(rowIndex: number) {
  const sheets = getSheets()

  // 시트 ID(gid) 조회
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID })
  const sheet = meta.data.sheets?.find(
    (s) => s.properties?.title === SHEET_NAME
  )
  const sheetId = sheet?.properties?.sheetId ?? 0

  const res = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: "ROWS",
              startIndex: rowIndex - 1, // 0-based
              endIndex: rowIndex,
            },
          },
        },
      ],
    },
  })
  return res.data
}
