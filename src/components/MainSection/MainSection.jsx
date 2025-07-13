import { SocialLinks } from "../Social/SocialLinks";
import "./MainSection.css";

function MainSection({ maNombre, maParrafo }) {
  return (
    <main className="main-section">
      <div className="main-section__content">

        {/* Lado izquierdo - Texto */}
        <div className="main-section__text">
          <h2 className="main-section__saludo">
            <span className="glow-text">Hola,</span>
          </h2>
          <h2 className="main-section__nombre">{maNombre}</h2>
          <p className="main-section__descripcion">{maParrafo}</p>
          <SocialLinks />
        </div>

        {/* Lado derecho - Imagen */}
        <div className="main-section__image-wrapper">
          <img
            src="https://i.postimg.cc/XNDWtJ69/2.png"
            alt="Foto de Jaqueline"
            className="main-section__image"
          />
        </div>
      </div>

      {/* Parte inferior - Tarjeta y descripción */}
      <div className="main-section__bottom">
        <div className="main-section__card neon-card">
          <h3>Innovación aplicada a la realidad</h3>
          <p>
            Apasionada por la tecnología y el desarrollo de soluciones digitales integrales, con el firme propósito de generar un impacto positivo en instituciones educativas, negocios y usuarios, a través de herramientas innovadoras, funcionales y orientadas a la mejora continua.
          </p>
        </div>

        <div className="main-section__bio">
          <h3>¿Quién soy yo?</h3>
          <p>
            Soy egresada de la carrera de Computación e Informática, con formación en desarrollo web, gestión de bases de datos, redes, diseño de interfaces, automatización de procesos y soporte técnico. Mi enfoque es práctico, con orientación al detalle, la eficiencia y la mejora continua.
          </p>
        </div>
      </div>
    </main>
  );
}

export { MainSection };
