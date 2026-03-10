import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav-logo">РАСХРИСТАННО</Link>
      <ul className="nav-links">
        <li><a href="#new-drop">Дроп</a></li>
        <li><a href="#bestsellers">Каталог</a></li>
        <li><a href="#lookbook">Lookbook</a></li>
        <li><a href="#philosophy">О бренде</a></li>
      </ul>
    </nav>
  )
}
