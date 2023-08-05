import './navbar.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "./img/irislogo.webp"
import Hicon from "./img/home.svg"
import Korzinka from "./img/korzinka.png"
import Tell from "./img/tell.svg"

const Navbar = () => {
  return (
    <React.Fragment>
      {/* navbar */}
      <div className="navbar">
        {/* logo */}
        <div className="navbar__logo">
          <img src={Logo} alt="Logi" width={220} />
        </div>
        {/* navs */}
        <div className="navbar__navs">
          <li><Link to="/"><img src={Hicon} alt="icon" width={28} />  Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/korzinka"> <img src={Korzinka} alt="icon" width={30} />  Korzinka</Link></li>
          {/* tell */}
          <div className="navbar__tell">
            <img src={Tell} alt="icon" width={50} />
            <p>+998 74225 91 00</p>
          </div>
        </div>

        {/* hamburger */}
        {/* <div className="navbar__hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "red" }} />
          )}

        </div> */}
      </div>
    </React.Fragment>
  )
}

export default Navbar