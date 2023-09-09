import prisma from '@/lib/prisma'
import { ResponseJSON } from '@/lib/http'
import { TimeData } from '@prisma/client'
import { CalculateAverage, CalculatePercentile } from '@/lib/util'

/**
 * @swagger
 * /api/monix:
 *  get:
 *   description: Get the average, 50th, 90th, and 95th percentile of the last hour of data
 *   responses:
 *    200:
 *      description: Returns the average, 50th, 90th, and 95th percentile of the last hour of data
 *    404:
 *      description: No data found
 *    500:
 *      description: Internal server error
 */
export async function GET() {
  const timeDataWithinOneHour = await prisma.timeData.findMany({
    where: {
      time: {
        gte: new Date(new Date().getTime() - 60 * 60 * 1000)
      }
    }
  })

  if (!timeDataWithinOneHour || timeDataWithinOneHour.length === 0) {
    return ResponseJSON({ error: 'No integer values found' }, 404)
  }

  const integerValues = timeDataWithinOneHour.map(data => data.integerValue)

  const average = CalculateAverage(integerValues)
  const percentile50 = CalculatePercentile(integerValues, 50)
  const percentile90 = CalculatePercentile(integerValues, 90)
  const percentile95 = CalculatePercentile(integerValues, 95)

  return ResponseJSON(
    {
      average,
      percentile50,
      percentile90,
      percentile95
    },
    200
  )
}

/**
 * @swagger
 * /api/monix:
 *  post:
 *    description: Post a new time and integer value
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TimeData'
 *          example:
 *            time: 2021-08-01T00:00:00.000Z
 *            integerValue: 1
 *    responses:
 *      201:
 *        description: Returns the time and integer value that was created
 *      400:
 *        description: Please provide time and integerValue
 *      404:
 *        description: No integer values found
 *      500:
 *        description: Internal server error
 */
export async function POST(request: Request) {
  const { time, integerValue }: TimeData = await request.json()

  if (!time || !integerValue) {
    return ResponseJSON({ error: 'Please provide time and integerValue' }, 400)
  }

  const timeData = await prisma.timeData.create({
    data: {
      time,
      integerValue
    }
  })

  return ResponseJSON(
    {
      timeData
    },
    201
  )
}
