import { useState } from "react";
import { SocialLinks } from "../../components/Social/SocialLinks";
import "./Contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!form.email.trim()) {
      nuevosErrores.email = "El correo electrónico es obligatorio.";
    } else if (!form.email.endsWith("@gmail.com")) {
      nuevosErrores.email = "El correo debe terminar en @gmail.com.";
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nuevosErrores;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();

    if (Object.keys(nuevosErrores).length === 0) {
      alert("¡Mensaje enviado con éxito! 🚀");
      setForm({ nombre: "", email: "", mensaje: "" });
      setErrores({});
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__title">¿Conectamos?</h2>
          <p className="contact__text">
            Si tienes una idea, un proyecto en mente o simplemente quieres saludar,
            estaré encantada de leerte. Este es el primer paso para crear algo increíble juntos.
          </p>
          <div className="contact__social">
            <p className="contact__social-text">También puedes encontrarme en:</p>
            <SocialLinks />
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
            {errores.nombre && <span className="contact__error">{errores.nombre}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tunombre@gmail.com"
            />
            {errores.email && <span className="contact__error">{errores.email}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              rows="5"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
            />
            {errores.mensaje && <span className="contact__error">{errores.mensaje}</span>}
          </div>

          <button type="submit" className="contact__btn">Enviar mensaje </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
