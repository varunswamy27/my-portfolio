import React from "react";
import styles from "../style/section/navbar.component.module.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarComponent = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([
    { Link: "Home" },
    { Link: "About" },
    { Link: "Services" },
    { Link: "Testimonials" },
    { Link: "Contact" },
  ]);
  console.log(active);

  return (
    
    <Navbar collapseOnSelect expand="lg" className={styles.Main_nav}>
      <Container className={styles.container}>
        <Navbar.Brand href="#home" className={styles.Nav_logo}>
          VARUN SWAMY
        </Navbar.Brand>
        <Navbar.Toggle className={styles.hamburger_wrap} aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu className={styles.hamburger}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className={styles.Nav_links_wrap}>
            {data.map((curr, id) => {
              return (
                  <Nav.Link
                    href={`#${curr.Link}`}
                    onClick={() => {
                      setActive(id);
                    }}
                    key={id}
                    className={
                      active === id
                        ? true && styles.Nav_active
                        : styles.Nav_links
                    }
                  >
                    {curr.Link}
                  </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
