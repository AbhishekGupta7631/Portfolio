import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiAzuredevops,
  SiGithubactions,
  SiJira,
  SiPowerautomate,
  SiOpenai,
} from "react-icons/si";

const TOOLS = [
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiAzuredevops />, label: "Azure DevOps" },
  { icon: <SiGithubactions />, label: "GitHub Actions" },
  { icon: <SiPowerautomate />, label: "Power Automate" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiJira />, label: "Jira" },
  { icon: <SiOpenai />, label: "OpenAI API" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TOOLS.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.label}>
          {tool.icon}
          <span className="tech-icon-label">{tool.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
