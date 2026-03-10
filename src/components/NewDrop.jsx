import { dropProducts } from '../data/products'
import ProductCard from './ProductCard'
import useReveal from '../hooks/useReveal'

export default function NewDrop() {
  const headerRef = useReveal()

  return (
    <section id="new-drop">
      <div ref={headerRef} className="drop-header reveal">
        <div>
          <div className="s-label">Новый дроп</div>
          <h2 className="s-title">DROP 001</h2>
        </div>
        <div className="drop-meta">
          <div className="drop-date">Март 2026</div>
          <div className="drop-count">12</div>
          <div className="drop-count-label">штук в тираже</div>
        </div>
      </div>

      <div className="products-grid">
        {dropProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            featured={product.featured}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
