import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router';
import Signup from "./pages/auth_pages/Signup";
import Login from "./pages/auth_pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from './pages/dashboard/Dashboard';



function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
           {/* Protected route — only logged-in users */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />

          {/* Catch-all — redirect unknown URLs to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
