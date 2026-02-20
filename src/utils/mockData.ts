// ===== DATOS DE EJEMPLO PARA DESARROLLO =====

import type { Appointment, DashboardStats, Doctor, Patient } from '../types'

// 👥 Pacientes de ejemplo
export const mockPatients: Patient[] = [
  {
    id: 'p1',
    firstName: 'Ana',
    lastName: 'García', 
    email: 'ana.garcia@email.com',
    phone: '+52 555 123 4567',
    dateOfBirth: '1985-03-15',
    gender: 'female',
    address: {
      street: 'Av. Reforma 123',
      city: 'Ciudad de México',
      state: 'CDMX',
      zipCode: '06600',
      country: 'México'
    },
    emergencyContact: {
      name: 'Carlos García',
      relationship: 'Esposo',
      phone: '+52 555 765 4321'
    },
    insuranceInfo: {
      provider: 'Seguro Popular',
      policyNumber: 'SP123456789'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'p2',
    firstName: 'Luis',
    lastName: 'Martínez',
    email: 'luis.martinez@email.com', 
    phone: '+52 555 987 6543',
    dateOfBirth: '1990-07-22',
    gender: 'male',
    address: {
      street: 'Calle Insurgentes 456',
      city: 'Guadalajara',
      state: 'Jalisco',
      zipCode: '44100',
      country: 'México'
    },
    emergencyContact: {
      name: 'María Martínez',
      relationship: 'Madre',
      phone: '+52 555 111 2222'
    },
    createdAt: '2024-02-01T14:30:00Z',
    updatedAt: '2024-02-01T14:30:00Z'
  }
]

// 👨‍⚕️ Doctores de ejemplo
export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    firstName: 'Dr. Roberto',
    lastName: 'Hernández',
    email: 'r.hernandez@timedical.com',
    specialization: 'Cardiología',
    phone: '+52 555 444 5555',
    licenseNumber: 'MED-12345',
    isActive: true
  },
  {
    id: 'd2', 
    firstName: 'Dra. Patricia',
    lastName: 'López',
    email: 'p.lopez@timedical.com',
    specialization: 'Pediatría',
    phone: '+52 555 666 7777',
    licenseNumber: 'MED-54321',
    isActive: true
  }
]

// 📅 Citas de ejemplo
export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    patientId: 'p1',
    doctorId: 'd1', 
    date: '2024-02-20',
    time: '10:00',
    duration: 30,
    type: 'consultation',
    status: 'scheduled',
    notes: 'Control rutinario presión arterial'
  },
  {
    id: 'a2',
    patientId: 'p2',
    doctorId: 'd2',
    date: '2024-02-20', 
    time: '14:30',
    duration: 45,
    type: 'followup',
    status: 'scheduled',
    notes: 'Seguimiento tratamiento'
  }
]

// 📊 Estadísticas del dashboard
export const mockDashboardStats: DashboardStats = {
  totalPatients: 247,
  todayAppointments: 12,
  pendingAppointments: 8,
  totalDoctors: 15,
  monthlyRevenue: 125000
}