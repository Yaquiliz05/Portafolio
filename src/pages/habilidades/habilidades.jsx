import { useEffect, useRef, useState } from "react";
import {
  MdWeb,
  MdStorage,
  MdPsychology,
  MdDesignServices,
  MdSettings,
} from "react-icons/md";
import "./habilidades.css";

function Habilidades() {
  const categorias = [
    {
      icono: <MdWeb className="habilidades__icono" />,
      nombre: "Desarrollo Web",
      tiempo: "Más de 2 años",
    },
    {
      icono: <MdStorage className="habilidades__icono" />,
      nombre: "Bases de Datos",
      tiempo: "Más de 1 año",
    },
    {
      icono: <MdPsychology className="habilidades__icono" />,
      nombre: "Lógica y Programación",
      tiempo: "Más de 2 años",
    },
    {
      icono: <MdDesignServices className="habilidades__icono" />,
      nombre: "Diseño Gráfico y UI",
      tiempo: "Más de 1 año",
    },
    {
      icono: <MdSettings className="habilidades__icono" />,
      nombre: "Soporte técnico y redes",
      tiempo: "Más de 2 años",
    },
  ];

  const habilidades = [
    { nombre: "HTML", nivel: 90 },
    { nombre: "CSS", nivel: 85 },
    { nombre: "JavaScript", nivel: 70 },
    { nombre: "React", nivel: 65 },
    { nombre: "MySQL", nivel: 75 },
    { nombre: "Adobe Photoshop", nivel: 80 },
    { nombre: "Git / GitHub", nivel: 65 },
    { nombre: "Canva", nivel: 90 },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(1); // activa las barras
          observer.disconnect(); // solo una vez
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="habilidades">
      <h3 className="habilidades__title">💪 Mis habilidades técnicas</h3>
      <div className="habilidades__grid" ref={containerRef}>
        <div className="habilidades__categorias">
          {categorias.map((cat, i) => (
            <div key={i} className="habilidades__categoria">
              {cat.icono}
              <div>
                <strong className="habilidades__nombre">{cat.nombre}</strong>
                <p className="habilidades__tiempo">{cat.tiempo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="habilidades__barras">
          {habilidades.map((hab, i) => (
            <div key={i} className="habilidades__barra">
              <div className="habilidades__etiqueta">
                <span>{hab.nombre}</span>
                <span>{hab.nivel}%</span>
              </div>
              <div className="habilidades__track">
                <div
                  className="habilidades__fill"
                  style={{
                    width: activeIndex !== -1 ? `${hab.nivel}%` : "0%",
                    transition: "width 1.3s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div>
            <h3>¿Te gustaría ver cómo convierto ideas en soluciones?</h3>
            <p>Entonces acompáñame en este recorrido por todo lo que sé, lo que he aprendido con pasión, lo que imagino con visión…
y lo que puedo construir contigo para transformar necesidades en experiencias,
desafíos en oportunidades y proyectos en resultados concretos.</p>
        </div>
      </div>
    </section>
  );
}

export { Habilidades };
