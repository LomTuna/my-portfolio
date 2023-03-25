import Image from "react-bootstrap/Image";
import React from "react";
import Headshot from "/Users/tomluna/my-portfolio/src/assets/looking-down.jpeg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Project1 from '../assets/whatcha-drinking.jpeg';
import Project2 from '../assets/Pathfinder.png'


function Hero() {
  return (
    <div className="Hero">
      <div>
        <div className="image">
          <div>
            <Container className="justify-content-space-between">
              <Row>
                <Col lg={8}>
                  <h1 style={{ fontFamily: "Racing Sans One" }}>
                    Full Stack Web Developer
                  </h1>
                  <p style={{ fontFamily: "Contrail One" }}>
                    Creating projects with eye-catching design, optimized
                    performance, and user satisfaction. Check out some of my
                    projects <a className="projectLink" href="/projects">here!</a>
                  </p>
                </Col>
                <Col lg={4}>
                  <div className="headshot">
                    <img
                      style={{ height: "600px", width: "auto" }}
                      alt="Professional headshot of Tom Luna"
                      src={Headshot}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
