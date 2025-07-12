import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { MainSection } from './components/MainSection/MainSection.jsx'
import { Aside } from './components/Aside/Aside.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Páginas adicionales
import Proyectos from './pages/Proyectos/Proyectos.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'

function App() {
  const titulo = 'Jaqueline.dev'
  const menu = [
    { text: 'Inicio', href: '/' },
    { text: 'Proyectos', href: '/proyect' },
    { text: 'Contacto', href: '/contact' },
  ]

  const maNombre = "soy Jaqueline Goicochea"
  const maParrafo = "Profesional técnica en Computación e Informática, orientada a proyectos tecnológicos."
  const tecnología = [ ]
  const footer1 = '© 2025 Jaqueline Goicochea. Todos los derechos reservados.'

  return (
    <Router>
      <NavBar titulo={titulo} menu={menu} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSection maNombre={maNombre} maParrafo={maParrafo} />
              <Aside pacientes={tecnología} />
            </>
          }
        />
        <Route path="/proyect" element={<Proyectos />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
      <Footer footer1={footer1} />
    </Router>
  )
}

export default App
