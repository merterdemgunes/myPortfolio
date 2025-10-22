import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth }) => {
    return (
        auth.token ? <Outlet/> : <Navigate to="/"/>
    );
}

export default ProtectedRoute
