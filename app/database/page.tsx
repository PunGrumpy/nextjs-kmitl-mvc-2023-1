'use client'

import { useEffect, useState } from 'react'
import { DatabaseTableProps } from '@/lib/types'
import DatabaseTable from '@/components/Database.component'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import Header from '@/components/Header.component'

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
          success: <b>Data Fetch Successful!</b>,
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
        {data ? <DatabaseTable data={data} /> : <p>Loading data...</p>}
        <Toaster
          position="bottom-right"
          key={Math.random()}
          gutter={10}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff'
            },
            success: {
              style: {
                background: '#435334',
                color: '#CEDEBD'
              }
            },
            error: {
              style: {
                background: '#E2C799',
                color: '#9A3B3B'
              }
            },
            loading: {
              style: {
                background: '#352F44',
                color: '#B9B4C7'
              }
            }
          }}
        >
          {t => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== 'loading' && (
                    <button onClick={() => toast.dismiss(t.id)}>&times;</button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
      </div>
    </div>
  )
}
