import { useEffect, useState } from 'react'
import { CommonConstant, ViewersService } from 'utility'

export const GetViewersList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [total, setTotal] = useState(0)
    const [filter, setFilter] = useState({
        limit: CommonConstant.defaultPageSize,
        page: 0,
    })

    const fetchData = async () => {
        setLoading(true)
        try {
            const result = await ViewersService.get(filter)
            setTotal(result.total)
            setData(result.list)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
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

    return {
        data,
        setData,
        loading,
        error,
        total,
        updateFilter,
        filter,
        pageChanged,
        refetch,
    }
}
