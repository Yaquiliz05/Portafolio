import { useEffect, useState } from "react";
import { MdWeb, MdDesignServices, MdEmojiObjects } from "react-icons/md";
import "./Proyectos.css";

function Proyectos() {
  const [count, setCount] = useState({
    proyectos: 0,
    disenos: 0,
    ideas: 0,
  });

  useEffect(() => {
    const metas = { proyectos: 10, disenos: 14, ideas: 100 };
    const interval = setInterval(() => {
      setCount((prev) => {
        const nuevos = { ...prev };
        let terminado = true;
        for (const key in metas) {
          if (prev[key] < metas[key]) {
            nuevos[key]++;
            terminado = false;
          }
        }
        if (terminado) clearInterval(interval);
        return nuevos;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const proyectos = [
    {
      titulo: "Día del Padre",
      descripcion: "Diseño especial para redes. Publicado en Facebook.",
      imagen: "https://scontent.fcja1-1.fna.fbcdn.net/v/t39.30808-6/506464975_1277923964334531_7615053056288783938_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_UK4RS69ru2v4eKCoLvQLszkaJnd2xbKzORomd3bFsgBlQReM7nmzGPwzDlddtlyFS397NFhOISzV1hspYD7P&_nc_ohc=j-MSEnTV5N8Q7kNvwH0fokC&_nc_oc=AdlQK_50UAnYulwXNnIh6UaVnxkbwQvet9LghcQGNQdd_moot9cegYUljGv7VwVVWkQEEY4KCctDr1zbtvw87hom&_nc_zt=23&_nc_ht=scontent.fcja1-1.fna&_nc_gid=EZpWYULSCyKdUkmOQYxetw&oh=00_AfRNDd_XSV4oIwA5xW3jLfbDMccOiwd4v4QpCoqNPOl6vg&oe=687BB21D",
      enlace: "https://web.facebook.com/share/p/1F8tKgNo2p/"
    },
    {
      titulo: "Publicidad institucional",
      descripcion: "Invitación a pregón deportivo",
      imagen: "https://scontent.fcja1-1.fna.fbcdn.net/v/t39.30808-6/502523390_1264600829000178_5224108703572730061_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_aid=0&_nc_eui2=AeHt020XLR8KywA9H_Jh2ih8miN_P3GgI_WaI38_caAj9ROlKhsacDIMOoJhEKz3CQiIPCw5V9_VTVPY80tuvvzH&_nc_ohc=NXXDIFkv00cQ7kNvwHfbCS2&_nc_oc=AdkfaSFL_kmkvfjsiMq9MPxKLRYSFnaZfAlwadBph2IrpKFlzez4asgmZtBkwuJnhr3Qnw2ZCLrMELSjMrhHbEBw&_nc_zt=23&_nc_ht=scontent.fcja1-1.fna&_nc_gid=1Q0gwCxK8fsXNqUJ5FY9MQ&oh=00_AfTx4GCyeHDTNNdo9iNguz9QKCs9nv0oacPOkF5AAktPLA&oe=687BA4E8",
      enlace: "https://web.facebook.com/share/p/1959h7u6u7/"
    },
    {
      titulo: "Rediseño Web",
      descripcion: "Sitio responsivo con React y CSS personalizado.",
      imagen: "https://i.pinimg.com/1200x/69/19/5a/69195a50ca61c30a598b6e0b504954d2.jpg",
      enlace: "#"
    },
    {
      titulo: "Sistema Biblioteca",
      descripcion: "CRUD con React, Node.js y MySQL.",
      imagen: "https://i.pinimg.com/736x/3a/c9/76/3ac976fc9db5660366291d473dada239.jpg",
      enlace: "#"
    },
    {
      titulo: "App Veterinaria",
      descripcion: "Gestión de pacientes, citas y tratamientos.",
      imagen: "https://i.pinimg.com/736x/ae/d8/31/aed8316466ea7b62590c0e2a3c330f89.jpg",
      enlace: "#"
    },
    {
      titulo: "Landing educativa",
      descripcion: "Página informativa moderna y animada para cursos.",
      imagen: "https://i.pinimg.com/736x/a4/7c/bc/a47cbc87727dd4e539198e97d78ea250.jpg",
      enlace: "#"
    },
  ];

  const testimonios = [
    {
      nombre: "Mariana Castillo",
      mensaje: "El trabajo de Jaqueline fue impecable. Captó exactamente lo que queríamos y lo plasmó con gran profesionalismo.",
      imagen: "https://i.pinimg.com/736x/3b/7b/1d/3b7b1d1ff28ead7fb9f42d49cbb92010.jpg"
    },
    {
      nombre: "Carlos Torre",
      mensaje: "La dedicación y la creatividad que demostró fueron claves para el éxito de nuestro proyecto. ¡Gracias!",
      imagen: "https://i.pinimg.com/1200x/29/23/16/292316c5a7e0bbbb96bdff5c95448e81.jpg"
    }
  ];

  return (
    <section className="proyectos">
      <div className="proyectos__intro">
        <h2 className="proyectos__titulo">Proyectos y Diseños</h2>
        <p className="proyectos__texto">
          Aquí encontrarás una selección de mis trabajos más representativos, desde campañas gráficas hasta desarrollos web funcionales. ¡Cada uno tiene su historia!
        </p>
      </div>

      <div className="proyectos__grid">
        {proyectos.map((proyecto, index) => (
          <a
            href={proyecto.enlace}
            key={index}
            className="proyectos__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="proyectos__imagen"
            />
            <h3 className="proyectos__nombre">{proyecto.titulo}</h3>
            <p className="proyectos__descripcion">{proyecto.descripcion}</p>
          </a>
        ))}
      </div>

      <div className="logros">
        <h2 className="logros__titulo">Logros Destacados</h2>
        <p className="logros__intro">
          Cada paso ha sido una oportunidad para mejorar, crear y aprender. Estos números lo reflejan:
        </p>

        <div className="logros__contenedor">
          <div className="logros__item">
            <h3 className="logros__numero glow-purple">
              <MdWeb /> {count.proyectos}+
            </h3>
            <p className="logros__descripcion">Proyectos web desarrollados</p>
          </div>
          <div className="logros__item">
            <h3 className="logros__numero glow-pink">
              <MdDesignServices /> {count.disenos}+
            </h3>
            <p className="logros__descripcion">Diseños gráficos publicados</p>
          </div>
          <div className="logros__item">
            <h3 className="logros__numero glow-blue">
              <MdEmojiObjects /> {count.ideas}%
            </h3>
            <p className="logros__descripcion">Compromiso con cada idea</p>
          </div>
        </div>
      </div>

      <div className="testimonios">
        <h2 className="testimonios__titulo">Testimonios</h2>
        <p className="testimonios__intro">
          Algunas palabras de personas con las que he tenido el placer de colaborar.
        </p>

        <div className="testimonios__contenedor">
          {testimonios.map((testimonio, index) => (
            <div className="testimonios__card" key={index}>
              <img
                src={testimonio.imagen}
                alt={testimonio.nombre}
                className="testimonios__imagen"
              />
              <p className="testimonios__mensaje">“{testimonio.mensaje}”</p>
              <h4 className="testimonios__nombre"> {testimonio.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
