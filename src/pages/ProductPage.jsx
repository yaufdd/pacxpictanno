import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { allProducts, PHONE, PHONE_LINK, TELEGRAM } from '../data/products'

export default function ProductPage() {
  const { id } = useParams()
  const product = allProducts.find((p) => p.id === id)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveIdx(0)
    if (product) document.title = `${product.name} — РАСХРИСТАННО`
    return () => { document.title = 'РАСХРИСТАННО — Андеграунд дропы' }
  }, [product])

  if (!product) {
    return (
      <>
        <nav className="nav-product">
          <Link to="/" className="nav-logo">РАСХРИСТАННО</Link>
          <Link to="/" className="nav-back">Назад в каталог</Link>
        </nav>
        <div className="not-found">
          <h1>404</h1>
          <p>Товар не найден или уже раскуплен.</p>
          <Link to="/">← Вернуться в каталог</Link>
        </div>
      </>
    )
  }

  const hasImages = product.images && product.images.length > 0
  const hasMultiple = product.images && product.images.length > 1
  const currentSrc = hasImages ? product.images[activeIdx].src : product.image

  const descLines = product.desc.split('\n').map((line, i) => (
    <span key={i}>{line}<br /></span>
  ))

  return (
    <>
      <nav className="nav-product">
        <Link to="/" className="nav-logo">РАСХРИСТАННО</Link>
        <Link to="/" className="nav-back">Назад в каталог</Link>
      </nav>

      <div className="product-page">
        {/* ── Фото ── */}
        <div className="product-visual">
          <img
            key={currentSrc}
            src={currentSrc}
            alt={product.name}
            className="product-visual-img"
          />
          <div className="product-visual-overlay" />
          <div className="product-visual-num">{product.num}</div>

          {/* Переключатель 1 / 2 */}
          {hasImages && (
            <div className="img-switcher">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`img-switcher-btn${activeIdx === i ? ' active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  {img.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Инфо ── */}
        <div className="product-detail-info">
          <div className="product-breadcrumb">
            <Link to="/">Каталог</Link>
            <span>→</span>
            <span>{product.category}</span>
          </div>

          <div className="product-cat-tag">{product.category}</div>
          <h1 className="product-detail-title">{product.name}</h1>
          <div className="product-divider" />

          <div className="product-price-block">
            <span className="product-detail-price">{product.price}</span>
            <span className="product-currency">₽</span>
          </div>
          <div className="product-stock-line">
            <span className="stock-dot" />
            {product.stockLabel} · Ограниченный тираж
          </div>

          <p className="product-detail-desc">{descLines}</p>

          {/* Миниатюры — всегда если есть images */}
          {hasImages && (
            <div className="img-thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`img-thumb${activeIdx === i ? ' active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <img src={img.src} alt={img.label} />
                  <span>{img.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="order-block">
            <div className="order-label">// Заказать по телефону</div>
            <a href={PHONE_LINK} className="order-phone">{PHONE}</a>
            <div className="order-note">Позвони или напиши — ответим быстро</div>
            <a href={PHONE_LINK} className="order-btn">
              <span>Заказать →</span>
            </a>
            <a href={TELEGRAM} className="order-tg" target="_blank" rel="noreferrer">
              Написать в Telegram
            </a>
          </div>

          <div className="product-tags">
            {product.tags.map((tag) => (
              <span key={tag} className="product-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
