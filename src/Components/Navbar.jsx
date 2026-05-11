import { Link } from "react-router-dom";
import { Bell, CircleUserRound, ChevronDown, Plus } from "lucide-react";
import Logo from "./Logo";

export default function Navbar({ variant = "public" }) {
  if (variant === "marketplace") {
    return (
      <header className="navbar marketplace-navbar">
        <Link to="/marketplace" className="navbar-logo-link">
          <Logo />
        </Link>

        <div className="marketplace-search">
          <input placeholder="Buscar calculadoras, libros, tablets..." />
        </div>

        <div className="navbar-actions">
          <Link to="/publicar" className="btn btn-primary btn-small">
            <Plus size={16} />
            Publicar recurso
          </Link>

          <button className="icon-button">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

          <button className="profile-button">
            <CircleUserRound size={20} />
            <ChevronDown size={16} />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo-link">
        <Logo />
      </Link>

      <nav className="navbar-actions">
        <Link to="/login" className="nav-link">
          Iniciar sesión
        </Link>

        <Link to="/registro" className="btn btn-primary btn-small">
          Crear cuenta
        </Link>
      </nav>
    </header>
  );
}