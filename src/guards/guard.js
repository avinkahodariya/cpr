import { LoaderBar } from 'components'
import { useAuth } from 'context'
import { AppLayout } from 'layout'
import { Navigate } from 'react-router-dom'

export function RoleGuard({ roles = [], redirectPath = '/login', children }) {
    console.log('roles', roles)
    const { loading, isAuthenticated } = useAuth()
    if (loading) {
        return <LoaderBar />
    }
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />
    }

    return <AppLayout>{children}</AppLayout>
}
