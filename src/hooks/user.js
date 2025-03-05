import { useEffect, useState } from 'react'
import { CommonConstant, UsersService } from 'utility'

export const GetUsersList = () => {
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
            const result = await UsersService.getUsersList(filter)
            setTotal(result.total)
            setData(result.users)
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

export const GetUsersDetailsById = Id => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async id => {
        setLoading(true)
        try {
            const result = await UsersService.getUserById(id)
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
