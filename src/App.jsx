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
  const tecnologia = [   {
    nombre: "Desarrollo Web",
    descripcion:
      "HTML, CSS, JavaScript, React, diseño responsivo y buenas prácticas de desarrollo.",
    imagen: "URL-DE-TU-IMAGEN-DESARROLLO-WEB"
  },
  {
    nombre: "Bases de Datos",
    descripcion:
      "MySQL, modelado entidad-relación, consultas complejas y procedimientos almacenados.",
    imagen: "URL-DE-TU-IMAGEN-BASES-DATOS"
  },
  {
    nombre: "Diseño de Interfaces",
    descripcion:
      "UI/UX, accesibilidad, wireframes, diseño visual y prototipos interactivos.",
    imagen: "URL-DE-TU-IMAGEN-UIUX"
  },
  {
    nombre: "Redes y soporte técnico",
    descripcion:
      "Configuración de redes, mantenimiento de equipos y gestión de software.",
    imagen: "URL-DE-TU-IMAGEN-REDES"
  },
  {
    nombre: "Lógica de programación",
    descripcion:
      "Solución de problemas con algoritmos, pseudocódigo, estructuras de control y datos.",
    imagen: "URL-DE-TU-IMAGEN-LOGICA"
  },
  {
    nombre: "Ofimática y TICs Educativas",
    descripcion:
      "Herramientas digitales aplicadas a contextos educativos y administrativos.",
    imagen: "URL-DE-TU-IMAGEN-TICS"
  }
    ]
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
              <Aside tecnologia={tecnologia} />
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
