import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function ProductCard({ product, featured = false, delay = 0 }) {
  const ref = useReveal(delay)

  return (
    <div ref={ref} className={`product-card reveal${featured ? ' featured' : ''}`}>
      <div className="product-img-wrap">
        <img
          src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <div className="product-cat">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-row">
          <span className="product-price">{product.price} ₽</span>
          <span className="product-stock">{product.stockLabel}</span>
        </div>
      </div>
      <div className="product-hover-layer">
        <Link to={`/product/${product.id}`} className="product-action">
          Смотреть
        </Link>
      </div>
    </div>
  )
}
