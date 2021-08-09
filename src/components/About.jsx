import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import TestCard from "./TestCard";
import Slide from "./Slide";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    swipeToSlide: false,
    useCSS: true,
  };
  return (
    <div
      style={{
        backgroundColor: "#F3F3F1",
        position: "relative",
        zIndex: "100",
      }}
    >
      <Container fluid className="logos zt mt-lg-5">
        <div
          id="about"
          className="d-flex zt mx-5 px-0 flex-row logos align-items-center flex-wrap justify-content-around py-sm-5 py-md-2 my-5"
        >
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png"
          />
          <img src="https://www.imtonline.com/wp-content/themes/astra/assets/landing-page-talent/images/logo2.png" />
          <img src="https://upload.wikimedia.org/wikipedia/en/8/84/University_of_Delhi.png" />
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={1} sm={0}></Col>
          <Col lg={7} className="px-5">
            <h3 style={{ fontWeight: "600" }} className="display-6 my-3 strong">
              About Atishay
            </h3>
            <p>
              Hi, I'm a Project Management & Business Analyst Professional, with
              an Engineering Degree in Information Technology, Post Graduate
              Program in Management from IMT-Ghaziabad, and has pursued a
              Master's Program in Business Analytics.
              <br />
              <br />
              I am Lean Certified, IIBA CCBA®️ Trained, Six Sigma Green Belt
              Trained & Tested, alongside other certification like Automation
              Anywhere Advanced RPA Pro, UiPath RPA BA Pro, PMI-PMP®️
              Foundations.
              <br />
              <br />
              I have spoken at more than 40+ colleges about Personal Branding,
              Effective Business Communication, and Productivity, and conducted
              dozens of Technical Workshops.
              <br />
              <br />
              I am also a Podcaster, Host & Emcee, and experienced in hosting
              interviews, book launches, conferences, and events.
              <br />
            </p>
          </Col>
          <Col lg={4}>
            <Slide />
          </Col>{" "}
        </Row>
      </Container>
      {/* <Container style={{ backgroundColor: "#120E43" }} fluid>
        <Row>
          <Col className="text-light p-2 display-6 stat">100+</Col>
          <Col className="text-light p-2 display-6 stat">100+</Col>
          <Col className="text-light p-2 display-6 stat">100+</Col>
          <Col className="text-light p-2 display-6 stat">100+</Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default About;
