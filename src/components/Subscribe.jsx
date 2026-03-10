import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Subscribe() {
  const ref = useReveal()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 3000)
  }

  return (
    <section id="subscribe">
      <div ref={ref} className="sub-content reveal">
        <div className="sub-tag">// Будь первым //</div>
        <h2 className="sub-title">
          УЗНАВАЙ<br />О ДРОПАХ<br />ПЕРВЫМ
        </h2>
        <p className="sub-desc">
          Подпишись на уведомления.<br />
          Новые дропы выходят редко — пропустить нельзя.
        </p>
        <form className="sub-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="sub-input"
            placeholder="твой@email.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`sub-btn${done ? ' sub-btn--ok' : ''}`}
          >
            {done ? 'Готово ✓' : 'Войти →'}
          </button>
        </form>
        <div className="sub-note">Никакого спама · Только дропы · Без повторов</div>
      </div>
    </section>
  )
}
