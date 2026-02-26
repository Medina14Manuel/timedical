// ===== PÁGINA DE LOGIN TIMEDICAL - DISEÑO SIMPLE =====

import { useState } from 'react'
import './Login.css'

interface LoginProps {
  onLogin: () => void
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulamos una llamada de autenticación
    setTimeout(() => {
      // Por ahora, cualquier email/password funciona
      if (email && password) {
        onLogin()
      } else {
        alert('Por favor ingresa email y contraseña')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container-simple">
      <div className="login-card">
        <h2 className="login-title">TIMedical</h2>
        <p className="login-subtitle">Sistema de Gestión Médica</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control-simple"
              placeholder="Usuario"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              className="form-control-simple"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-login-simple"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        
        <div className="login-footer">
          <span>¿No tienes cuenta? </span>
          <a href="#" className="register-link">Regístrate aquí</a>
        </div>
      </div>
    </div>
  )
}