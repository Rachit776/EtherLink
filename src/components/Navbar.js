import React from "react";
import "./navbar.css";
import icon from "../assets/icon.svg"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        <a href="/" style={{ marginLeft: "4rem" }}>
          <img
            src={icon}
            width="140"
            height="75"
            className="align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ marginRight: "10rem" }}
          >
            <li style={{ marginLeft: "5%" }} className="nav-item">
              <a className="nav-link" aria-current="page" href="/lib-ebook">
                <strong>Library</strong>
              </a>
            </li>
            <i className="fas fa-book" style={{ marginTop: "2.1%" }}></i>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/lib-notes">
                    Class Notes
                  </a>
                  <a className="dropdown-item" href="/lib-librarian">
                    Librarian
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/foodiegenie">
                <strong>Cafeteria</strong>
              </a>
            </li>
            <i className="fas fa-hamburger" style={{ marginTop: "2.1%" }}></i>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/foodiegenie-orders">
                    Previous Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/foodiegenie-owner">
                    Canteen Owner
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/about">
                <strong>About</strong>
              </a>
            </li>
            <i className="fas fa-home" style={{ marginTop: "2.1%" }}></i>            
            <li className="nav" style={{ marginRight: "1.5%" }}>
              
            </li>
            {/* ========================================  */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/admin">
                <strong>Admin</strong>
              </a>
            </li>
            <i className="fas fa-user-cog" style={{ marginTop: "2.1%" }}></i>
          </ul>
        </div>
      </div>
    </nav>
  );
}
