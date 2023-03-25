import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Project1 from "../assets/whatcha-drinking.jpeg";
import Project2 from "../assets/Pathfinder.png";

function Projects() {
  return (
    <div>
      <div className="projects">
        <Card style={{ width: "25rem", border: "none", background: "none" }}>
          <div className="projImage">
            <Card.Img variant="top" src={Project1} />
          </div>
          <Card.Body>
            <div className="projTitle">
              <Card.Title
                style={{
                  fontFamily: "Lexend Deca",
                  fontSize: "30px",
                  color: "#EFB90A",
                }}
              >
                Whatcha-Drinking
              </Card.Title>
            </div>
            <div className="projDetails">
              <Card.Text
                style={{
                  fontFamily: "League Spartan",
                  fontSize: "20px",
                  color: "#D6D4D2",
                }}
              >
                A web application that gives you insight on the different
                variations of coffee-shop beverages. It even has an options to
                find coffee shops near you!
              </Card.Text>
            </div>
            <div className="projTechnology">
              <Card.Text
                style={{
                  fontFamily: "Cutive Mono",
                  fontSize: "20px",
                  color: "#00A651",
                }}
              >
                HTML5 | CSS3 | JAVASCRIPT
              </Card.Text>
            </div>
            <div className="projButton">
              <Button
                variant="warning"
                style={{
                  background: "#005BAB",
                  border: "none",
                  color: "white",
                }}
                href="https://lomtuna.github.io/whatcha-drinking/"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                variant="secondary"
                href="https://github.com/LomTuna/whatcha-drinking"
                target="_blank"
              >
                Code
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", border: "none", background: "none" }}>
          <div className="projImage">
            <Card.Img variant="top" src={Project2} />
          </div>
          <Card.Body>
            <div className="projTitle">
              <Card.Title
                style={{
                  fontFamily: "Lexend Deca",
                  fontSize: "30px",
                  color: "#EFB90A",
                }}
              >
                Pathfinder
              </Card.Title>
            </div>
            <div className="projDetails">
              <Card.Text
                style={{
                  fontFamily: "League Spartan",
                  fontSize: "20px",
                  color: "#D6D4D2",
                }}
              >
                A single page application that helps the User find National
                Parks in any state of the U.S. It utilizes an API derived from
                the National Parks Association - which provides images and
                accomodations for each National Park/Landmark.
              </Card.Text>
            </div>
            <div className="projTechnology">
              <Card.Text
                style={{
                  fontFamily: "Cutive Mono",
                  fontSize: "20px",
                  color: "#00A651",
                }}
              >
                HTML5 | CSS3 | REACT.JS | REACT-BOOTSTRAP | MONGODB
              </Card.Text>
            </div>
            <div className="projButton">
              <Button
                variant="warning"
                style={{
                  background: "#005BAB",
                  border: "none",
                  color: "white",
                }}
                href=""
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                variant="secondary"
                href="https://github.com/CollinA7/path-finder"
                target="_blank"
              >
                Code
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
