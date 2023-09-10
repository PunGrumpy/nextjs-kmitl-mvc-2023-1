export interface ApiResponse {
  average: number
  percentile50: number
  percentile90: number
  percentile95: number
}

export interface DatabaseTableProps {
  id: number
  time: string
  integerValue: number
}
