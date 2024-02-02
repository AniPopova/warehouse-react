import { useState } from "react";
import "./navbar.style"

interface NavBarProps {
  navItems: string[];
}

function NavBar({ navItems }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse
         navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href="#"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>

        </div>
    </nav>
  );
}

export default NavBar;