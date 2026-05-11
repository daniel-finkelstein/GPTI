import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";
import Logo from "../components/Logo";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/marketplace");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Logo />

        <p className="auth-subtitle">Crea tu cuenta con tu correo UC</p>

        <form className="auth-form">
          <label>
            Nombre completo
            <div className="input-with-icon">
              <User size={18} />
              <input type="text" placeholder="Juan Pérez" />
            </div>
          </label>

          <label>
            Correo institucional UC
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
              <input type="password" placeholder="Mínimo 8 caracteres" />
            </div>
          </label>

          <label>
            Confirmar contraseña
            <div className="input-with-icon">
              <Lock size={18} />
              <input type="password" placeholder="Repite tu contraseña" />
            </div>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" />
            Acepto los términos y condiciones y la política de privacidad
          </label>

          <button className="btn btn-primary full-width" type="button" onClick={handleRegister}>
            Crear cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </section>
    </main>
  );
}