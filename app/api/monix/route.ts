import prisma from '@/lib/prisma'
import { ResponseJSON } from '@/lib/http'
import { CalculatePercentile } from '@/lib/util'

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
 *        description: Returns the average, 50th, 90th and 95th percentile of the integer values within the last hour
 *      400:
 *        description: Please provide time and integerValue
 *      404:
 *        description: No integer values found
 *      500:
 *        description: Internal server error
 */
export async function POST(request: Request) {
  const { time, integerValue }: { time: Date; integerValue: number } =
    await request.json()

  if (!time || !integerValue) {
    return ResponseJSON({ error: 'Please provide time and integerValue' }, 400)
  }

  const timeData = await prisma.timeData.create({
    data: {
      time: new Date(time),
      integerValue
    }
  })

  const oneHourAgo = new Date(Date.now())
  oneHourAgo.setHours(oneHourAgo.getHours() - 1)

  const timeDataWithinOneHour = await prisma.timeData.findMany({
    where: {
      time: {
        gte: oneHourAgo
      }
    },
    select: {
      integerValue: true
    }
  })

  if (timeDataWithinOneHour?.length > 0) {
    const integerValues = timeDataWithinOneHour?.map(data => data.integerValue)

    if (!integerValues) {
      return ResponseJSON({ error: 'No integer values found' }, 404)
    }

    const average =
      integerValues.reduce((sum, value) => sum + value, 0) /
      integerValues.length

    const percentile50 = CalculatePercentile(integerValues, 50)
    const percentile90 = CalculatePercentile(integerValues, 90)
    const percentile95 = CalculatePercentile(integerValues, 95)

    return ResponseJSON(
      {
        average,
        'Percentile 50th': percentile50,
        'Percentile 90th': percentile90,
        'Percentile 95th': percentile95
      },
      201
    )
  } else {
    return ResponseJSON({ error: 'No integer values found' }, 404)
  }
}
