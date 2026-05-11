import { Link } from "react-router-dom";

export default function MyLoans() {
  return (
    <main className="simple-page">
      <section className="simple-card">
        <h1>Mis préstamos</h1>
        <p>
          Tu solicitud fue enviada correctamente. El prestamista deberá aprobarla
          o rechazarla manualmente.
        </p>

        <div className="loan-status-box">
          <span className="status-badge pending">Pendiente</span>
          <h2>Calculadora Casio FX-991</h2>
          <p>Solicitud enviada a María González.</p>
        </div>

        <Link to="/marketplace" className="btn btn-primary">
          Volver al marketplace
        </Link>
      </section>
    </main>
  );
}