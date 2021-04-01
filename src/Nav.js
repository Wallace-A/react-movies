import React, { useState, useEffect } from 'react'
import "./Nav.css"
import noirflixLogo from "./noirflix.png";

function Nav() {
  const [show, handleShow] = useState(false)
  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src= {noirflixLogo}
        alt="Netflix Logo"
      />

      <img 
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
        alt="Netflix Avatar"
      />
    </div>
  )
}

export default Nav
