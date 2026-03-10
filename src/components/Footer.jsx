import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-logo">РАСХРИСТАННО</Link>
          <p className="footer-desc">
            Андеграунд бренд одежды ручной работы.
            Ограниченные тиражи. Никакого масс-производства.
            Одежда из андеграунда — для тех, кому нужно больше, чем просто вещь.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Бренд</div>
          <ul className="footer-links">
            <li><a href="#philosophy">О нас</a></li>
            <li><a href="#new-drop">Дропы</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Информация</div>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 РАСХРИСТАННО · Все права защищены</span>
        <div className="footer-social">
          <a href="#">VK</a>
          <a href="#">TG</a>
          <a href="#">INST</a>
        </div>
      </div>
    </footer>
  )
}
