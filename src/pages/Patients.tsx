// ===== PAGINA DE PACIENTES =====

import { Button } from '../components/ui'
import {
  mockConsultations,
  mockDocuments,
  mockMedications,
  mockPatients,
  mockVitalSigns
} from '../utils/mockData'
import './Patients.css'

interface PatientsProps {
  onLogout: () => void
}

// Fotos de ejemplo para los pacientes
const patientPhotos = {
  p1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
  p2: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
}

const patients = mockPatients.map(patient => ({
  ...patient,
  photo: patientPhotos[patient.id as keyof typeof patientPhotos] || 'https://via.placeholder.com/150x150?text=No+Image',
  status: patient.id === 'p1' ? 'Seguimiento' : 'Primera visita',
  lastVisit: patient.id === 'p1' ? '18 Feb 2026' : '17 Feb 2026'
}))

export function Patients({ onLogout }: PatientsProps) {
  // Paciente fijo para esta página
  const selectedPatient = patients[0]

  // Función para calcular la edad
  const calculateAge = (dateOfBirth: string) => {
    const birth = new Date(dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  // Datos filtrados por el paciente
  const patientConsultations = mockConsultations.filter(c => c.patientId === selectedPatient.id)
  const patientMedications = mockMedications.filter(m => m.patientId === selectedPatient.id) 
  const patientVitalSigns = mockVitalSigns.filter(vs => vs.patientId === selectedPatient.id)
  const patientDocuments = mockDocuments.filter(d => d.patientId === selectedPatient.id)

  return (
    <div className="patients-page">
      {/* Header con foto y nombre prominente */}
      <div className="patient-header-section">
        <div className="patient-photo-container">
          <img 
            src={selectedPatient.photo} 
            alt={`${selectedPatient.firstName} ${selectedPatient.lastName}`}
            className="patient-main-photo"
          />
        </div>
        <div className="patient-name-container">
          <h1 className="patient-main-name">{selectedPatient.firstName} {selectedPatient.lastName}</h1>
          <div className="patient-meta-info">
            <span className="patient-age">{calculateAge(selectedPatient.dateOfBirth)} años</span>
            <span className="patient-gender">{selectedPatient.gender === 'female' ? 'Femenino' : 'Masculino'}</span>
            <span className="patient-id">ID: {selectedPatient.id}</span>
          </div>
        </div>
        <div className="patient-actions-header">
          <Button variant="primary" className="new-consultation-header-btn">
            Nueva Consulta
          </Button>
          <Button variant="secondary" onClick={onLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </div>

      {/* Grid principal con información */}
      <div className="patient-main-grid">
        
        {/* Columna izquierda - Información del paciente */}
        <div className="patient-info-column">
          <div className="info-card">
            <h3 className="card-title">Información Personal</h3>
            <div className="info-details">
              <div className="info-row">
                <span className="info-label">Fecha de Nacimiento:</span>
                <span className="info-value">{new Date(selectedPatient.dateOfBirth).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Teléfono:</span>
                <span className="info-value">{selectedPatient.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{selectedPatient.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Dirección:</span>
                <span className="info-value">{typeof selectedPatient.address === 'string' ? selectedPatient.address : `${selectedPatient.address.street}, ${selectedPatient.address.city}`}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Tipo de Sangre:</span>
                <span className="info-value blood-type">{selectedPatient.bloodType}</span>
              </div>
            </div>
          </div>

          <div className="vitals-card">
            <h3 className="card-title">Signos Vitales Recientes</h3>
            {patientVitalSigns[0] && (
              <div className="vitals-compact">
                <div className="vital-compact">
                  <span className="vital-icon">❤️</span>
                  <span className="vital-text">{patientVitalSigns[0].heartRate} bpm</span>
                </div>
                <div className="vital-compact">
                  <span className="vital-icon">🩺</span>
                  <span className="vital-text">{patientVitalSigns[0].bloodPressure}</span>
                </div>
                <div className="vital-compact">
                  <span className="vital-icon">🌡️</span>
                  <span className="vital-text">{patientVitalSigns[0].temperature}°C</span>
                </div>
                <div className="vital-compact">
                  <span className="vital-icon">⚖️</span>
                  <span className="vital-text">{patientVitalSigns[0].weight} kg</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Columna central - Historial clínico */}
        <div className="medical-history-column">
          
          {/* Antecedentes Familiares y Genéticos */}
          <div className="family-history-card">
            <h3 className="card-title">Antecedentes Familiares & Genéticos</h3>
            <div className="family-history-content">
              <div className="genetic-section">
                <h4 className="genetic-title">🧬 Herencia Genética</h4>
                <div className="genetic-risks">
                  <div className="risk-item high">
                    <span className="risk-icon">⚠️</span>
                    <div className="risk-info">
                      <span className="risk-condition">Diabetes Tipo 2</span>
                      <span className="risk-percentage">Alto riesgo (75%) - Padre</span>
                    </div>
                  </div>
                  <div className="risk-item medium">
                    <span className="risk-icon">⚡</span>
                    <div className="risk-info">
                      <span className="risk-condition">Hipertensión</span>
                      <span className="risk-percentage">Riesgo moderado (45%) - Ambos padres</span>
                    </div>
                  </div>
                  <div className="risk-item low">
                    <span className="risk-icon">💗</span>
                    <div className="risk-info">
                      <span className="risk-condition">Enf. Cardiovascular</span>
                      <span className="risk-percentage">Riesgo bajo (25%) - Abuelo materno</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="family-procedures">
                <h4 className="genetic-title">🏥 Procedimientos Familiares</h4>
                <div className="procedures-list">
                  <div className="procedure-item">
                    <span className="procedure-relation">Madre</span>
                    <span className="procedure-details">Cirugía de vesícula (2019) - Sin complicaciones</span>
                  </div>
                  <div className="procedure-item">
                    <span className="procedure-relation">Padre</span>
                    <span className="procedure-details">Bypass cardíaco (2020) - Recuperación completa</span>
                  </div>
                  <div className="procedure-item">
                    <span className="procedure-relation">Hermana</span>
                    <span className="procedure-details">Apendicectomía (2018) - Sin complicaciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="history-card">
            <h3 className="card-title">Historial de Consultas Detallado</h3>
            <div className="consultations-timeline">
              {patientConsultations.slice(0, 4).map((consultation) => (
                <div key={consultation.id} className="timeline-item detailed">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content detailed">
                    <div className="consultation-header-detailed">
                      <div className="consultation-date-time">
                        {new Date(consultation.date).toLocaleDateString('es-ES')} - {consultation.time}
                      </div>
                      <div className="consultation-type-badge">Control Rutinario</div>
                    </div>
                    
                    <div className="consultation-main-info">
                      <div className="consultation-title-detailed">
                        <span className="consultation-priority">🔴 Prioritario</span>
                        {consultation.reason}
                      </div>
                      <div className="consultation-doctor-detailed">
                        👨‍⚕️ Dr. Roberto Hernández - Medicina Interna
                      </div>
                    </div>

                    <div className="consultation-details-grid">
                      <div className="detail-section">
                        <h5>📋 Síntomas Reportados</h5>
                        <p>Dolor abdominal intermitente, fatiga, mareos ocasionales. Paciente refiere síntomas desde hace 3 días.</p>
                      </div>
                      
                      <div className="detail-section">
                        <h5>🔍 Examen Físico</h5>
                        <p>Abdomen blando, sin masas palpables. Ruidos intestinales normales. Presión arterial elevada (150/90).</p>
                      </div>
                      
                      <div className="detail-section">
                        <h5>🎯 Diagnóstico</h5>
                        <p><strong>{consultation.diagnosis}</strong> - Confirmado mediante análisis clínicos y evaluación física.</p>
                      </div>
                      
                      <div className="detail-section">
                        <h5>💊 Tratamiento Prescrito</h5>
                        <p>{consultation.treatment} - Seguimiento en 2 semanas para evaluar progreso y ajustar medicación.</p>
                      </div>
                    </div>

                    <div className="consultation-vitals-detailed">
                      <div className="vital-detail">
                        <span className="vital-label">Presión:</span>
                        <span className="vital-value critical">{consultation.vitalSigns.bloodPressure}</span>
                      </div>
                      <div className="vital-detail">
                        <span className="vital-label">Pulso:</span>
                        <span className="vital-value normal">{consultation.vitalSigns.heartRate} lpm</span>
                      </div>
                      <div className="vital-detail">
                        <span className="vital-label">Temperatura:</span>
                        <span className="vital-value normal">{consultation.vitalSigns.temperature}°C</span>
                      </div>
                      <div className="vital-detail">
                        <span className="vital-label">Peso:</span>
                        <span className="vital-value normal">78.5 kg</span>
                      </div>
                    </div>

                    <div className="consultation-notes">
                      <h5>📝 Notas del Doctor</h5>
                      <p>"Paciente presenta evolución favorable. Se recomienda continuar con medicación actual y modificar dieta. Control en 15 días para evaluar respuesta al tratamiento."</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-card">
            <h3 className="card-title">Resumen Médico</h3>
            <div className="summary-content">
              <div className="summary-item">
                <span className="summary-label">Última consulta:</span>
                <span className="summary-value">{new Date(patientConsultations[0]?.date).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total de consultas:</span>
                <span className="summary-value">{patientConsultations.length}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Medicamentos activos:</span>
                <span className="summary-value">{patientMedications.filter(m => m.status === 'activo').length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Medicamentos y documentos */}
        <div className="medical-details-column">
          <div className="medications-card">
            <h3 className="card-title">Medicamentos & Tratamientos Activos</h3>
            <div className="medications-detailed">
              {patientMedications
                .filter(med => med.status === 'activo')
                .slice(0, 3)
                .map(med => (
                  <div key={med.id} className="medication-detailed">
                    <div className="medication-header">
                      <div className="med-name-detailed">{med.name}</div>
                      <div className="med-status active">Activo</div>
                    </div>
                    
                    <div className="medication-prescription">
                      <div className="prescription-detail">
                        <span className="detail-label">💊 Dosis:</span>
                        <span className="detail-value">{med.dose}</span>
                      </div>
                      <div className="prescription-detail">
                        <span className="detail-label">⏰ Frecuencia:</span>
                        <span className="detail-value">{med.frequency}</span>
                      </div>
                      <div className="prescription-detail">
                        <span className="detail-label">📅 Inicio:</span>
                        <span className="detail-value">{med.startDate}</span>
                      </div>
                      <div className="prescription-detail">
                        <span className="detail-label">⏳ Duración:</span>
                        <span className="detail-value">30 días</span>
                      </div>
                    </div>

                    <div className="treatment-purpose">
                      <h5>🎯 Propósito del Tratamiento</h5>
                      <p>Control de hipertensión arterial y prevención de complicaciones cardiovasculares.</p>
                    </div>

                    <div className="medication-warnings">
                      <div className="warning-item">
                        <span className="warning-icon">⚠️</span>
                        <span>Tomar con comida para evitar irritación gástrica</span>
                      </div>
                      <div className="warning-item">
                        <span className="warning-icon">🚫</span>
                        <span>Evitar alcohol durante el tratamiento</span>
                      </div>
                    </div>

                    <div className="medication-progress">
                      <div className="progress-header">
                        <span>Progreso del Tratamiento</span>
                        <span className="progress-percentage">75%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="conditions-card">
            <h3 className="card-title">Condiciones Médicas</h3>
            <div className="conditions-list">
              <div className="condition-item">
                <span className="condition-icon">🔴</span>
                <span className="condition-name">Hipertensión</span>
              </div>
              <div className="condition-item">
                <span className="condition-icon">🟡</span>
                <span className="condition-name">Diabetes Tipo 2</span>
              </div>
            </div>
          </div>

          <div className="documents-card">
            <h3 className="card-title">Documentos</h3>
            <div className="documents-compact">
              {patientDocuments.slice(0, 3).map(doc => (
                <div key={doc.id} className="document-compact">
                  <span className="document-icon">📄</span>
                  <div className="document-info">
                    <div className="document-name">{doc.name}</div>
                    <div className="document-date">{new Date(doc.date).toLocaleDateString('es-ES')}</div>
                  </div>
                </div>
              ))}
              <button className="view-all-docs-btn">Ver todos los documentos</button>
            </div>
          </div>
        </div>

      </div>

      {/* Sección adicional con scroll - Calendario y Citas */}
      <div className="additional-sections">
        
        {/* Calendario de Citas */}
        <div className="calendar-section">
          <h3 className="section-main-title">📅 Calendario de Citas Médicas</h3>
          
          <div className="calendar-grid">
            <div className="calendar-widget">
              <div className="calendar-header">
                <button className="calendar-nav">‹</button>
                <h4 className="calendar-month">Febrero 2026</h4>
                <button className="calendar-nav">›</button>
              </div>
              
              <div className="calendar-days">
                <div className="day-header">Dom</div>
                <div className="day-header">Lun</div>
                <div className="day-header">Mar</div>
                <div className="day-header">Mié</div>
                <div className="day-header">Jue</div>
                <div className="day-header">Vie</div>
                <div className="day-header">Sab</div>
                
                {/* Días del calendario */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1
                  const hasAppointment = [5, 12, 19, 26].includes(day)
                  const isToday = day === 23
                  
                  return (
                    <div key={day} className={`calendar-day ${hasAppointment ? 'has-appointment' : ''} ${isToday ? 'today' : ''}`}>
                      <span className="day-number">{day}</span>
                      {hasAppointment && <div className="appointment-dot"></div>}
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="upcoming-appointments">
              <h4 className="appointments-title">🕐 Próximas Citas</h4>
              
              <div className="appointment-card urgent">
                <div className="appointment-date-badge">
                  <div className="badge-day">26</div>
                  <div className="badge-month">FEB</div>
                </div>
                <div className="appointment-details">
                  <div className="appointment-title">Control de Presión Arterial</div>
                  <div className="appointment-time">⏰ 10:30 AM</div>
                  <div className="appointment-doctor">👨‍⚕️ Dr. Roberto Hernández</div>
                  <div className="appointment-type urgent">🔴 Urgente</div>
                </div>
                <div className="appointment-actions">
                  <button className="btn-reschedule">Reprogramar</button>
                  <button className="btn-cancel">Cancelar</button>
                </div>
              </div>
              
              <div className="appointment-card routine">
                <div className="appointment-date-badge">
                  <div className="badge-day">05</div>
                  <div className="badge-month">MAR</div>
                </div>
                <div className="appointment-details">
                  <div className="appointment-title">Consulta de Seguimiento</div>
                  <div className="appointment-time">⏰ 2:00 PM</div>
                  <div className="appointment-doctor">👨‍⚕️ Dr. Roberto Hernández</div>
                  <div className="appointment-type routine">🟢 Rutina</div>
                </div>
                <div className="appointment-actions">
                  <button className="btn-reschedule">Reprogramar</button>
                  <button className="btn-cancel">Cancelar</button>
                </div>
              </div>

              <div className="appointment-card checkup">
                <div className="appointment-date-badge">
                  <div className="badge-day">12</div>
                  <div className="badge-month">MAR</div>
                </div>
                <div className="appointment-details">
                  <div className="appointment-title">Exámenes de Laboratorio</div>
                  <div className="appointment-time">⏰ 9:00 AM</div>
                  <div className="appointment-doctor">🏥 Laboratorio Central</div>
                  <div className="appointment-type checkup">🔵 Estudios</div>
                </div>
                <div className="appointment-actions">
                  <button className="btn-reschedule">Reprogramar</button>
                  <button className="btn-cancel">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gestión de Citas */}
        <div className="appointments-management">
          <h3 className="section-main-title">🏥 Gestión de Citas</h3>
          
          <div className="management-grid">
            <div className="quick-actions">
              <h4>⚡ Acciones Rápidas</h4>
              
              <button className="action-btn primary">
                <span className="action-icon">➕</span>
                <div className="action-text">
                  <div className="action-title">Nueva Cita</div>
                  <div className="action-description">Agendar nueva consulta</div>
                </div>
              </button>
              
              <button className="action-btn secondary">
                <span className="action-icon">🔄</span>
                <div className="action-text">
                  <div className="action-title">Reprogramar</div>
                  <div className="action-description">Cambiar fecha de cita existente</div>
                </div>
              </button>
              
              <button className="action-btn warning">
                <span className="action-icon">📞</span>
                <div className="action-text">
                  <div className="action-title">Telemedicina</div>
                  <div className="action-description">Consulta virtual</div>
                </div>
              </button>
            </div>
            
            <div className="appointment-stats">
              <h4>📊 Estadísticas</h4>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Citas este mes</div>
                  <div className="stat-trend positive">+2 vs mes anterior</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Asistencia</div>
                  <div className="stat-trend neutral">Sin cambios</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Consultas pendientes</div>
                  <div className="stat-trend negative">Requiere atención</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}