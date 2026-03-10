const ITEMS = [
  'АНДЕГРАУНД',
  'ОГРАНИЧЕННЫЙ ТИРАЖ',
  'РУЧНАЯ РАБОТА',
  'НЕ ТРЕНД. СОСТОЯНИЕ.',
  'DEAD INSIDE',
  'РАСХРИСТАННО',
]

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span key={i} className="marquee-item">
            {text} <span className="marquee-dot">✕</span>
          </span>
        ))}
      </div>
    </div>
  )
}
