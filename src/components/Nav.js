import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import LinkedInLogo from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/291709_logo_linked in_social network_social_social media_icon.png";
import GitHubLogo from "/Users/tomluna/Desktop/Portfolio2/Portfolio-2/portfolio-2/src/assets/291716_github_logo_social network_social_icon.png";
import Hero from "./Hero";

function Navi() {
  const path = window.location.pathname;
  return (
    <div className="entireNav">
      <div>
        <Navbar className="Navi" expand="lg" variant="light">
          <Container className="justify-content-space-between">
            <h1 className="title" style={{ fontFamily: "Racing Sans One" }}>
              <b>Tom Luna</b>
            </h1>
            <Row className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Col sm={4}>
                  <Nav style={{ fontFamily: "Shrikhand" }} className="NavList">
                  <div className="FooterIcons">
                      <a
                        href="https://www.linkedin.com/in/tom-luna-786a7b238/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={LinkedInLogo}
                          style={{ height: "40px" }}
                          alt="LinkedIn Logo"
                          href="https://www.linkedin.com/in/tom-luna/"
                        ></img>
                      </a>
                      <a
                        href="https://github.com/LomTuna"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={GitHubLogo}
                          style={{ height: "40px" }}
                          alt="GitHub Logo"
                        ></img>
                      </a>
                      
                    </div>
                  </Nav>
                </Col>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

function CustomLink({ href, children, ...props }) {
  return (
    <li>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default Navi;
