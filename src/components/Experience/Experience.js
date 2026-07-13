import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaAward } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsBriefcase, BsBoxArrowUpRight } from "react-icons/bs";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Building and shipping production AI systems for enterprise clients.
        </p>

        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={11} className="experience-timeline">
            <div className="experience-role-header">
              <h3>
                <BsBriefcase style={{ marginBottom: "4px" }} />{" "}
                <span className="purple">Associate AI Engineer</span>
              </h3>
              <h4>
                <a
                  href="https://www.linkedin.com/company/acumant/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience-company-link"
                >
                  Acumant Technology / Betabridge Ventures
                </a>
              </h4>
              <p className="experience-meta">
                Apr 2025 – Present &nbsp;·&nbsp; Noida, India
              </p>
            </div>

            <div className="resume">
              <div className="resume-item">
                <h5 className="resume-title">
                  ImpleAI — Multi-Agent AI Platform &nbsp;
                  <a
                    href="https://imple.betahub.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-live-link"
                  >
                    Live <BsBoxArrowUpRight style={{ fontSize: "0.8em" }} />
                  </a>
                </h5>
                <ul>
                  <li>
                    Shipped a 5-agent AI platform — Flow, Test Case, Training,
                    Gantt, and Support — where each agent owns a distinct stage
                    of the Dynamics 365 F&amp;O automation pipeline; now
                    finalized as a product and running in active client demos.
                  </li>
                  <li>
                    Architected a modular orchestration layer so any agent can
                    be added, reconfigured, or swapped independently —
                    containing a logic change to one agent instead of the full
                    pipeline.
                  </li>
                  <li>
                    Engineered the Flow agent to convert SOP documents into
                    consulting-grade process diagrams, benchmarked against an
                    OpenAI image model across 25 quality criteria.
                  </li>
                  <li>
                    Grounded the Support agent in the D365 F&amp;O codebase
                    with a RAG pipeline and a structured evaluation harness,
                    enforcing grounding contracts on every response.
                  </li>
                  <li>
                    Deployed foundry-auth-proxy — FastAPI on Azure Container
                    Apps with ACR-versioned images — replacing an opaque
                    isolation key with JWT user auth across a 3-app Entra ID
                    architecture.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h5 className="resume-title">
                  Orkla — AI Release Bot (Release Analytics)
                </h5>
                <ul>
                  <li>
                    Developed an AI release bot that resolves release queries
                    end-to-end by unifying 3 data sources: the release
                    calendar, per-release SharePoint documents indexed on
                    Azure, and live Azure DevOps test plans and suites.
                  </li>
                  <li>
                    Replaced manual release-health reporting with
                    auto-generated KPI charts embedded in existing dashboards —
                    plus an escalation path that auto-files a ticket for any
                    query the bot cannot answer, so zero requests are dropped.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h5 className="resume-title">ABB — RAG Chart Bot</h5>
                <ul>
                  <li>
                    Implemented a Retrieval-Augmented Generation pipeline for
                    ABB's business analytics: piped source data through Power
                    Automate flows and indexed complex datasets in Azure
                    Cognitive Search to ground every chart query in real data.
                  </li>
                  <li>
                    Integrated retrieval, embeddings, and LLM generation behind
                    a single service — business users query analytics in
                    natural language and receive chart-backed answers.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h5 className="resume-title">
                  BetaHub Process Screen Recorder — Chrome Extension &nbsp;
                  <a
                    href="https://chromewebstore.google.com/detail/bhneedddpiopochgaplcfgjbcacibpag"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-live-link"
                  >
                    Web Store <BsBoxArrowUpRight style={{ fontSize: "0.8em" }} />
                  </a>
                </h5>
                <ul>
                  <li>
                    Created a Chrome extension that captures user workflows
                    step-by-step into clean, shareable files — no manual
                    editing — used for training, debugging, and process
                    documentation across teams.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          Certifications &amp; <strong className="purple">Awards</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={11}>
            <ul className="experience-badges">
              <li className="experience-badge">
                <FaAward className="purple experience-badge-icon" />
                <div>
                  <b>Shining Star — AI Award, Acumant</b>
                  <p>
                    Earned within the first year of professional experience.{" "}
                    <a
                      href="https://www.linkedin.com/posts/employee-awards-2025-ugcPost-7407481077042302976-wGJP/"
                      target="_blank"
                      rel="noreferrer"
                      className="experience-live-link"
                    >
                      See announcement{" "}
                      <BsBoxArrowUpRight style={{ fontSize: "0.8em" }} />
                    </a>
                  </p>
                </div>
              </li>
              <li className="experience-badge">
                <FaAward className="purple experience-badge-icon" />
                <div>
                  <b>Claude Code in Action — Anthropic (2026)</b>
                  <p>
                    <a
                      href="https://verify.skilljar.com/c/toahsj9p3qsh"
                      target="_blank"
                      rel="noreferrer"
                      className="experience-live-link"
                    >
                      Verify credential{" "}
                      <BsBoxArrowUpRight style={{ fontSize: "0.8em" }} />
                    </a>
                  </p>
                </div>
              </li>
              <li className="experience-badge">
                <FaAward className="purple experience-badge-icon" />
                <div>
                  <b>AWS Academy</b>
                  <p>Machine Learning · Data Analytics · Cloud Foundations</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={11}>
            <ul className="experience-badges">
              <li className="experience-badge">
                <MdOutlineSchool className="purple experience-badge-icon" />
                <div>
                  <b>Galgotias University, Greater Noida</b>
                  <p>
                    B.Tech, Computer Science &nbsp;·&nbsp; CGPA 9.17 / 10
                    &nbsp;·&nbsp; 2020 – 2024
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
