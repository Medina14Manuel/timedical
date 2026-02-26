// ===== APLICACIÓN PRINCIPAL TIMEDICAL =====

import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout.tsx'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'

// Importar páginas de Pacientes
import { Expedientes } from './pages/patients/Expedientes'
import { ListaPacientes } from './pages/patients/ListaPacientes'
import { NuevoPaciente } from './pages/patients/NuevoPaciente'

// Importar páginas de Consultas
import { ConsultasMedicas } from './pages/consultas/ConsultasMedicas'
import { NuevaConsulta } from './pages/consultas/NuevaConsulta'
import { Seguimiento } from './pages/consultas/Seguimiento'

// Importar páginas de Agenda
import { Calendario } from './pages/agenda/Calendario'
import { CitasPendientes } from './pages/agenda/CitasPendientes'
import { NuevaCita } from './pages/agenda/NuevaCita'

// Importar páginas de Medicamentos
import { CatalogoMedicamentos } from './pages/medicamentos/CatalogoMedicamentos'
import { InventarioMedicamentos } from './pages/medicamentos/InventarioMedicamentos'
import { Prescripciones } from './pages/medicamentos/Prescripciones'

// Importar páginas de Administración
import { Configuracion } from './pages/administracion/Configuracion'
import { Facturacion } from './pages/administracion/Facturacion'
import { Reportes } from './pages/administracion/Reportes'

function App() {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem('currentUser') || null
  )

  const handleLogin = () => {
    const user = 'Dr. Mariana Reyes'
    setUsername(user)
    localStorage.setItem('currentUser', user)
    navigate('/dashboard')
  }

  const handleLogout = () => {
    setUsername(null)
    localStorage.removeItem('currentUser')
    navigate('/login')
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Rutas protegidas con MainLayout */}
        <Route path="/*" element={
          username ? (
            <MainLayout username={username} onLogout={handleLogout}>
              <Routes>
                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Pacientes */}
                <Route path="/patients" element={<ListaPacientes />} />
                <Route path="/nuevo-paciente" element={<NuevoPaciente />} />
                <Route path="/expedientes" element={<Expedientes />} />
                
                {/* Consultas */}
                <Route path="/consultas" element={<ConsultasMedicas />} />
                <Route path="/nueva-consulta" element={<NuevaConsulta />} />
                <Route path="/seguimiento" element={<Seguimiento />} />
                
                {/* Agenda */}
                <Route path="/agenda" element={<Calendario />} />
                <Route path="/nueva-cita" element={<NuevaCita />} />
                <Route path="/citas-pendientes" element={<CitasPendientes />} />
                
                {/* Medicamentos */}
                <Route path="/medicamentos" element={<CatalogoMedicamentos />} />
                <Route path="/prescripciones" element={<Prescripciones />} />
                <Route path="/inventario-medicamentos" element={<InventarioMedicamentos />} />
                
                {/* Administración */}
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/facturacion" element={<Facturacion />} />
                <Route path="/configuracion" element={<Configuracion />} />
                
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </MainLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        } />
      </Routes>
    </div>
  )
}

export default App
