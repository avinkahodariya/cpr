import { useEffect, useState } from 'react'
import { CommonConstant, coursesList } from 'utility'

export const GetCourcesList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState({
    limit: CommonConstant.defaultPageSize,
    page: 0,
  })

  const fetchData = async () => {
    setLoading(true)
    try {
      //   const result = await UsersService.getUsersList(filter)
      let list = coursesList
      if (filter.duration) {
        list = list.filter(ele => ele.durationInSeconds <= filter.duration)
      }
      if (filter.category) {
        list = list.filter(ele => ele.category === filter.category)
      }
      setData(list)
    } catch (error) {
      setError(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }

  useEffect(() => {
    fetchData()
  }, [filter])

  const updateFilter = (key, value) => {
    setFilter({ ...filter, [key]: value })
  }

  const pageChanged = page => {
    setFilter({
      ...filter,
      page,
    })
  }

  const refetch = () => {
    fetchData()
  }

  const resetFilter = () => {
    setFilter({
      limit: CommonConstant.defaultPageSize,
      page: 0,
    })
  }

  return {
    data,
    resetFilter,
    setData,
    loading,
    error,
    updateFilter,
    filter,
    pageChanged,
    refetch,
  }
}

export const GetCourcesById = id => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      //   const result = await UsersService.getUsersList(filter)
      setData(coursesList.find(ele => ele.id === id))
    } catch (error) {
      setError(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const refetch = () => {
    fetchData()
  }

  return {
    data,
    setData,
    loading,
    error,
    refetch,
  }
}
