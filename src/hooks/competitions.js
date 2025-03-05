import { useEffect, useState } from 'react'
import { CommonConstant, CompetitionService } from 'utility'

export const GetCompetitionsList = () => {
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
            const result = await CompetitionService.get(filter)
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

export const GetCompetitionById = Id => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async id => {
        setLoading(true)
        try {
            const result = await CompetitionService.getById(id)
            setData(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Id) {
            fetchData(Id)
        }
    }, [Id])

    return {
        data,
        setData,
        loading,
        error,
        fetchData,
    }
}
