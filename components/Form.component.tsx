'use client'

import { ApiResponse } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ToasterNotification from './Toaster.component'

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [formData, setFormData] = useState({ time: '', integerValue: '' })

  useEffect(() => {
    handleGet()
  }, [])

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setLoading(true)
      toast.promise(
        (async () => {
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

          await new Promise(resolve => setTimeout(resolve, 2000))

          if (response.status === 201) {
            setFormData({ time: '', integerValue: '' })
          } else {
            throw new Error('Failed to post data')
          }
        })(),
        {
          loading: 'Posting data...',
          success: <b>Data posted successfully!</b>,
          error: <b>Failed to post data</b>
        }
      )
    } catch (error: any) {
      toast.error(error.toString())
    } finally {
      setLoading(false)
      handleGet()
    }
  }

  async function handleGet() {
    try {
      setLoading(true)
      toast.promise(
        (async () => {
          const response = await fetch('/api/monix')
          const responseJson = await response.json()

          await new Promise(resolve => setTimeout(resolve, 2000))

          if (response.status === 200) {
            setData(responseJson)
          } else {
            throw new Error('Failed to fetch data or no data available')
          }
        })(),
        {
          loading: 'Getting data...',
          success: <b>Data fetched successfully!</b>,
          error: <b>Failed to fetch data or no data available</b>
        }
      )
    } catch (error: any) {
      toast.error(error.toString())
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-zinc-900 bg-opacity-70 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96">
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
                className="w-full rounded py-2 px-3 bg-zinc-800 bg-opacity-60 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
                required
                disabled={loading}
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
              className="w-full rounded py-2 px-3 bg-zinc-800 bg-opacity-60 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
              required
              disabled={loading}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ${
                loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-indigo-800'
              }`}
            >
              Submit
            </button>
          </div>
        </form>
        {data &&
        data.average &&
        data.percentile50 &&
        data.percentile90 &&
        data.percentile95 ? (
          <div className="mt-4 fade-in">
            <h2 className="mt-8 text-lg font-semibold text-white">
              Calculate Percentile in Last 1 Hour
            </h2>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Display on IoT Device
            </h3>
            <div className="bg-zinc-900 bg-opacity-60 p-4 rounded">
              <p className="text-white">Average: {data.average}</p>
              <p className="text-white">Percentile 50th: {data.percentile50}</p>
              <p className="text-white">Percentile 90th: {data.percentile90}</p>
              <p className="text-white">Percentile 95th: {data.percentile95}</p>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Display on Smart Phone
            </h3>
            <div className="bg-zinc-900 bg-opacity-60 p-4 rounded">
              <p className="text-white">{`I don't know what to display here`}</p>
            </div>
          </div>
        ) : (
          <div className="mt-4 fade-out"></div>
        )}
      </div>

      <ToasterNotification />
    </div>
  )
}
