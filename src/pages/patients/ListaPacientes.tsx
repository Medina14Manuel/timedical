// ===== LISTA DE PACIENTES =====

import { useState } from 'react'
import './ListaPacientes.css'

// Datos mock de pacientes
const pacientesMock = [
  {
    id: 1,
    nombre: 'Ana García López',
    cedula: '001-150385-1023P',
    telefono: '+505 8234 5678',
    email: 'ana.garcia@email.com',
    fechaNacimiento: '1985-03-15',
    genero: 'Femenino',
    ultimaVisita: '2024-02-15',
    estado: 'Activo'
  },
  {
    id: 2,
    nombre: 'Carlos Martínez Rodríguez',
    cedula: '001-220790-1045K',
    telefono: '+505 7845 1234',
    email: 'carlos.martinez@email.com',
    fechaNacimiento: '1990-07-22',
    genero: 'Masculino',
    ultimaVisita: '2024-02-18',
    estado: 'Activo'
  },
  {
    id: 3,
    nombre: 'María José Hernández',
    cedula: '001-051192-2087H',
    telefono: '+505 8567 9012',
    email: 'maria.hernandez@email.com',
    fechaNacimiento: '1992-11-05',
    genero: 'Femenino',
    ultimaVisita: '2024-02-10',
    estado: 'Inactivo'
  },
  {
    id: 4,
    nombre: 'Roberto Alvarado Jiménez',
    cedula: '001-030488-3021M',
    telefono: '+505 7123 4567',
    email: 'roberto.alvarado@email.com',
    fechaNacimiento: '1988-04-03',
    genero: 'Masculino',
    ultimaVisita: '2024-02-12',
    estado: 'Activo'
  },
  {
    id: 5,
    nombre: 'Sofía Mendoza Castro',
    cedula: '001-120695-4058N',
    telefono: '+505 8789 0123',
    email: 'sofia.mendoza@email.com',
    fechaNacimiento: '1995-06-12',
    genero: 'Femenino',
    ultimaVisita: '2024-02-20',
    estado: 'Activo'
  },
  {
    id: 6,
    nombre: 'Diego Morales Sánchez',
    cedula: '001-280887-5012L',
    telefono: '+505 7456 7890',
    email: 'diego.morales@email.com',
    fechaNacimiento: '1987-08-28',
    genero: 'Masculino',
    ultimaVisita: '2024-01-30',
    estado: 'Activo'
  }
]

export function ListaPacientes() {
  const [pacientes] = useState(pacientesMock)
  const [ordenPor, setOrdenPor] = useState('nombre')
  const [ordenAsc, setOrdenAsc] = useState(true)

  // Función para ordenar (sin filtrado)
  const pacientesOrdenados = pacientes.sort((a, b) => {
    const valorA = a[ordenPor as keyof typeof a]
    const valorB = b[ordenPor as keyof typeof b]
    
    if (ordenAsc) {
      return valorA < valorB ? -1 : valorA > valorB ? 1 : 0
    } else {
      return valorA > valorB ? -1 : valorA < valorB ? 1 : 0
    }
  })

  const manejarOrden = (campo: string) => {
    if (ordenPor === campo) {
      setOrdenAsc(!ordenAsc)
    } else {
      setOrdenPor(campo)
      setOrdenAsc(true)
    }
  }

  const calcularEdad = (fechaNacimiento: string) => {
    const hoy = new Date()
    const nacimiento = new Date(fechaNacimiento)
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    const mesActual = hoy.getMonth()
    const mesNacimiento = nacimiento.getMonth()
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
      edad--
    }
    return edad
  }

  return (
    <div className="pacientes-container">
      <div className="pacientes-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="pacientes-title">Pacientes</h1>
            <p className="pacientes-subtitle">Gestión y listado de pacientes registrados</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary">
              Nuevo Paciente
            </button>
            <button className="btn btn-outline-secondary">
              Exportar
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th 
                scope="col"
                className="sortable"
                onClick={() => manejarOrden('nombre')}
              >
                Nombre Completo
                {ordenPor === 'nombre' && (
                  <span className="sort-indicator">
                    {ordenAsc ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
              <th scope="col">Cédula</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Edad</th>
              <th scope="col">Género</th>
              <th 
                scope="col"
                className="sortable"
                onClick={() => manejarOrden('ultimaVisita')}
              >
                Última Visita
                {ordenPor === 'ultimaVisita' && (
                  <span className="sort-indicator">
                    {ordenAsc ? ' ↑' : ' ↓'}
                  </span>
                )}
              </th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientesOrdenados.map((paciente) => (
              <tr key={paciente.id}>
                <td className="paciente-nombre">
                  <div className="nombre-container">
                    <strong>{paciente.nombre}</strong>
                    <small className="text-muted d-block">{paciente.email}</small>
                  </div>
                </td>
                <td className="text-monospace">{paciente.cedula}</td>
                <td>{paciente.telefono}</td>
                <td>{calcularEdad(paciente.fechaNacimiento)} años</td>
                <td>{paciente.genero}</td>
                <td>{new Date(paciente.ultimaVisita).toLocaleDateString('es-ES')}</td>
                <td>
                  <span className={`badge ${paciente.estado === 'Activo' ? 'badge-success' : 'badge-secondary'}`}>
                    {paciente.estado}
                  </span>
                </td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-outline-primary" title="Ver perfil">
                      Ver
                    </button>
                    <button className="btn btn-sm btn-outline-secondary" title="Editar">
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-info" title="Nueva consulta">
                      Consulta
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="results-info">
          Mostrando {pacientesOrdenados.length} de {pacientes.length} pacientes
        </div>
        <div className="pagination-info">
          <span className="text-muted">Página 1 de 1</span>
        </div>
      </div>
    </div>
  )
}