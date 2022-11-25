import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body className="d-flex flex-column align-items-stretch" >
        <Card.Title>{props.title}</Card.Title>

        <Card.Img variant="top" src={props.imgPath} alt="card-img" />

        <Card.Text style={{ textAlign: "justify", height: '80px'}}>
          {props.description}
        </Card.Text>

        {
          props.ghLink ? (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {"Documentation"}
            </Button>
          ): null
        }

        {
          props.demoLink ? (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Link To Website"}
            </Button>
          ): null
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
