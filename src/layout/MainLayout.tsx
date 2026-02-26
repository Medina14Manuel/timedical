// ===== LAYOUT PRINCIPAL TIMEDICAL =====

import { useState } from 'react';
import {
    FaBars,
    FaCalendarAlt,
    FaChartLine,
    FaCog,
    FaFileAlt,
    FaHeartbeat,
    FaHospital,
    FaPills,
    FaSearch,
    FaStethoscope,
    FaTachometerAlt,
    FaUserMd,
    FaUsers
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.css';

interface MainLayoutProps {
  username?: string | null;
  onLogout?: () => void;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ username, onLogout, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Elementos de navegación médica organizados por grupos
  const medicalNavItems = [
    // Dashboard
    {
      label: "Dashboard",
      icon: <FaTachometerAlt size={14} />,
      items: [
        { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt size={14} /> },
      ],
    },
    // Pacientes - ahora como un solo botón
    {
      label: "Pacientes",
      icon: <FaUsers size={14} />,
      items: [
        { path: "/patients", label: "Pacientes", icon: <FaUsers size={14} /> },
      ],
    },
    // Consultas
    {
      label: "Consultas",
      icon: <FaStethoscope size={14} />,
      items: [
        { path: "/consultas", label: "Consultas Médicas", icon: <FaStethoscope size={14} /> },
        { path: "/nueva-consulta", label: "Nueva Consulta", icon: <FaUserMd size={14} /> },
        { path: "/seguimiento", label: "Seguimiento", icon: <FaHeartbeat size={14} /> },
      ],
    },
    // Agenda y Citas
    {
      label: "Agenda",
      icon: <FaCalendarAlt size={14} />,
      items: [
        { path: "/agenda", label: "Calendario", icon: <FaCalendarAlt size={14} /> },
        { path: "/nueva-cita", label: "Nueva Cita", icon: <FaCalendarAlt size={14} /> },
        { path: "/citas-pendientes", label: "Citas Pendientes", icon: <FaFileAlt size={14} /> },
      ],
    },
    // Medicamentos
    {
      label: "Medicamentos",
      icon: <FaPills size={14} />,
      items: [
        { path: "/medicamentos", label: "Catálogo", icon: <FaPills size={14} /> },
        { path: "/prescripciones", label: "Prescripciones", icon: <FaFileAlt size={14} /> },
        { path: "/inventario-medicamentos", label: "Inventario", icon: <FaHospital size={14} /> },
      ],
    },
    // Reportes y Administración
    {
      label: "Administración",
      icon: <FaChartLine size={14} />,
      items: [
        { path: "/reportes", label: "Reportes", icon: <FaChartLine size={14} /> },
        { path: "/facturacion", label: "Facturación", icon: <FaFileAlt size={14} /> },
        { path: "/configuracion", label: "Configuración", icon: <FaCog size={14} /> },
      ],
    },
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Aquí se puede implementar la lógica de búsqueda
      // Por ejemplo, navegar a una página de resultados o filtrar contenido
      console.log('Buscando:', searchQuery);
      
      // Ejemplo: buscar en diferentes categorías
      if (searchQuery.toLowerCase().includes('paciente')) {
        navigate('/patients');
      } else if (searchQuery.toLowerCase().includes('cita')) {
        navigate('/agenda');
      } else if (searchQuery.toLowerCase().includes('medicamento')) {
        navigate('/medicamentos');
      } else {
        // Búsqueda general - podría abrir un modal de resultados
        alert(`Buscando: "${searchQuery}" - Función de búsqueda en desarrollo`);
      }
    }
  };

  return (
    <div className="medical-layout">
      {/* Barra lateral de navegación */}
      <nav className={`medical-sidebar ${menuOpen ? "open" : ""}`}>
        {/* Botón hamburguesa para móviles - dentro del sidebar */}
        <button
          className="menu-toggle mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Cerrar menú"
        >
          <FaBars size={20} />
        </button>

        {/* Perfil del doctor con más espacio */}
        <div className="sidebar-header">
          {username && (
            <div className="doctor-profile">
              <div className="doctor-avatar">
                <FaUserMd size={32} />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{username}</h3>
                <p className="doctor-specialty">Médico General</p>
                <p className="doctor-location">Consultorio 203</p>
              </div>
            </div>
          )}
        </div>

        {/* Menú de navegación */}
        <div className="sidebar-menu">
          {medicalNavItems.map((group) => {
            // Si es Pacientes o Dashboard, mostrar como botón directo
            if (group.label === "Pacientes" || group.label === "Dashboard") {
              const item = group.items[0];
              return (
                <Link
                  key={group.label}
                  to={item.path}
                  className={`menu-item direct ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {group.icon}
                  <span>{group.label}</span>
                </Link>
              );
            }
            
            // Para el resto, mostrar como menú desplegable
            return (
              <div key={group.label} className="menu-group">
                <button
                  className={`group-header ${
                    openDropdown === group.label ? 'active' : ''
                  }`}
                  onClick={() => handleDropdownToggle(group.label)}
                >
                  {group.icon}
                  <span>{group.label}</span>
                  <span className="dropdown-arrow">
                    {openDropdown === group.label ? '▼' : '▶'}
                  </span>
                </button>
                
                <div className={`group-items ${
                  openDropdown === group.label ? 'expanded' : ''
                }`}>
                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`menu-item ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer del sidebar */}
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FaCog size={14} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </nav>

      {/* Contenido principal con header interno */}
      <main className="medical-content">
        {/* Header del área de contenido */}
        <header className="content-header">
          <div className="header-left">
            {/* Botón hamburguesa removido */}
          </div>
          
          <div className="header-center">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Buscar pacientes, citas, medicamentos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="clear-search"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>
            </form>
          </div>
          
          <div className="header-right">
            <span className="header-username">{username}</span>
          </div>
        </header>
        
        <div className="content-wrapper">
          {children}
        </div>
      </main>
      
      {/* Overlay para móviles */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;