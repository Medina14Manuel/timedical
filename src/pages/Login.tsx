// ===== PÁGINA DE LOGIN TIMEDICAL =====

import { useState } from 'react'
import { Button, Card } from '../components/ui'
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
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="custom-logo">
            <span className="logo-text">TI</span>
            <span className="logo-suffix">Medical</span>
          </div>
          <p>Sistema de Gestión Médica</p>
        </div>

        <Card title="Iniciar Sesión">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Usuario</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isLoading}
              className="login-button"
            >
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </Button>
          </form>

          <div className="login-footer">
            <p className="demo-credentials">
              <strong>Credenciales de prueba:</strong><br />
              Usuario: cualquier usuario<br />
              Contraseña: cualquier contraseña
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}