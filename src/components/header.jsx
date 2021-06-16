import { Button, Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import header from "../assets/header2.jpg";
const Header = () => {
  return (
    <div className="hero">
      <Container fluid className="bg-white">
        <Row className="flex-wrap-reverse justify-content-center align-items-center my-md-5 pt-md-5">
          <Col lg={2} sm={0}></Col>
          <Col lg={5} sm={8} className="zt">
            <p className="display-5 rot"> I'm a </p> <br />
            <Typewriter
              options={{
                loop: true,
                cursorClassName: "display-5",
                wrapperClassName: "display-5 w-100 my-4",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("PMO and Business Analyst")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Speaker")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Podcaster")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Blogger")
                  .pauseFor(1000)
                  .start();
              }}
            />
            <div className="my-3">
              <Button
                variant="success"
                className=""
                style={{ fontSize: "1.5rem", marginRight: "5px" }}
                onClick={() => {
                  window.open(
                    "https://open.spotify.com/show/6ocA2nIJSXP6NLKFKx24uT"
                  );
                }}
              >
                Podcasts🎙
              </Button>
              <Button
                variant="outline-dark"
                style={{ fontSize: "1.5rem" }}
                className="mx-md-4 ml-sm-2 "
                onClick={() => {
                  window.open("https://atishay-jain-portfolio.web.app/courses");
                }}
              >
                Courses
              </Button>
            </div>
          </Col>
          <Col lg={1} md={0}></Col>
          <Col
            className="zt d-flex justify-content-center"
            style={{ paddingLeft: "0px" }}
            lg={4}
            md={4}
          >
            <img
              style={{ width: "20rem", opacity: "0" }}
              className="my-md-2 header-img rounded"
              id="header-img"
              src={header}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col style={{ height: "" }}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
