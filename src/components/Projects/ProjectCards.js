import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-top">
        <span className="project-card-icon">{props.icon}</span>
        <span className="project-card-badge">{props.category}</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="project-tech-chips">
          {props.tags &&
            props.tags.map((tag) => (
              <span key={tag} className="project-tech-chip">
                {tag}
              </span>
            ))}
        </div>
        <div className="project-card-buttons">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
            >
              <CgWebsite /> &nbsp;
              {props.demoLabel || "Live"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
