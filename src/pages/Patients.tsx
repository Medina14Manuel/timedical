// ===== PAGINA DE PACIENTES =====

import './Patients.css'

interface PatientsProps {
  onLogout: () => void
}

const patients = [
  { name: 'Ana Torres', status: 'Seguimiento', lastVisit: '18 Feb 2026' },
  { name: 'Carlos Mendez', status: 'Primera visita', lastVisit: '17 Feb 2026' },
  { name: 'Rosa Jimenez', status: 'Control', lastVisit: '15 Feb 2026' },
]

export function Patients({ onLogout }: PatientsProps) {
  return (
    <div className="patients-page">
      <header className="patients-header">
        <div>
          <h1>Pacientes</h1>
          <p>Gestion rapida de expedientes y consultas recientes.</p>
        </div>
        <div className="patients-actions">
          <Button variant="primary">Nuevo paciente</Button>
          <Button variant="secondary" onClick={onLogout}>Cerrar sesion</Button>
        </div>
      </header>

      <Card className="patients-card" title="Listado">
        <table className="patients-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Ultima visita</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.name}>
                <td>{patient.name}</td>
                <td>{patient.status}</td>
                <td>{patient.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
