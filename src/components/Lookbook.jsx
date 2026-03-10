import { Link } from 'react-router-dom'
import { lookbookImages } from '../data/products'
import useReveal from '../hooks/useReveal'

export default function Lookbook() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section id="lookbook">
      <div className="lookbook-head">
        <div ref={labelRef} className="s-label reveal">Lookbook</div>
        <h2 ref={titleRef} className="s-title reveal">
          КАЖДАЯ ВЕЩЬ —<br />СВОЯ ИСТОРИЯ
        </h2>
      </div>
      <div ref={gridRef} className="lookbook-grid reveal">
        {lookbookImages.map((item, i) => (
          <div key={i} className="lb-item">
            <img src={item.src} alt={`Lookbook ${i + 1}`} loading="lazy" />
            <div className="lb-hover-layer">
              <Link to={`/product/${item.productId}`} className="product-action">
                Смотреть
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
