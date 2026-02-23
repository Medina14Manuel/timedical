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
    bloodType: 'O+',
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
    bloodType: 'A-',
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

// 🩺 Consultas médicas expandidas
export const mockConsultations = [
  {
    id: 'c1',
    patientId: 'p1',
    doctorId: 'd1',
    date: '2026-02-20',
    time: '09:30',
    reason: 'Control rutinario y revisión de presión arterial',
    diagnosis: 'Hipertensión leve controlada',
    treatment: 'Continuar con medicación actual, dieta baja en sodio',
    notes: 'Paciente refiere mejoría en síntomas. PA: 130/80 mmHg',
    vitalSigns: {
      bloodPressure: '130/80',
      heartRate: 72,
      temperature: 36.5,
      weight: 68.5,
      height: 165
    }
  },
  {
    id: 'c2', 
    patientId: 'p1',
    doctorId: 'd1', 
    date: '2026-01-15',
    time: '14:00',
    reason: 'Dolor de cabeza recurrente',
    diagnosis: 'Cefalea tensional',
    treatment: 'Paracetamol 500mg c/8hrs por 5 días',
    notes: 'Dolor iniciado hace 3 días, relacionado con estrés laboral',
    vitalSigns: {
      bloodPressure: '125/85',
      heartRate: 78,
      temperature: 36.8,
      weight: 68.2,
      height: 165
    }
  }
]

// 💊 Medicamentos
export const mockMedications = [
  {
    id: 'm1',
    patientId: 'p1',
    name: 'Losartán',
    dose: '50mg',
    frequency: 'Una vez al día',
    startDate: '2025-12-01',
    endDate: '2026-06-01',
    status: 'activo',
    prescribedBy: 'd1',
    notes: 'Tomar en ayunas'
  },
  {
    id: 'm2',
    patientId: 'p1', 
    name: 'Paracetamol',
    dose: '500mg',
    frequency: 'Cada 8 horas',
    startDate: '2026-01-15',
    endDate: '2026-01-20',
    status: 'finalizado',
    prescribedBy: 'd1',
    notes: 'Solo si hay dolor'
  }
]

// 🔬 Estudios de laboratorio
export const mockStudies = [
  {
    id: 's1',
    patientId: 'p1',
    type: 'Biometría hemática completa',
    date: '2026-02-18',
    status: 'completado',
    results: 'Valores dentro de parámetros normales',
    comments: 'Hemoglobina: 14.2 g/dL, Leucocitos: 7,200/μL',
    orderedBy: 'd1',
    fileUrl: '/studies/bh-ana-garcia-20260218.pdf'
  },
  {
    id: 's2',
    patientId: 'p1',
    type: 'Química sanguínea',
    date: '2026-01-10',
    status: 'completado', 
    results: 'Glucosa elevada',
    comments: 'Glucosa: 110 mg/dL, Colesterol: 190 mg/dL',
    orderedBy: 'd1',
    fileUrl: '/studies/qs-ana-garcia-20260110.pdf'
  }
]

// ❤️ Signos vitales históricos
export const mockVitalSigns = [
  {
    id: 'vs1',
    patientId: 'p1',
    date: '2026-02-20',
    bloodPressure: '130/80',
    heartRate: 72,
    temperature: 36.5,
    weight: 68.5,
    height: 165,
    oxygenSaturation: 98
  },
  {
    id: 'vs2',
    patientId: 'p1', 
    date: '2026-01-15',
    bloodPressure: '125/85',
    heartRate: 78,
    temperature: 36.8,
    weight: 68.2,
    height: 165,
    oxygenSaturation: 97
  },
  {
    id: 'vs3',
    patientId: 'p1',
    date: '2025-12-10',
    bloodPressure: '140/90',
    heartRate: 82,
    temperature: 36.6,
    weight: 69.1,
    height: 165,
    oxygenSaturation: 98
  }
]

// 📅 Citas ampliadas
export const mockExtendedAppointments = [
  {
    id: 'ea1',
    patientId: 'p1',
    doctorId: 'd1',
    date: '2026-03-15',
    time: '10:00',
    duration: 30,
    type: 'Control',
    status: 'programada',
    reason: 'Control mensual hipertensión',
    notes: 'Traer estudios de laboratorio'
  },
  {
    id: 'ea2', 
    patientId: 'p1',
    doctorId: 'd1',
    date: '2026-02-20',
    time: '09:30', 
    duration: 45,
    type: 'Consulta',
    status: 'completada',
    reason: 'Control rutinario',
    notes: 'Paciente en buen estado general'
  }
]

// 💰 Facturación 
export const mockBilling = [
  {
    id: 'b1',
    patientId: 'p1',
    date: '2026-02-20',
    concept: 'Consulta médica general',
    amount: 800,
    status: 'pagado',
    paymentMethod: 'efectivo',
    invoiceNumber: 'INV-2026-001',
    doctorId: 'd1'
  },
  {
    id: 'b2',
    patientId: 'p1', 
    date: '2026-01-15',
    concept: 'Consulta + medicamento',
    amount: 950,
    status: 'pagado',
    paymentMethod: 'tarjeta',
    invoiceNumber: 'INV-2026-002', 
    doctorId: 'd1'
  },
  {
    id: 'b3',
    patientId: 'p1',
    date: '2026-03-15',
    concept: 'Consulta de control',
    amount: 650,
    status: 'pendiente',
    paymentMethod: null,
    invoiceNumber: null,
    doctorId: 'd1'
  }
]

// 📄 Documentos
export const mockDocuments = [
  {
    id: 'doc1',
    patientId: 'p1',
    name: 'Receta médica - Losartán',
    type: 'receta',
    date: '2025-12-01',
    url: '/documents/receta-losartan-ana-garcia.pdf',
    doctorId: 'd1'
  },
  {
    id: 'doc2',
    patientId: 'p1',
    name: 'Orden de laboratorio',
    type: 'orden',
    date: '2026-02-15',
    url: '/documents/orden-lab-ana-garcia.pdf', 
    doctorId: 'd1'
  }
]