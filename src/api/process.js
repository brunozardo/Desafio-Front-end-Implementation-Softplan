import { useState, useEffect } from 'react'

const API_HOST_URL = 'http://192.168.100.7:3002/'

export function useProcesses (term, location) {
  const [processes, setProcesses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    ;(async () => {
      const response = await window.fetch(
        `${API_HOST_URL}processo?q=${term ?? ''}`
      )
      const data = await response.json()
      if (!cancelled) {
        setProcesses(data)
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
      setLoading(false)
    }
  }, [term, location])
  return [processes, loading]
}

export function createProcess (process) {
  return window.fetch(`${API_HOST_URL}processo`, {
    method: 'POST',
    body: JSON.stringify(process),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}

export function deleteProcess (id) {
  return window.fetch(`${API_HOST_URL}processo/${id}`, {
    method: 'DELETE'
  })
}
