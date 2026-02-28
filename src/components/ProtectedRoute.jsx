import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router';


const ProtectedRoute = ({children}) => {
      const {user , loading } = useAuth();

      if (loading){
          return (
                <div className="flex justify-center items-center h-screen w-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                </div>);
            }

        if (!user){
            return <Navigate to="/login" replace />;
        }

      return children;
}

export default ProtectedRoute
