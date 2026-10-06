import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import Loader from './Loader';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { loading, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if(!loading && !isAuthenticated) {
            toast.error("Please login to access your dashboard.");
        }
    }, [loading, isAuthenticated]);

    if(loading){
        return <Loader/>
    }

    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }

    return children;
}

export default ProtectedRoutes;