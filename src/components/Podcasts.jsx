import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { db } from "../firebase";
const Podcasts = () => {
  const options = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoSlide: true,
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
          initialSlide: 2,
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
  const [pods, setPods] = useState([
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
    {
      name: '"How to Become an Amazon Best Selling Author" | Stuti Changle',
      link: "https://www.youtube.com/embed/CrGwnaBvzVU",
    },
  ]);
  useEffect(() => {
    db.collection("podcasts")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data = [{ ...doc.data(), id: doc.id }, ...data];
        });
        setPods(data);
      });
  }, []);
  return (
    <Container className="mt-5 py-5">
      <Row>
        <Col md={0} lg={1} />
        <Col lg={3} className="d-flex flex-column pr-4 bg-grad-pod">
          <p className="display-5 text-center my-auto strong p-5 text-light justify-content-center mr-5 align-items-center">
            PODCASTS
          </p>
        </Col>
        <Col md={12} lg={8}>
          <Slider {...options}>
            {pods.map((pod) => (
              <div className="p-2" style={{ border: "1px solid green" }}>
                <iframe
                  height="250px"
                  className="pod"
                  src={pod.link}
                  title="YouTube video player"
                  frameborder="0"
                  width="100%"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>

                <p className="h1 small mr-5">{pod.name}</p>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Podcasts;
