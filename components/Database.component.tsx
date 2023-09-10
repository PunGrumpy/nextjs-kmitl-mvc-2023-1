import { DatabaseTableProps } from '@/lib/types'

type DatabaseTablePropsWrapper = {
  data: DatabaseTableProps[]
}

export default function DatabaseTable({ data }: DatabaseTablePropsWrapper) {
  return (
    <div className="overflow-x-auto rounded-sm shadow-lg backdrop-blur-lg bg-zinc-800 bg-opacity-25">
      <table className="min-w-full table-auto shadow-lg rounded-lg border border-zinc-700 border-opacity-50 divide-y divide-zinc-700 divide-opacity-50">
        <thead>
          <tr className="border border-zinc-700 border-opacity-50 divide-y divide-zinc-700 divide-opacity-50">
            <th className="px-4 py-2 md:px-4 md:py-2 text-left">ID</th>
            <th className="px-4 py-2 md:px-4 md:py-2 text-left">Time</th>
            <th className="px-4 py-2 md:px-4 md:py-2 text-left">
              Integer Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr
              key={item.id}
              className="hover:bg-zinc-50 hover:bg-opacity-10 hover:shadow-md hover:backdrop-blur-lg border border-zinc-700 border-opacity-50 divide-y divide-zinc-700 divide-opacity-50"
            >
              <td className="px-2 py-2 md:px-4 md:py-2">{item.id}</td>
              <td className="px-2 py-2 md:px-4 md:py-2">
                {formatDateTime(item.time)}
              </td>
              <td className="px-2 py-2 md:px-4 md:py-2">{item.integerValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatDateTime(dateTime: string) {
  const date = new Date(dateTime)
  return date.toLocaleString()
}
