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
            from <span className="purple"> Patna, Bihar.</span>
            <br />
            I am a CSE graduate from GALGOTIAS UNIVERSITY (2020-2024). I have a passion to learn new things and apply my knowledge in the real life situations. I am a keen learner, hard working and dedicated towards my work. As I know it's not about the destination but more about the journey along with that I can easily get close to people from different background. My objective is to make a meaningful contribution as much as possible so that I could become better day by day. Also this gives me an inspiration to grow up with the time.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solo Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineers: They turn coffee into code"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
