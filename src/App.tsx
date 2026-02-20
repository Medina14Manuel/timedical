// ===== APLICACIÓN PRINCIPAL TIMEDICAL =====

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { DoctorLanding } from './pages/DoctorLanding.tsx'
import { Login } from './pages/Login'
import { Patients } from './pages/Patients.tsx'

function App() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/doctor')
  }

  const handleLogout = () => {
    navigate('/login')
  }

  const handleVisitPatients = () => {
    navigate('/patients')
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/doctor"
          element={
            <DoctorLanding
              onContinue={handleVisitPatients}
              onLogout={handleLogout}
            />
          }
        />
        <Route path="/patients" element={<Patients onLogout={handleLogout} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
