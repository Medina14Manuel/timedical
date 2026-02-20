// ===== TIPOS PRINCIPALES PARA EL SISTEMA ERP MÉDICO =====

// 📋 Información básica del paciente
export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  address: Address
  emergencyContact: EmergencyContact
  insuranceInfo?: InsuranceInfo
  createdAt: string
  updatedAt: string
}

// 🏠 Dirección del paciente
export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// 🚨 Contacto de emergencia
export interface EmergencyContact {
  name: string
  relationship: string
  phone: string
}

// 💳 Información del seguro médico
export interface InsuranceInfo {
  provider: string
  policyNumber: string
  groupNumber?: string
}

// 👨‍⚕️ Información del personal médico
export interface Doctor {
  id: string
  firstName: string
  lastName: string
  email: string
  specialization: string
  phone: string
  licenseNumber: string
  isActive: boolean
}

// 📅 Citas médicas
export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  date: string
  time: string
  duration: number // minutos
  type: 'consultation' | 'followup' | 'surgery' | 'emergency'
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  notes?: string
}

// 📊 Datos del dashboard
export interface DashboardStats {
  totalPatients: number
  todayAppointments: number
  pendingAppointments: number
  totalDoctors: number
  monthlyRevenue: number
}