import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/news.png";
import textutils from "../../Assets/Projects/textutils.png";
import brain from "../../Assets/Projects/brain.png";
import credit from "../../Assets/Projects/credit.png";
import crypto from "../../Assets/Projects/crypto.png";
import tour from "../../Assets/Projects/tour.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsMonkey"
              description=" NewsApp delivers real-time global news, personalized for your interests. Stay informed with breaking news, in-depth articles, and multimedia content across various categories. Customize your feed, set alerts, and enjoy an intuitive, ad-free experience. Perfect for staying updated anytime, anywhere, with reliable sources and user-friendly navigation."
              ghLink="https://github.com/AbhishekGupta7631/news-app"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="Text utilities encompass a variety of tools for processing and analyzing text data, including string manipulation, regex, tokenization, stemming, stopwords removal, text cleaning, POS tagging, NER, sentiment analysis, and language detection. These utilities facilitate tasks like text preprocessing, information extraction, and sentiment understanding in natural language processing workflows."
              ghLink="https://github.com/AbhishekGupta7631/Textutils-react"
              demoLink="https://abhishekgupta7631.github.io/Textutils-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Brain Tumour Detection Using CNN"
              description="This project developed a brain tumor detection model using a CNN in TensorFlow and Keras. The Kaggle-sourced MRI dataset expanded from 253 to 2065 images via data augmentation. Preprocessing involved cropping, resizing, and normalization. The CNN architecture included convolutional, batch normalization, ReLU, max pooling, flatten, and dense layers, achieving notable accuracy."
              ghLink="https://github.com/AbhishekGupta7631/Brain-tumour-detection"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="This Python project employs the Random Forest Algorithm (RFA) to detect credit card fraud. It preprocesses transaction data by handling missing values, scaling features, and addressing class imbalance using SMOTE. The ensemble learning method builds decision trees to enhance accuracy, evaluated through metrics like accuracy, precision, recall, and F1 score to optimize fraud detection while minimizing false positives."
              ghLink="https://github.com/AbhishekGupta7631/Credit_card_fraud_detection"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="CryptoX"
              description="Successfully completed a frontend project utilizing HTML, CSS, and JavaScript to create a web page that fetched real-time data of the top 100 cryptocurrencies from a third-party API. Implemented dynamic display of important properties such as volume capacity, market capacity, and price, enhancing user comprehension of various cryptocurrencies."
              ghLink="https://github.com/AbhishekGupta7631/CryptoX"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Tour to India"
              description="Created a responsive web page using HTML and CSS listing states and popular destinations with descriptions and Wikipedia links. Organized for user-friendly access, it enhances travel information presentation. Demonstrates strong frontend skills, providing direct resources for users to explore destinations easily."
              ghLink="https://github.com/AbhishekGupta7631/TourToIndia"
              demoLink = ""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
