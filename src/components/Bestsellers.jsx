import { Link } from 'react-router-dom'
import { bestsellers } from '../data/products'
import useReveal from '../hooks/useReveal'

export default function Bestsellers() {
  const titleRef = useReveal()
  const labelRef = useReveal()
  const linkRef = useReveal()

  return (
    <section id="bestsellers">
      <div className="bs-header">
        <div>
          <div ref={labelRef} className="s-label reveal">Бестселлеры</div>
          <h2 ref={titleRef} className="s-title reveal">ВСЕГДА<br />В ДРОПЕ</h2>
        </div>
        <a ref={linkRef} href="#" className="bs-see-all reveal">Весь каталог →</a>
      </div>

      <div className="bs-grid">
        {bestsellers.map((item, i) => (
          <BsCard key={item.id} item={item} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

function BsCard({ item, delay }) {
  const ref = useReveal(delay)

  return (
    <div ref={ref} className="bs-card reveal">
      <div className="bs-img">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="bs-info">
        <div className="bs-name">{item.name}</div>
        <div className="bs-price">{item.price} ₽</div>
      </div>
      {item.badge && <div className="bs-badge">{item.badge}</div>}
      <div className="bs-hover-layer">
        <Link to={`/product/${item.id}`} className="product-action">
          Смотреть
        </Link>
      </div>
    </div>
  )
}
