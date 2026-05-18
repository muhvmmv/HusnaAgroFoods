import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProcessingQuality from './pages/ProcessingQuality'
import Team from './pages/Team'
import Contact from './pages/Contact'

/**
 * App shell: client-side routes only (no backend).
 * All pages share MainLayout (nav, animated outlet, footer).
 */
function App() {
  return (
    <BrowserRouter basename="HusnaAgroFoods">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/processing" element={<ProcessingQuality />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
