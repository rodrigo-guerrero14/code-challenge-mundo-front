import React from "react"
import { ImHome, ImGithub, ImTwitter } from "react-icons/im";
import { HiCode } from "react-icons/hi";

import '../assets/styles/header.css'

const Header = () => {
  return (
    <nav className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <h3 className="logo">Code Challenge Mundo Pacifico</h3>
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><ImHome /></svg>
                Home
              </a>
            </li>
            <li>
              <a href="http://www.frontend-rg.cl/" className="nav-link text-white" target="_blank">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><HiCode /></svg>
                My Portfolio
              </a>
            </li>
            <li>
              <a href="https://github.com/rodrigo-guerrero14" className="nav-link text-white" target="_blank">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><ImGithub /></svg>
                My GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Elrodra14" className="nav-link text-white" target="_blank">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><ImTwitter /></svg>
                My Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header