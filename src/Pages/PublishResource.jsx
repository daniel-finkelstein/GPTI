import { Link, useNavigate } from "react-router-dom";

export default function PublishResource() {
  const navigate = useNavigate();

  const handlePublish = () => {
    navigate("/marketplace");
  };

  return (
    <main className="publish-page">
      <Link to="/marketplace" className="back-link">
        ← Cancelar publicación
      </Link>

      <section className="publish-container">
        <h1>Publicar recurso</h1>
        <p>Completa los pasos para publicar tu recurso</p>

        <div className="steps">
          <span className="active">1</span>
          <div />
          <span>2</span>
          <div />
          <span>3</span>
          <div />
          <span>4</span>
        </div>

        <form className="publish-card">
          <h2>Información básica</h2>

          <label>
            Título del recurso
            <input type="text" placeholder="Calculadora Casio FX-82" />
          </label>

          <label>
            Categoría
            <select>
              <option>Electrónica</option>
              <option>Tecnología</option>
              <option>Libros</option>
              <option>Herramientas</option>
              <option>Deportes</option>
              <option>Laboratorio</option>
            </select>
          </label>

          <label>
            Descripción
            <textarea placeholder="Calculadora casio ideal para cálculos I, II y III" />
          </label>

          <label>
            Campus de retiro
            <select>
              <option>San Joaquín</option>
              <option>Casa Central</option>
              <option>Lo Contador</option>
              <option>Oriente</option>
            </select>
          </label>

          <div className="form-actions">
            <button className="btn btn-primary" type="button" onClick={handlePublish}>
              Publicar recurso
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}