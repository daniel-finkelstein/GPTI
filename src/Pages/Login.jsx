import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/marketplace");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Logo />

        <p className="auth-subtitle">Inicia sesión con tu correo UC</p>

        <form className="auth-form">
          <label>
            Correo institucional
            <div className="input-with-icon">
              <Mail size={18} />
              <input type="email" placeholder="nombre@uc.cl" />
            </div>
            <span className="input-help">Solo correos @uc.cl son permitidos</span>
          </label>

          <label>
            Contraseña
            <div className="input-with-icon">
              <Lock size={18} />
              <input type="password" placeholder="••••••••" />
            </div>
          </label>

          <div className="auth-row">
            <label className="checkbox-label">
              <input type="checkbox" />
              Recordarme
            </label>

            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <button className="btn btn-primary full-width" type="button" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes cuenta? <Link to="/registro">Crear cuenta</Link>
        </p>
      </section>
    </main>
  );
}