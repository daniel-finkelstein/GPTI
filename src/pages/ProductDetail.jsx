import { Link, useParams } from "react-router-dom";
import { Calendar, MapPin, Star, ShieldCheck } from "lucide-react";
import { mockProducts } from "../data/mockProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="detail-page">
        <p>Producto no encontrado.</p>
        <Link to="/marketplace">Volver al marketplace</Link>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <Link to="/marketplace" className="back-link">
        ← Volver al marketplace
      </Link>

      <section className="detail-layout">
        <div className="detail-gallery">
          <div className="main-product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="thumbnail-row">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="detail-info-card">
          <h1>{product.name}</h1>

          <div className="detail-meta">
            <span>
              <Star size={16} fill="currentColor" /> {product.rating} (
              {product.reviews} reseñas)
            </span>
            <span>•</span>
            <span>
              <MapPin size={16} /> Campus {product.campus}
            </span>
          </div>

          <div className="detail-price">
            {product.price === 0
              ? "Gratis"
              : `$${product.price.toLocaleString("es-CL")}`}
            {product.price !== 0 && <span> por día</span>}
          </div>

          <div className="owner-row">
            <div className="owner-avatar">{product.ownerInitials}</div>
            <div>
              <strong>{product.owner}</strong>
              <p>Estudiante UC · 23 préstamos</p>
            </div>
          </div>

          <div className="availability-box">
            <div>
              <Calendar size={18} />
              <strong>Disponibilidad</strong>
            </div>

            <p>
              {product.available
                ? "Disponible desde el 15 de mayo"
                : "Actualmente no disponible"}
            </p>
          </div>
          <Link
            to="/mis-prestamos"
            className={`btn btn-primary full-width ${!product.available ? "disabled-link" : ""}`}
          >
            Solicitar préstamo
          </Link>

          <p className="protected-text">
            <ShieldCheck size={15} />
            Transacción protegida por PGPU
          </p>
        </div>
      </section>

      <section className="description-card">
        <h2>Descripción</h2>
        <p>{product.description}</p>
      </section>
    </main>
  );
}