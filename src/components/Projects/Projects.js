import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ademag from "../../Assets/Projects/ademag.png";
import hintegral from "../../Assets/Projects/hintegral.png";
import editor from "../../Assets/Projects/codeEditor.png";
import meister from "../../Assets/Projects/meister.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={meister}
              isBlog={false}
              title="Meister Engineering"
              description="Team leader and development of a customised e-commerce, with drop-shipping and accounting management"
              demoLink="https://www.meister-engineering.ch"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hintegral}
              isBlog={false}
              title="H-integral"
              description="Development of a self-managed survey platform for monitoring and assessing the health status of pregnant mothers."
              ghLink="/hintegral"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ademag}
              isBlog={false}
              title="Violence Basta"
              description="Digital manager, graphic designer and web developer of the violence basta campaign"
              demoLink="https://www.ademag.org"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
