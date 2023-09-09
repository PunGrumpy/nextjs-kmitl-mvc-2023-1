export function MakeSerializable<T extends any>(o: T): T {
  if (typeof o !== 'object' || o === null) {
    throw new Error('Invalid input object. It must be a serializable object.')
  }

  return JSON.parse(JSON.stringify(o))
}

export function CalculatePercentile(
  values: number[],
  percentile: number
): number {
  const sortedValues = values.sort((a, b) => a - b)
  const index = Math.ceil((percentile / 100) * sortedValues.length) - 1

  return sortedValues[index]
}

export function CalculateAverage(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length
}
