import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";


function About () {

  return (
    <div>
    <div className="About">
        <Container>
          <Row xl={12}>
            <Col lg={6}>
              
              <h1 style={{fontFamily: 'Ramabhadra', color: '#D6D4D2', fontSize: '30px'}}>
                <b>Certified Full Stack Web Developer</b>
              </h1>
              <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                Educated in MERN Fullstack Web Development, I enjoy the ability to create web applications from both sides (Front-end and Back-end).
                </p>
                <hr style={{color: '#EFB90A'}}/>
                <p style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                 I'm obsessed with visual manipulation, and creating a story with a product.
              </p>
              </Col>
              
              <Col lg={6}>
              <h1 style={{fontFamily: 'Ramabhadra', color: '#D6D4D2', fontSize: '50px'}}>
                <b>Experience</b>
              </h1>
              
              <p className="expList" style={{fontFamily: 'Noto Sans Hebrew', fontSize: '20px', color: '#EFB90A'}}>
                <ul>MongoDB</ul>
                <ul>Express JS</ul>
                <ul>REACT</ul>
                <ul>MySQL</ul>
                <ul>GraphQL</ul>
                <ul>Vue.JS</ul>
                
              </p>
            </Col>
            </Row>
        </Container>
    </div>
    </div>

  )
}

export default About; 