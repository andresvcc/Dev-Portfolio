import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "../About/Toolstack";

import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Row>
          <Col md={12}>
            <Techstack />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Row>
          <Col md={12}>
            <Toolstack />
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
