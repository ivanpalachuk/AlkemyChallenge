import { useAuth } from '../../context/AuthContext';
import { Navigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

function ProtectedRoute({ children }) {

    const { user, loading } = useAuth()

    if (loading) return <Spinner />
    if (!user) return <Navigate to="/login" />
    return <>{children}</>

}

export default ProtectedRoute