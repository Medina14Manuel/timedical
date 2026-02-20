// ===== VISTA INICIAL DEL DOCTOR =====

import { Button, Card } from '../components/ui'
import './DoctorLanding.css'

interface DoctorLandingProps {
  onContinue: () => void
  onLogout: () => void
}

const todayLabel = '20 Feb 2026'

const dailySchedule = [
  { time: '08:00', activity: 'Revisar resultados de laboratorio' },
  { time: '09:30', activity: '' },
  { time: '10:15', activity: 'Seguimiento post consulta: Ana Torres' },
  { time: '11:00', activity: '' },
  { time: '12:30', activity: 'Actualizar expedientes clinicos' },
  { time: '14:00', activity: '' },
  { time: '15:30', activity: 'Confirmar citas de la tarde' },
  { time: '17:00', activity: '' },
]

const notifications = [
  { title: 'Nuevo resultado disponible', detail: 'Laboratorio de Maria Lopez' },
  { title: 'Cita movida', detail: 'Consulta de 12:30 reprogramada' },
  { title: 'Mensaje urgente', detail: 'Paciente Torres solicita llamada' },
]

const calendarDays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']
const calendarNumbers = [
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
]

export function DoctorLanding({ onContinue, onLogout }: DoctorLandingProps) {
  return (
    <div className="doctor-home">
      <div className="doctor-brand-bar">
        <div className="brand-logo">TI Medical</div>
        <div className="brand-search">
          <label className="sr-only" htmlFor="brand-search">
            Buscar pacientes, citas o tareas
          </label>
          <div className="brand-search-wrapper">
            <input
              id="brand-search"
              type="search"
              placeholder="Buscar pacientes, citas o tareas"
            />
            <button
              className="brand-search-button"
              type="button"
              aria-label="Buscar"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27a6 6 0 1 0-.71.71l.27.28v.79L20 20.49 21.49 19zm-5.5 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="doctor-top-bar">
        <div className="doctor-profile">
          <div className="doctor-avatar">
            <span>DR</span>
          </div>
          <div className="doctor-details">
            <p className="doctor-role">Especialista en Medicina Familiar</p>
            <h2>Dra. Mariana Reyes</h2>
            <span className="doctor-location">Consultorio 203 · Ciudad Clínica</span>
          </div>
        </div>

        <div className="doctor-actions">
          <Button
            variant="primary"
            size="large"
            onClick={onContinue}
            className="doctor-primary-button"
          >
            + Nueva Consulta
          </Button>
          <Button variant="secondary" size="medium" onClick={onLogout}>
            Cerrar sesión
          </Button>
        </div>
      </div>

      <div className="doctor-main">
        <Card className="doctor-card doctor-menu">
          <p className="menu-title">Actividades</p>
          <div className="menu-list">
            <button className="menu-button" type="button">Agendar cita</button>
            <button className="menu-button" type="button">Agendar actividad</button>
            <button className="menu-button" type="button">Nuevo Paciente</button>
            <button className="menu-button" type="button">Lista de paciente</button>
            <button className="menu-button" type="button">Facturar</button>
            <button className="menu-button" type="button">Lista de medicamentos</button>
            <button className="menu-button" type="button">Reportes</button>
            <button className="menu-button" type="button">Historial de consultas</button>
            <button className="menu-button" type="button">Proximas citas</button>
          </div>
        </Card>

        <Card className="doctor-card doctor-activities">
          <div className="activities-header">
            <p className="activities-title">Listado de actividades del dia</p>
            <span className="activities-date">{todayLabel}</span>
          </div>
          <div className="activities-scroll">
            <ul className="activity-timeline">
              {dailySchedule.map((slot) => (
                <li key={slot.time} className={slot.activity ? 'slot active' : 'slot'}>
                  <span className="slot-time">{slot.time}</span>
                  <div className="slot-content">
                    {slot.activity ? (
                      <span className="slot-activity">{slot.activity}</span>
                    ) : (
                      <span className="slot-empty">Sin actividad programada</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <div className="doctor-side">
          <Card className="doctor-card notification-card">
            <p className="side-title">Notificaciones</p>
            <ul className="notification-list">
              {notifications.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="doctor-card calendar-card">
            <div className="calendar-header">
              <p className="side-title">Calendario</p>
              <span className="calendar-month">Feb 2026</span>
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day) => (
                <span key={day} className="calendar-day">{day}</span>
              ))}
              {calendarNumbers.map((day) => (
                <span
                  key={day}
                  className={day === 20 ? 'calendar-date active' : 'calendar-date'}
                >
                  {day}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
