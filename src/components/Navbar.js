import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #000000;
  color: #fff;

  .navbar-brand {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    
  }

  .nav-link {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin: 0 0.5rem;
    transition: 0.5s ease;

    &:hover {
      color: red;
    }
  }

  .navbar-toggler {
    border: none;
    color: red;

    &:focus {
      text-decoration: none;
      outline: 0;
      box-shadow: 0 0 0 0;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navbar sticky-top navbar-expand-lg">
      <div className="container">
      <a className="navbar-brand" href="ayaanmalik-studio.github.io/ArmTech">
          Arm<span className="text-danger text-bold">Tech</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-center">
            <i class="bi bi-list h3"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blogs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
