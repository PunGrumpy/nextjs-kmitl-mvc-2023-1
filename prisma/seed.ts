import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  try {
    const exampleData = [
      { time: new Date('2023-09-09T14:00:00Z'), integerValue: 8000 },
      { time: new Date('2023-09-09T14:00:00Z'), integerValue: 10000 },
      { time: new Date('2023-09-09T14:00:00Z'), integerValue: 11000 }
    ]

    await Promise.all(
      exampleData.map(async data => {
        await prisma.timeData.create({
          data
        })
      })
    )

    console.log('Seeded successfully 🌱')
  } catch (error) {
    console.log("Couldn't seed database 😢, error: ", error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
