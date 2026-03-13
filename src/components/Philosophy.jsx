import useReveal from '../hooks/useReveal'

export default function Philosophy() {
  const textRef = useReveal()
  const imgRef = useReveal(0.2)

  return (
    <section id="philosophy">
      <div ref={textRef} className="philo-text reveal">
        <div className="s-label">Философия</div>
        <h2 className="philo-quote">
          Одежда<br />
          из андеграунда.<br />
          <em>Не тренд.</em><br />
          Состояние.
        </h2>
        <p className="philo-body">
          «Расхристанно» — это не про моду. Это про состояние.<br /><br />
          Каждая вещь создаётся вручную — в единственном экземпляре
          или малым тиражом. Никаких повторов. Никакого масс-производства.<br /><br />
          Мы шьём для тех, кто устал от трендов. Для тех, кто носит
          одежду как второй панцирь. Для тех, кто dead inside —
          но выглядит как надо.
        </p>
        <div className="philo-stats">
          <div>
            <div className="stat-num">∞</div>
            <div className="stat-lbl">Каждая вещь уникальна</div>
          </div>
          <div>
            <div className="stat-num">0</div>
            <div className="stat-lbl">Масс-производства</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-lbl">Ручная работа</div>
          </div>
          <div>
            <div className="stat-num">AU</div>
            <div className="stat-lbl">Андеграунд культура</div>
          </div>
        </div>
      </div>

      <div ref={imgRef} className="philo-img-wrap reveal">
        <img
          src={`${import.meta.env.BASE_URL}catalog/t-shirts/IMG_1587.jpeg`}
          alt="Философия бренда"
          loading="lazy"
        />
        <div className="philo-img-frame" />
        <div className="philo-img-caption">DEAD INSIDE · РАСХРИСТАННО</div>
      </div>
    </section>
  )
}
