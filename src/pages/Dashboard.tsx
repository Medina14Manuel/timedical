// ===== DASHBOARD PRINCIPAL =====

import { useState } from 'react'
import './Dashboard.css'

// Datos mock de actividades del día
const actividadesDia = [
  {
    id: 1,
    tipo: 'cita',
    hora: '08:00',
    titulo: 'Consulta - Ana García López',
    descripcion: 'Revisión general y seguimiento',
    estado: 'programada',
    prioridad: 'normal'
  },
  {
    id: 2,
    tipo: 'tarea',
    hora: '09:30',
    titulo: 'Revisar resultados de laboratorio',
    descripcion: 'Paciente: Carlos Martínez',
    estado: 'pendiente',
    prioridad: 'alta'
  },
  {
    id: 3,
    tipo: 'cita',
    hora: '10:15',
    titulo: 'Consulta - María José Hernández',
    descripcion: 'Control postoperatorio',
    estado: 'en-proceso',
    prioridad: 'alta'
  },
  {
    id: 4,
    tipo: 'recordatorio',
    hora: '11:00',
    titulo: 'Llamar a Roberto Alvarado',
    descripcion: 'Confirmar cita de mañana',
    estado: 'pendiente',
    prioridad: 'normal'
  },
  {
    id: 5,
    tipo: 'cita',
    hora: '14:30',
    titulo: 'Consulta - Sofía Mendoza Castro',
    descripcion: 'Primera consulta pediátrica',
    estado: 'programada',
    prioridad: 'normal'
  },
  {
    id: 6,
    tipo: 'tarea',
    hora: '16:00',
    titulo: 'Actualizar historiales médicos',
    descripcion: 'Completar notas del día',
    estado: 'pendiente',
    prioridad: 'baja'
  }
]

// Datos mock de resúmenes
const resumenHoy = {
  citasHoy: 4,
  pacientesNuevos: 2,
  tareasCompletadas: 8,
  tareasPendientes: 3
}

export function Dashboard() {
  const [actividades] = useState(actividadesDia)
  const fechaHoy = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const obtenerIconoTipo = (tipo: string) => {
    switch (tipo) {
      case 'cita': return '👥'
      case 'tarea': return '📋'
      case 'recordatorio': return '📞'
      default: return '📌'
    }
  }

  const obtenerClaseEstado = (estado: string) => {
    switch (estado) {
      case 'completada': return 'estado-completada'
      case 'en-proceso': return 'estado-proceso'
      case 'programada': return 'estado-programada'
      case 'pendiente': return 'estado-pendiente'
      default: return 'estado-pendiente'
    }
  }

  const obtenerClasePrioridad = (prioridad: string) => {
    switch (prioridad) {
      case 'alta': return 'prioridad-alta'
      case 'normal': return 'prioridad-normal'
      case 'baja': return 'prioridad-baja'
      default: return 'prioridad-normal'
    }
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">
              {fechaHoy.charAt(0).toUpperCase() + fechaHoy.slice(1)}
            </p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary">
              Nueva Consulta
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Sección principal - Actividades del día */}
        <div className="actividades-principales">
          <div className="seccion-header">
            <h2>Actividades del Día</h2>
            <span className="contador-actividades">{actividades.length} actividades</span>
          </div>
          
          <div className="actividades-lista">
            {actividades.map((actividad) => (
              <div key={actividad.id} className={`actividad-card ${obtenerClasePrioridad(actividad.prioridad)}`}>
                <div className="actividad-hora">
                  <span className="hora">{actividad.hora}</span>
                  <span className="icono-tipo">{obtenerIconoTipo(actividad.tipo)}</span>
                </div>
                <div className="actividad-contenido">
                  <div className="actividad-titulo">{actividad.titulo}</div>
                  <div className="actividad-descripcion">{actividad.descripcion}</div>
                </div>
                <div className="actividad-estado">
                  <span className={`badge ${obtenerClaseEstado(actividad.estado)}`}>
                    {actividad.estado.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secciones resumidas */}
        <div className="resumenes-lateral">
          <div className="resumen-card">
            <h3>Citas de Hoy</h3>
            <div className="resumen-numero">{resumenHoy.citasHoy}</div>
            <p>citas programadas</p>
          </div>
          
          <div className="resumen-card">
            <h3>Pacientes Nuevos</h3>
            <div className="resumen-numero">{resumenHoy.pacientesNuevos}</div>
            <p>este mes</p>
          </div>
          
          <div className="resumen-card">
            <h3>Tareas</h3>
            <div className="resumen-stats">
              <div className="stat-item">
                <span className="stat-numero completadas">{resumenHoy.tareasCompletadas}</span>
                <span className="stat-label">Completadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-numero pendientes">{resumenHoy.tareasPendientes}</span>
                <span className="stat-label">Pendientes</span>
              </div>
            </div>
          </div>
          
          <div className="resumen-card">
            <h3>Acceso Rápido</h3>
            <div className="accesos-rapidos">
              <button className="btn-acceso">Ver Pacientes</button>
              <button className="btn-acceso">Historiales</button>
              <button className="btn-acceso">Citas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}