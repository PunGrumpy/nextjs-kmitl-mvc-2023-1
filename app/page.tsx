'use client'

import { Fetcher } from '@/lib/util'
import { ApiResponse } from '@/model/types'
import toast, { Toaster } from 'react-hot-toast'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [formData, setFormData] = useState({ time: '', integerValue: '' })

  useEffect(() => {
    handleGet()
  }, [])

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      toast.loading('Loading...')

      const numberIntegerValue = Number(formData.integerValue)
      const isoFormattedDate = new Date(formData.time).toISOString()

      const response = await fetch('/api/monix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          time: isoFormattedDate,
          integerValue: numberIntegerValue
        })
      })
      if (response.status === 201) {
        toast.success('Data posted successfully!')
        await new Promise(resolve => setTimeout(resolve, 2000))
        setFormData({ time: '', integerValue: '' })
      } else {
        toast.error('Failed to post data')
      }
    } catch (error: any) {
      toast.error(error.toString())
    } finally {
      toast.dismiss()
      handleGet()
    }
  }

  async function handleGet() {
    try {
      toast.loading('Loading...')
      const response = await Fetcher('/api/monix')
      await new Promise(resolve => setTimeout(resolve, 2000))
      setData(response)
    } catch (error: any) {
      toast.error(error.toString())
    } finally {
      toast.dismiss()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit} className="text-white space-y-4">
          <div>
            <label className="block text-sm font-semibold">Time</label>
            <label
              className="block cursor-pointer"
              onClick={() =>
                document.getElementById('datetime-local-input')?.click()
              }
            >
              <input
                id="datetime-local-input"
                type="datetime-local"
                value={formData.time}
                onChange={e =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full rounded py-2 px-3 bg-gray-800 bg-opacity-60 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-semibold">Integer Value</label>
            <input
              type="number"
              value={formData.integerValue}
              onChange={e =>
                setFormData({ ...formData, integerValue: e.target.value })
              }
              className="w-full rounded py-2 px-3 bg-gray-800 bg-opacity-60 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        {data ? (
          <div className="mt-4 fade-in">
            <h2 className="text-lg font-semibold text-white">
              Calculate Percentile in Last 1 Hour
            </h2>
            <div className="bg-gray-900 bg-opacity-60 p-4 rounded">
              <p className="text-white">Average: {data.average}</p>
              <p className="text-white">Percentile 50th: {data.percentile50}</p>
              <p className="text-white">Percentile 90th: {data.percentile90}</p>
              <p className="text-white">Percentile 95th: {data.percentile95}</p>
            </div>
          </div>
        ) : (
          <div className="mt-4 fade-out"></div>
        )}
      </div>

      <Toaster
        position="bottom-center"
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
      />
    </div>
  )
}
