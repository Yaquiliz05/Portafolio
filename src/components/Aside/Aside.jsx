import { useState, useEffect } from "react";
import "./Aside.css";

function Aside({ tecnologia }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = tecnologia.length;

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return [tecnologia[prevIndex], tecnologia[currentIndex], tecnologia[nextIndex]];
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // auto avanzar cada 5s
    return () => clearInterval(interval);
  }, );

  const visibleCards = getVisibleCards();

  return (
    <aside className="aside-carousel">
      <h3 className="aside-carousel__title">Tecnologías y habilidades</h3>
      <div className="aside-carousel__container">
        <button className="aside-carousel__arrow" onClick={handlePrev}>&lt;</button>

        <div className="aside-carousel__track">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`aside-carousel__card ${index === 1 ? "active" : "inactive"}`}
            >
              <img src={card.imagen} alt={card.nombre} className="aside-carousel__image" />
              <h4 className="aside-carousel__name">{card.nombre}</h4>
              <p className="aside-carousel__description">{card.descripcion}</p>
            </div>
          ))}
        </div>

        <button className="aside-carousel__arrow" onClick={handleNext}>&gt;</button>
      </div>
    </aside>
  );
}

export { Aside };
