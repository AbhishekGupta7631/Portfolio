import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
            I am a CSE graduate from GALGOTIAS UNIVERSITY (2020-2024). I have a passion to learn new things and apply my knowledge in the real life situations. I am a keen learner, hard working and dedicated towards my work. As I know it's not about the destination but more about the journey along with that I can easily get close to people from different background. My objective is to make a meaningful contribution as much as possible so that I could become better day by day. Also this gives me an inspiration to grow up with the time.
              <br /> I am eager to start my career in the software industry and believe that your esteemed company could provide the ideal environment for me to grow and contribute.
              <i>
                
              <br/>
              <br/>

                <b className="purple"> I have skills in React.js, Node JS, JavaScript, HTML, and CSS. I am confident that my background and enthusiasm for this field make me a strong candidate. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                in areas related to{" "}
                <b className="purple">
                  Web Development.
                </b>
              </i>
              <br />
              <br />
             
            </p>
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
              <br/>
              <span className="purple">
              abhishekgupta7631@gmail.com <br/>
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
