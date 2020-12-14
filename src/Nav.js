import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "black"}`}>
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        alt="netflix logo text emblem"
      ></img>
      <img
        className="logo2"
        src="https://www.freepnglogos.com/uploads/hacker-png/hacker-user-icons-18.png"
      ></img>
    </div>
  );
}

export default Nav;
