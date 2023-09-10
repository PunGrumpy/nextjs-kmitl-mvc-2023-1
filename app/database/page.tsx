'use client'

import { useEffect, useState } from 'react'
import { DatabaseTableProps } from '@/lib/types'
import DatabaseTable from '@/components/Database.component'
import toast from 'react-hot-toast'
import Header from '@/components/Header.component'
import ToasterNotification from '@/components/Toaster.component'

export default function Page() {
  const [data, setData] = useState<DatabaseTableProps[] | null>(null)

  useEffect(() => {
    handleGet()
  }, [])

  async function handleGet() {
    try {
      toast.promise(
        (async () => {
          const response = await fetch('/api/database', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await response.json()

          if (response.status === 200) {
            setData(data)
          } else {
            throw new Error('Failed to get data')
          }
        })(),
        {
          loading: 'Getting data...',
          success: <b>Data fetched successfully!</b>,
          error: <b>Failed to get data</b>
        }
      )
    } catch (error: any) {
      toast.error(error.toString())
    }
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-10">Time Data on Database</h1>
        {data ? (
          <div className="fade-in">
            <DatabaseTable data={data} />
          </div>
        ) : (
          <div className="fade-out"></div>
        )}
        <ToasterNotification />
      </div>
    </div>
  )
}
