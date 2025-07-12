import "./MainSection.css";

function MainSection({ maNombre, maParrafo }) {
  return (
    <main className="main-section">
      <div className="main-section__content">
        {/* Texto lado izquierdo */}
        <div className="main-section__text">
          <h2 className="main-section__saludo">
            <span className="glow-text">Hola,</span>
          </h2>
          <h2 className="main-section__nombre">{maNombre}</h2>
          <p className="main-section__descripcion">{maParrafo}</p>
        </div>

        {/* Tarjeta lado derecho */}
        <div className="main-section__card neon-card">
          <h3>Innovación aplicada a la realidad</h3>
          <p>
             Apasionada por la tecnología y el desarrollo de soluciones digitales integrales, con el firme propósito de generar un impacto positivo en instituciones educativas, negocios y usuarios, a través de herramientas innovadoras, funcionales y orientadas a la mejora continua.
          </p>
        </div>
      </div>
    </main>
  );
}

export { MainSection };
