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
    <div style={{ backgroundColor: "#F3F3F1" }} >
       <Container fluid className="logos pt-5 zt mt-lg-5" >
          <div id='about' className="d-flex pt-5 zt mx-5 px-0 flex-row logos align-items-center flex-wrap justify-content-around">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png"
            />
            <img src="https://www.imtonline.com/wp-content/themes/astra/assets/landing-page-talent/images/logo2.png" />
            <img src="https://upload.wikimedia.org/wikipedia/en/8/84/University_of_Delhi.png" />
          </div>
        </Container>
      <Container >
        <Row>
          <Col lg={1} sm={0}></Col>
          <Col lg={7}>
            <h3 style={{ fontWeight: "600" }} className="display-6 my-3 strong" >
              About Atishay
            </h3>
            <p>
              Hi, I'm a Project Management & Business Analyst Professional, with
              an Engineering Degree in Information Technology, Post Graduate
              Program in Management from IMT-Ghaziabad, and has pursued a
              Master's Program in Business Analysis.
              <br />
              <br />
              In my current role at Genpact as a Project Management Officer
              (PMO) & Business Analyst, I help drive Lean Digital Transformation
              for Global Clients using Robotic Process Automation (RPA).
              <br />
              <br />
              I am Lean Certified, IIBA CCBA®️ Trained, Six Sigma Green Belt
              Trained & Tested, alongside other certification like Automation
              Anywhere Advanced RPA Pro, UiPath RPA BA Pro, PMI-PMP®️
              Foundations. As a Public Speaker, I have spoken at more than 30+
              colleges about Personal Branding, Effective Business
              Communication, and Productivity Tips.
              <br />
              <br /> I am also a Podcaster, Host & Emcee, having recorded more
              than 20 podcasts so far, and experienced in hosting interviews,
              book launches, conferences, and events.
            </p>
          </Col>
          <Col lg={4}>
            <Slide/>
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
