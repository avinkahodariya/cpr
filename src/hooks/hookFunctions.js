import { useEffect, useState } from "react"

export const useFetchData = (fetchFunction, initialData, params = {}) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (args = params) => {
      setLoading(true)
      try {
          const result = await fetchFunction(args)
          setData(result)
      } catch (err) {
          setError(err)
      } finally {
          setLoading(false)
      }
  }

  useEffect(() => {
      fetchData()
  }, [JSON.stringify(params)])

  return { data, setData, loading, error, fetchData }
}