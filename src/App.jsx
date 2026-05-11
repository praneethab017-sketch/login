import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Email is required.'
    }
    if (!password.trim()) {
      nextErrors.password = 'Password is required.'
    }

    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
  }

  return (
    <div className="app-shell">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
        {errors.email && <div className="error-text">{errors.email}</div>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
        />
        {errors.password && <div className="error-text">{errors.password}</div>}

        <button type="submit">Sign in</button>

        {success && <div className="success-text">Login successful!</div>}
      </form>
    </div>
  )
}

export default App
