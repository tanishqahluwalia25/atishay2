import { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import { db } from "../firebase";
const Events = () => {
  const options = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    infinite: true,
    autoPlay: true,
    draggable: true,
    easing: "ease-in-out",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data = [{ ...doc.data(), id: doc.id }, ...data];
        });
        setEvents(data);
      });
  }, []);
  return (
    <Container className="pt-5 px-2" id="events">
      <Row className="flex-wrap-reverse">
        <Col lg={1} md={0} sm={0} />
        <Col lg={7} md={12}>
          <Slider {...options}>
            {events.map((item) => (
              <div className="event" key={item.id}>
                <center>
                  <Card
                    className="m-2"
                    style={{
                      marginRight: "5rem",
                      width: "90%",
                    }}
                  >
                    <img
                      src={`https://drive.google.com/uc?export=view&id=${item.img}`}
                      className="event-img"
                      style={{ height: "18rem" }}
                      alt=""
                    />
                    <div className="event-content">
                      <p
                        className=" event-text text-bold"
                        style={{ width: "12rem" }}
                      >
                        {item.title}
                      </p>
                      <p className=" event-text" style={{ width: "12rem" }}>
                        {item.text}
                      </p>
                    </div>
                  </Card>
                  <a href={item.link} className="text-center mx-2 event-link">
                    Learn more
                  </a>
                </center>
              </div>
            ))}
          </Slider>
        </Col>
        <Col lg={3} className="d-flex flex-column pr-4 bg-grad-event event-box">
          <p className="display-5 my-auto strong p-5 text-light justify-content-center mr-5 align-items-center text-center">
            EVENTS
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
