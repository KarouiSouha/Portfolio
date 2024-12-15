import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WorkForcePro from "../../Assets/Projects/workForcePro.png";
import Hotelbooking from "../../Assets/Projects/mern.png";
import Bazzar3D from "../../Assets/Projects/bazzar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WorkForcePro}
              isBlog={false}
              title="WorkForcePro"
              description="Effortlessly generate accurate and professional payslips for your employees with our easy-to-use platform. Streamline your payroll process and ensure compliance with all necessary regulations, while saving time and reducing errors. Perfect for businesses of all sizes, our tool offers a seamless solution for managing employee payments."
              ghLink="https://github.com/HsounaHub/Python_Project_2023"
              demoLink="https://drive.google.com/file/d/1Y7HPerNpMtiGZ_KeS5WUKVW_6yuko1Rz/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotelbooking}
              isBlog={false}
              title="Hotel booking"
              description="CarZone is your go-to platform for seamless vehicle trading. Whether you're buying or selling, we make car auctions easy, convenient, and secure. Connect with trusted buyers and sellers to find the best deals on a wide range of vehicles. Start your journey with CarZone today and experience a new level of car trading."
              ghLink="https://github.com/HsounaHub/MERN-STACK-PROJECT"
             demoLink="https://drive.google.com/file/d/1Iqxb1blCEqR6I3XXUw7zzYBQsUBdkguC/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bazzar3D}
              isBlog={false}
              title="Bazzar 3D"
              description="Discover a unique shopping experience with our e-commerce platform, where you can not only shop for stylish clothing but also design your own! Customize your wardrobe to reflect your personal style—choose fabrics, colors, and designs to create one-of-a-kind pieces that are truly yours. Elevate your fashion game with our easy-to-use tools, and wear clothes that are as unique as you are."
              ghLink="https://github.com/HsounaHub/java-project-2023"
              demoLink="https://drive.google.com/file/d/18d9mvtf2yO_-NAEkSpynN2CQXqxTN5uy/view?usp=sharing"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
