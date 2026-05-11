import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { mockProducts } from "../data/mockProducts";

const categories = [
  "Tecnología",
  "Libros",
  "Herramientas",
  "Deportes",
  "Laboratorio",
  "Electrónica",
  "Otros",
];

export default function Marketplace() {
  return (
    <div className="marketplace-page">
      <Navbar variant="marketplace" />

      <main className="marketplace-layout">
        <aside className="sidebar">
          <h3>Categorías</h3>

          <div className="sidebar-list">
            {categories.map((category) => (
              <button key={category}>{category}</button>
            ))}
          </div>

          <div className="sidebar-divider" />

          <h3>Filtros</h3>

          <label className="filter-option">
            <input type="checkbox" />
            Gratuitos
          </label>

          <label className="filter-option">
            <input type="checkbox" />
            Disponibles ahora
          </label>

          <label className="filter-option">
            <input type="checkbox" />
            Campus San Joaquín
          </label>

          <label className="filter-option">
            <input type="checkbox" />
            Casa Central
          </label>

        <Link to="/mis-prestamos" className="sidebar-link">
        Mis préstamos
        </Link>
        </aside>

        <section className="catalog-section">
          <div className="catalog-header">
            <h1>Marketplace UC</h1>
            <p>Explora {mockProducts.length} recursos disponibles</p>
          </div>

          <div className="product-grid">
            {mockProducts.map((product) => (
              <Link
                to={`/producto/${product.id}`}
                className="product-card"
                key={product.id}
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />

                  {!product.available && (
                    <span className="unavailable-badge">No disponible</span>
                  )}

                  <button className="heart-button" type="button">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h2>{product.name}</h2>

                  <div className="product-meta">
                    <span>
                      <Star size={15} fill="currentColor" /> {product.rating}
                    </span>
                    <span>•</span>
                    <span>{product.owner}</span>
                  </div>

                  <div className="product-footer">
                    <span className="campus">
                      <MapPin size={15} />
                      {product.campus}
                    </span>

                    <strong>
                      {product.price === 0
                        ? "Gratis"
                        : `$${product.price.toLocaleString("es-CL")}`}
                      {product.price !== 0 && <small> por día</small>}
                    </strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}