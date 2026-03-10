export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-img-side">
        <img
          src="/catalog/switshot/IMG_1599.jpeg"
          alt="Расхристанно — коллекция"
        />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">Новый дроп · Март 2026</div>
        <h1 className="hero-title">
          Создано<br />
          вручную.<br />
          <span className="accent">Не для<br />всех.</span>
        </h1>
        <p className="hero-subtitle">
          Каждая вещь — ограниченный тираж.<br />
          Никакого масс-производства.<br />
          Только редкие дропы.
        </p>
        <a href="#new-drop" className="hero-cta">
          <span>Смотреть дроп →</span>
        </a>
        <div className="hero-ghost-num">01</div>
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        Скролл
      </div>
    </section>
  )
}
