import { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Testimonials = () => {
  const [tests] = useState([
    {
      text: "Hi, I'm a Project Management & Business Analyst Professional, with an Engineering Degree in Information Technology, Post Graduate Program in Management from IMT-Ghaziabad, and has pursued a Master's Program in Business Analysis",
      name: "Tanishq",
      desig: "",
      star: "",
    },
    {
      text: "Hi, I'm a Project Management & Business Analyst Professional, with an Engineering Degree in Information Technology, Post Graduate Program in Management from IMT-Ghaziabad, and has pursued a Master's Program in Business Analysis",
      name: "Tanishq",
      desig: "",
      star: "",
    },
    {
      text: "Hi, I'm a Project Management & Business Analyst Professional, with an Engineering Degree in Information Technology, Post Graduate Program in Management from IMT-Ghaziabad, and has pursued a Master's Program in Business Analysis",
      name: "Tanishq",
      desig: "",
      star: "",
    },
  ]);
  return (
    <Container className="testimonials my-5">
      <Row>
        <Col lg={1} sm={0}></Col>
        <Col ms={12} lg={10}>
          <Carousel fade>
            {tests.map((test) => (
              <Carousel.Item className="test-card">
                  <p className="text-center">{test.text}</p>
                  <p className="text-center">-{test.name}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
