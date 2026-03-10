import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </HashRouter>
  )
}
