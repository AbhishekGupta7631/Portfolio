import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Gupta </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            <br />
            I work as an{" "}
            <span className="purple">Associate AI Engineer</span> at Acumant
            Technology / Betabridge Ventures, building production multi-agent
            LLM systems on Microsoft Azure. I shipped{" "}
            <span className="purple">ImpleAI</span> — a multi-agent platform
            that automates Dynamics 365 F&amp;O consulting workflows — and
            delivered AI analytics bots for enterprise clients{" "}
            <span className="purple">Orkla</span> and{" "}
            <span className="purple">ABB</span>.
            <br />
            <br />
            I hold a B.Tech in Computer Science from Galgotias University
            (CGPA 9.17/10) and received the{" "}
            <span className="purple">Shining Star — AI Award</span> at Acumant
            within my first year of professional experience.
            <br />
            <br />
            Apart from engineering, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new AI models &amp; research
            </li>
            <li className="about-activity">
              <ImPointRight /> Solo bike riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build AI that survives contact with production!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
