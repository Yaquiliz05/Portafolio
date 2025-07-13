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
    imagen: "https://i.postimg.cc/L82skjqX/Purple-White-Simple-Thank-You-Card.jpg"
  },
  {
    nombre: "Bases de Datos",
    descripcion:
      "MySQL, modelado entidad-relación, consultas complejas y procedimientos almacenados.",
    imagen: "https://i.postimg.cc/x81RbXKF/Purple-White-Simple-Thank-You-Card.png"
  },
  {
    nombre: "Diseño de Interfaces",
    descripcion:
      "UI/UX, accesibilidad, wireframes, diseño visual y prototipos interactivos.",
    imagen: "https://i.postimg.cc/zBX5jbsX/Purple-White-Simple-Thank-You-Card-3.png"
  },
  {
    nombre: "Redes y soporte técnico",
    descripcion:
      "Configuración de redes, mantenimiento de equipos y gestión de software.",
    imagen: "https://i.postimg.cc/pL4qCg39/Purple-White-Simple-Thank-You-Card-5.png"
  },
  {
    nombre: "Lógica de programación",
    descripcion:
      "Solución de problemas con algoritmos, pseudocódigo, estructuras de control y datos.",
    imagen: "https://i.postimg.cc/DZZksVGS/Purple-White-Simple-Thank-You-Card-4.png"
  },
 {
  nombre: "Diseño Gráfico Digital",
  descripcion: "Uso de Adobe Photoshop, Illustrator e InDesign para crear piezas visuales, interfaces y contenido gráfico.",
  imagen: "https://i.postimg.cc/Z5pdk2Cv/Purple-White-Simple-Thank-You-Card-6.png"
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
