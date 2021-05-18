import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import SideIcons from "./SideIcons";

const Footer = () => {
  return (
    // <Container fluid className=" postion-fixed bottom-0 footer2" id='newsletter'>
    //   <p className="display-4 text-center text-light pt-3">Atishay Jain</p>
    //   <div className="m-auto">
    //   <SideIcons
    //     direction="row"
    //     color="white"
    //     style={{
    //       color: "white",
    //       maxWidth:"20rem",
    //     }}
    //     className="m-auto justify-content-around"
    //   /></div>
    // </Container>

    <>
      <Container
        fluid
        className="news"
        onClick={() =>
          window.open(
            "https://atishay-jain-portfolio.web.app/subscribe-to-newsletter"
          )
        }
      >
        <p className="display-6 text-center mb-0 py-3">
          Subscribe to Newsletter
        </p>
      </Container>

      <Container
        fluid
        className="pb-2 postion-fixed bottom-0 footer2 d-flex flex-column p-5"
        id="newsletter"
      >
        <p className="display-6 text-light text-center pt-2 pb-1">
          ATISHAY JAIN
        </p>
        <SideIcons
          direction="row"
          color="white"
          style={{
            color: "white",
            maxWidth: "20rem",
            margin: "0px",
          }}
          className="m-auto pb-2"
        />
        <ButtonGroup className="m-auto ">
          <Button variant="outline-light" onClick={()=>(window.open('https://api.whatsapp.com/send?phone=919953456828'))}>Whatsapp</Button>
          <Button variant="outline-light" onClick={()=>(window.open('mailto:mailme.atishayjain@gmail.com'))}>Gmail</Button>
        </ButtonGroup>
        <div className="d-flex flex-wrap justify-content-between">
          <p className="text-light text-left">
            Copyright © 2021 Atishay Jain. All rights reserved.
          </p>
          <p className="text-left tanishq">
            Developed by{" "}
            <a
              className="tan"
              href="https://www.linkedin.com/in/tanishqahluwalia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Tanishq Ahluwalia
            </a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
