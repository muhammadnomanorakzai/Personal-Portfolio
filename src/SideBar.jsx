import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./assets/sideBar.css";
import CircleBtn from "./CircleBtn";

function Sidebar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const dropdownRef = useRef(null);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`animate__animated animate__fadeInLeft slower ${
          isSidebarOpen ? "showSidebar" : "hideSidebar"
        }`}>
        {/* Profile Section */}
        <div className="profile animate__animated animate__fadeInLeft slower --animate-delay">
          <img
            src="../public/images/Noman.png"
            alt="Noman's Profile Image"
            className="profile-img"
          />
          <strong>Muhammad Noman</strong>
        </div>

        {/* Navigation Menu */}
        <nav className="animate__animated animate__fadeInLeft slower --animate-delay">
          <ul className="nav-links">
            <li ref={dropdownRef}>
              <Link
                to="/"
                id="homeNav"
                className={activeSection === "/" ? "active" : ""}>
                <span>
                  <i className="fa-solid fa-house-user"></i> Home
                </span>
                <i
                  className="homeMenu fa-solid fa-bars"
                  onClick={() => setShowDropdown(!showDropdown)}></i>
              </Link>
              {/* Dropdown Menu */}
              {showDropdown && (
                <ul className="dropdown-menu animate__animated animate__fadeInDown animate__faster">
                  <li>
                    <a href="#banner">
                      <i className="fas fa-header"></i> Header
                    </a>
                  </li>
                  <li>
                    <a href="#features">
                      <i className="fas fa-cogs"></i> Features
                    </a>
                  </li>
                  <li>
                    <a href="#clients">
                      <i className="fas fa-handshake"></i> Clients
                    </a>
                  </li>
                  <li>
                    <a href="#experience">
                      <i className="fas fa-rocket"></i> Web Journey
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <i className="fas fa-envelope"></i> Contact
                    </a>
                  </li>
                  <li>
                    <a href="#footer">
                      <i className="fas fa-phone"></i> Contact Info
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className={activeSection === "/about" ? "active" : ""}>
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={activeSection === "/projects" ? "active" : ""}>
                <i className="fas fa-tasks"></i> Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="footer animate__animated animate__fadeInLeft animate__slower --animate-delay">
          <span>Find With Me</span>
          <ul className="social-links">
            <CircleBtn
              link="www.linkedin.com/in/muhammad-noman-7a3156339"
              icon="fab fa-linkedin"
            />

            <CircleBtn
              link="https://wa.me/923181915749"
              icon="fab fa-whatsapp"
            />
            <CircleBtn
              link="https://github.com/muhammadnomanorakzai"
              icon="fab fa-github"
            />
          </ul>
        </div>
        {/* Hamburger Button */}
        <button id="menuBtn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
