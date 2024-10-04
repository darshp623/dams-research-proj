  "use client";
  import React, { useState, useEffect } from "react";
  import "../css/navbar.css";
  import Link from "next/link";
  import "aos/dist/aos.css";

  export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
  
    // handle resize
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Add event listener for resize events
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  
    return (
      <>
        <div className="nav-bar-container w-full flex justify-center py-2.5 light-mode-text">
          <nav className="nav-desktop light-mode-text">
            {/* Left-side (DAMS Research Group) */}
            <div className="nav-left">
              <Link
                offset={-300}
                duration={700}
                smooth="true"
                className="nav-logo light-mode-text"
                href="#home"
              >
                DAMS Research Group
              </Link>
            </div>
  
            {/* Right-side (Home, Data) */}
            <div className="nav-right light-mode-text">
              <Link
                id="right-nav-button"
                to="data"
                smooth="true"
                duration={500}
                className="nav-link light-mode-text"
                href="#home"
              >
                Home
              </Link>
              <Link
                id="right-nav-button"
                to="data"
                smooth="true"
                duration={500}
                className="nav-link light-mode-text"
                href="#data"
              >
                Data
              </Link>
            </div>
          </nav>
          {/* Hamburger menu */}
          <div id="hamburger-nav" className="hamburger-menu">
            <div
              className={`hamburger-icon ${isMenuOpen ? "open" : ""} light-mode-text`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`menu-links ${isMenuOpen ? "open" : ""} light-mode-text`}>
              <li>
                <Link href="#home" className="light-mode-text">Home</Link>
              </li>
              <li>
                <Link href="#data" className="light-mode-text">Data</Link>
              </li>
              <li>
                <Link href="#footer" className="light-mode-text">Footer</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  