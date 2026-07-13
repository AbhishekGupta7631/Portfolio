import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaRobot } from "react-icons/fa";
import {
  BsGraphUp,
  BsBarChartLine,
  BsRecordCircle,
  BsShieldCheck,
  BsCreditCard2Front,
} from "react-icons/bs";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Things I've <strong className="purple">Built </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production AI systems shipped for enterprise clients, plus projects
          I've explored on my own.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaRobot />}
              category="Enterprise · Betabridge"
              title="ImpleAI — Multi-Agent AI Platform"
              description="A 5-agent AI platform — Flow, Test Case, Training, Gantt, and Support — where each agent automates a distinct stage of Dynamics 365 F&O consulting. A modular orchestration layer lets any agent be added, swapped, or reconfigured independently. Finalized as a product and running in active client demos."
              tags={["Multi-Agent", "RAG", "FastAPI", "Azure Container Apps", "Entra ID"]}
              demoLink="https://imple.betahub.ai/"
              demoLabel="Live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<BsGraphUp />}
              category="Enterprise · Orkla"
              title="Orkla AI Release Bot"
              description="A release-analytics bot that resolves queries end-to-end by unifying three data sources: the release calendar, SharePoint documents indexed on Azure, and live Azure DevOps test plans. Auto-generates KPI charts inside existing dashboards, and auto-files a ticket for anything it can't answer — zero requests dropped."
              tags={["LLM", "Azure DevOps", "SharePoint", "KPI Automation"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<BsBarChartLine />}
              category="Enterprise · ABB"
              title="RAG Chart Bot"
              description="A Retrieval-Augmented Generation pipeline for ABB's business analytics: Power Automate flows pipe source data into Azure Cognitive Search, grounding every chart query in real data. Business users ask questions in natural language and receive chart-backed answers from a single unified service."
              tags={["RAG", "Azure Cognitive Search", "Power Automate", "Embeddings"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<BsRecordCircle />}
              category="Chrome Extension"
              title="BetaHub Process Screen Recorder"
              description="A Chrome extension that captures user workflows step-by-step into clean, shareable files — no manual editing required. Used across teams for training, debugging, and process documentation, and published on the Chrome Web Store."
              tags={["JavaScript", "Chrome APIs", "Productivity"]}
              demoLink="https://chromewebstore.google.com/detail/bhneedddpiopochgaplcfgjbcacibpag"
              demoLabel="Web Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<BsShieldCheck />}
              category="Personal · AI Observability"
              title="LLM Watchtower"
              description="An AI-observability proof of concept that monitors production LLM applications across four risk dimensions: hallucination, toxicity, PII exposure, and policy compliance — turning silent model failures into actionable signals."
              tags={["Python", "LLM Evals", "Guardrails", "Observability"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<BsCreditCard2Front />}
              category="Personal · Machine Learning"
              title="Credit Card Fraud Detection"
              description="A Random Forest classifier trained on a 284K-transaction Kaggle dataset in which fraud accounts for under 0.2% of records — handling extreme class imbalance and tuning for recall on the minority class to catch fraud without drowning in false positives."
              tags={["Python", "scikit-learn", "Imbalanced Data"]}
              ghLink="https://github.com/AbhishekGupta7631/Credit_card_fraud_detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
