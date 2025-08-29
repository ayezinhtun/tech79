import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar p-0 navbar-expand-lg fixed-top bg-white border-bottom"
      style={{ borderColor: "#dee2e6" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "60px", objectFit: "cover" }}
          />
        </Link>

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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/"
                style={isActive("/") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/about"
                style={isActive("/about") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/industries"
                style={isActive("/industries") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Industries Served
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/partners"
                style={isActive("/partners") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Partners
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/services"
                style={isActive("/services") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/support"
                style={isActive("/support") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Supports
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link me-3 fw-semibold"
                to="/contact"
                style={isActive("/contact") ? { color: "#1d70b7" } : { color: "#6c757d" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
