import React, { useState } from "react";

export default function Navbar(props) {
  const [Item, activeItem] = useState(null);
  const [burger, activeBurger] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          ART OF LEVANI
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${burger && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => activeBurger(!burger)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burger && "is-active"}`}
      >
        <div className="navbar-end">
          <div className="navbar-item is-tab has-dropdown is-hoverable">
            <a className="navbar-link" href="/gallery">
              Gallery
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">CityScape</a>
              <a className="navbar-item">LandScape</a>
              <a className="navbar-item">Portraits</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">All</a>
            </div>
          </div>

          <a
            className={`navbar-item is-tab ${
              props.page === "about_me" && "is-active"
            }`}
            href="/about_me"
          >
            About me
          </a>
          <a
            className={`navbar-item is-tab  ${
              props.page === "contact" && "is-active"
            }`}
            href="/contact"
          >
            Price & Contact
          </a>
        </div>
      </div>
    </nav>
  );
}