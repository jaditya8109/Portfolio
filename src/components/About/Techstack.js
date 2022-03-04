import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import { SiAmazonalexa, SiAmazonaws, SiShopify } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>NodeJs</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
        <h4>Shopify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonalexa />
        <h4>Alexa Skill</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h4>AWS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h4>bootstrap</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
