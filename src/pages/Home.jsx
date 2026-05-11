import { Link } from "react-router-dom";
import { Box, BookOpen, Sparkles, Users } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <section className="hero-content">
          <h1>
            Encuentra recursos <br />
            universitarios fácilmente
          </h1>

          <p>Préstamos y arriendos entre estudiantes UC de manera segura.</p>

          <div className="hero-actions">
            <Link to="/registro" className="btn btn-primary">
              Comenzar ahora
            </Link>

            <Link to="/marketplace" className="btn btn-secondary">
              Explorar recursos
            </Link>
          </div>
        </section>

        <section className="hero-panel">
          <div className="feature-card">
            <Box size={38} />
            <span>Calculadoras</span>
          </div>

          <div className="feature-card">
            <BookOpen size={38} />
            <span>Libros</span>
          </div>

          <div className="feature-card">
            <Sparkles size={38} />
            <span>Tablets</span>
          </div>

          <div className="feature-card">
            <Users size={38} />
            <span>+ 500 usuarios</span>
          </div>
        </section>
      </main>
    </div>
  );
}