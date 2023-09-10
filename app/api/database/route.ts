import { ResponseJSON } from '@/lib/http'
import prisma from '@/lib/prisma'

export async function GET() {
  const timeData = await prisma.timeData.findMany()
  if (!timeData) {
    return ResponseJSON({ error: 'No data found' }, 404)
  }
  return ResponseJSON(timeData, 200)
}
