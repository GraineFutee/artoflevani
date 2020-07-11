import React, { useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [Item, activeItem] = useState(null);
  const [burger, activeBurger] = useState(false);
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ zIndex: "1000" }}
    >
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
          <div className={`navbar-item has-dropdown is-hoverable`}>
            <a href="/gallery" className="navbar-link">
              Gallery
            </a>
            <div className="navbar-dropdown">
              {props.albums &&
                props.albums.map((album) => (
                  <a href={`/gallery/${album}`} className="navbar-item">
                    {album}
                  </a>
                ))}
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
