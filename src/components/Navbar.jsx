import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="navbar p-0 navbar-expand-lg bg-white border-bottom fixed-top" style={{borderColor: "#dee2e6"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >
         <img src={logo} alt="" style={{ width: '70px', height: '60px' , objectFit: 'cover' }}></img>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
            
            <li className="nav-item">
              <Link
                className="nav-link me-3"
                to="/"
                style={isActive('/') ? { color: '#1d70b7' } : { color: 'black' }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
             <Link
                className="nav-link me-3"
                to="/about"
                style={isActive('/about') ? { color: '#1d70b7' } : { color: 'black' }}
              >
                About
              </Link>
            </li>

             <li className="nav-item">
               <Link
                className="nav-link me-3"
                to="/projects"
                style={isActive('/projects') ? { color: '#1d70b7' } : { color: 'black' }}
              >
                Projects
              </Link>
            </li>

             <li className="nav-item">
             <Link
                className="nav-link me-3"
                to="/services"
                style={isActive('/services') ? { color: '#1d70b7' } : { color: 'black' }}
              >
                Services
              </Link>
            </li>

             <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={isActive('/contact') ? { color: '#1d70b7' } : { color: 'black' }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex ms-auto">
             <a href="" className="btn btn2 me-2">Sign in</a>
             <a href="" className="btn btn1">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
