import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import headerImage from "../../../assets/JackRyan.png";

const NavList = [
  { title: "Home", sectionId: "home" },
  { title: "About", sectionId: "about" },
  { title: "Experience", sectionId: "experience" },
  { title: "Contact", sectionId: "contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scollPosition = window.scrollY;
      if (scollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      // Clean up observer on component unmount
      sectionObserver.disconnect();
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <Container>
        <Row>
          <Col xl={4}>
            <img src={headerImage} alt="header image" />
          </Col>
          <Col xl={8}>
            <ul className="nav nav-pills w-100 d-flex flex-row mb-sm-auto mb-0 justify-content-end">
              {NavList.map((navLink) => (
                <li
                  key={navLink.title}
                  className={`nav-item cursor-pointer ${
                    navLink.sectionId === activeSection ? "text-underline" : ""
                  }`}
                  onClick={() => handleNavLinkClick(navLink.sectionId)}
                >
                  <Link
                    to={navLink.sectionId}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-50} // Adjust offset as needed
                    className={`nav-link text-portfolio-dark`}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
