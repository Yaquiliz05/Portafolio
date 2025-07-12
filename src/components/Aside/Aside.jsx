import "./Aside.css"

function Aside({ pacientes }) {
  return (
    <aside className="aside-carousel">
      {pacientes.map((paciente, index) => (
        <div key={index} className="card">
          <img src={paciente.imagen} alt={`Imagen de ${paciente.nombre}`} />
          <h4>{paciente.nombre}</h4>
          <p>{paciente.descripcion}</p>
        </div>
      ))}
    </aside>
  );
}

export { Aside };
