import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiMicrosoftazure,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const TECHS = [
  { icon: <SiPython />, label: "Python" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiMicrosoftazure />, label: "Azure" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TECHS.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.label}>
          {tech.icon}
          <span className="tech-icon-label">{tech.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
