import React from "react";
import { Row } from "react-bootstrap";

const AI_SKILLS = [
  "Multi-Agent Orchestration",
  "RAG Pipelines",
  "LLM Evaluation",
  "Agentic Workflows",
  "Prompt Engineering",
  "MCP",
  "LangChain",
  "LangGraph",
  "AutoGen",
  "CrewAI",
  "Azure AI Foundry",
  "OpenAI",
  "Gemini",
  "Claude",
];

function Aistack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="ai-skill-chips">
        {AI_SKILLS.map((skill) => (
          <span key={skill} className="ai-skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </Row>
  );
}

export default Aistack;
