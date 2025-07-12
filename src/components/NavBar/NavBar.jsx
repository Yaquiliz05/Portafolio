import "./NavBar.css"

function NavBar({ menu }) {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        {menu.map((elemento, index) => (
          <li key={index} className="navbar__item">
            <a
              href={elemento.href}
              className={`navbar__link ${
                window.location.pathname === elemento.href
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              {elemento.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { NavBar }
