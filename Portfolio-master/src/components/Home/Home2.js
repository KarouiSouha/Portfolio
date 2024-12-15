import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="Blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="Blue"> C, Javascript and Python. </b>
              </i>
              <br />
              <br />
              {/* My field of Interest's are building new &nbsp;
              <i>
                <b className="Blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="Blue">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="Blue">Node.js</b> and
              <i>
                <b className="Blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="Blue"> React.js and Next.js</b>
              </i>
            </p> 
            */}
            
  I have experience working with various tools and technologies, including:
  <br />
  <br />
  <i>
    <b className="Blue">Libraries:</b>
  </i>
  &nbsp; like
  <i>
    <b className="Blue"> Material-UI</b>, <b className="Blue">Three.js</b>, and <b className="Blue">Socket.io</b>,
  </i>
  <br />
  <i>
    <b className="Blue">Frameworks:</b>
  </i>
  &nbsp; such as
  <i>
    <b className="Blue"> Flask</b>, <b className="Blue">ExpressJS</b>, and <b className="Blue">Spring Boot</b>,
  </i>
  <br />
  <i>
    <b className="Blue">Technologies:</b>
  </i>
  &nbsp; including
  <i>
    <b className="Blue"> HTML</b>, <b className="Blue">CSS</b>, <b className="Blue">JavaScript</b>, and <b className="Blue">Tailwind CSS</b>,
  </i>
  <br />
  <i>
    <b className="Blue">Database Management Systems:</b>
  </i>
  &nbsp; such as
  <i>
    <b className="Blue"> MySQL</b> and <b className="Blue">MongoDB</b>.
  </i>
  <br />
  <br />
  Additionally, I frequently use
  <i>
    <b className="Blue"> Postman</b>
  </i>
  &nbsp; for API development.
</p>

          </Col>
          <Col md={4} className="myAvtar" >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="Blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KarouiSouha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/souha-karoui-770291276/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
