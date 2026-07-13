import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an <b className="purple">AI Engineer</b> at{" "}
              <b className="purple">Acumant Technology / Betabridge Ventures</b>,
              where I build production multi-agent LLM systems on Microsoft
              Azure. I shipped <b className="purple">ImpleAI</b> — a
              multi-agent platform whose Flow, Test Case, Training, Gantt, and
              Support agents automate Dynamics 365 F&amp;O consulting
              workflows — now finalized as a product and running in active
              client demos.
              <br />
              <br />
              I've also delivered AI analytics bots for enterprise clients{" "}
              <b className="purple">Orkla</b> and <b className="purple">ABB</b>{" "}
              — grounding LLMs in real business data with RAG pipelines,
              structured evaluation harnesses, and Azure Cognitive Search.
              <br />
              <br />
              My day-to-day toolkit spans{" "}
              <i>
                <b className="purple">
                  agent orchestration (LangChain, LangGraph, AutoGen, CrewAI),
                </b>{" "}
                <b className="purple">FastAPI microservices,</b>{" "}
                <b className="purple">React / Next.js frontends,</b> and{" "}
                <b className="purple">Docker CI/CD on Azure.</b>
              </i>
            </p>

            <Row className="home-stats-row">
              <Col xs={4} className="home-stat">
                <h2 className="purple">5</h2>
                <p>AI agents shipped in one platform</p>
              </Col>
              <Col xs={4} className="home-stat">
                <h2 className="purple">4</h2>
                <p>Production systems delivered at work</p>
              </Col>
              <Col xs={4} className="home-stat">
                <h2 className="purple">2</h2>
                <p>Enterprise clients — Orkla &amp; ABB</p>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
              <br />
              <span className="purple">
                abhishekgupta7631@gmail.com <br />
                +91 7631273371
              </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbhishekGupta7631"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-gupta-a4824b213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abhishekgupta_7631/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
