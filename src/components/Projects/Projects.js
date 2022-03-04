import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import cocktailer from "../../Assets/Projects/cocktailer2.png";
import stc from "../../Assets/Projects/stc.png";
import afrd from "../../Assets/Projects/afrd.png";

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
              imgPath={chatify}
              isBlog={false}
              title="College Space"
              description="A full stack MERN web app specifically built to connect people of college where past year paper, subject notes can be shared along with connecting juniors with alumni."
              link="https://github.com/jaditya8109/College_Space"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrd}
              isBlog={false}
              title="Amazon Fake Review Detector"
              description="Amazon Fake Review detector is a full stack project to determine
              the percentage of fake reviews associated with any amazon product. It was build with HTML, CSS, Bootstrap, Express, Node JS
              and machine learning API was used. "
              link="https://fake-review-detector-hack.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Contact Keeper Website"
              description="Contact keeper website is a full stack web app based on MERN
              stack that is MongoDb, Express, NodeJS and React js. It is used to
              store all the contacts of any user with authentication. "
              link="https://github.com/jaditya8109/React_Contact_Keeper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stc}
              isBlog={false}
              title="STC Chapter Website"
              description="STC is a chapter in VIT for which a website was made based on HTML, CSS, Bootstrap and javascript."
              link="https://stcvit.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Trading Website"
              description="Online trading website was a full stack web project for online buying and selling items aimed for exchanging items between
              college students of VIT vellore. Frontend was based on HTML, CSS
              and JS and backend was based on Express, MongoDB and NodeJS."
              link="https://github.com/jaditya8109/technica_compiled"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktailer}
              isBlog={false}
              title="Cocktailer - Amazon Skill"
              description="Cocktailer is an Alexa Skill app built with JavaScript. It gives
              instructions to prepare any cocktail and also suggests random
              cocktail names and how to make them. It also suggests cocktail that can be prepared from any particular ingredients that we have along with recipe to prepare it. "
              link="https://www.amazon.in/Aditya-jain-cocktailer/dp/B08P1DWGW5"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
