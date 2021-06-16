import React, { Component } from "react";
import Slider from "react-slick";
import TestCard from "./TestCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };
    return (
      <div className="header-slide">
        <Slider {...settings}>
          <div className="">
            <TestCard
              name="Sugam Manocha"
              desig="Marketing Executive | KhataBook, GuidePoint"
              text={`Atishay has been a wonderful leader & an amazing influencer. His communication skills always drives me & captivates me. I've learned so much from his mentorship & I am glad to have him as my mentor.`}
            />
          </div>
          <div className="">
            <TestCard
              name="  Sankalp Malhotra"
              desig="Full Stack Developer at Philips Healthcare"
              text={`Atishay has always been a hardworking and self motivated guy. He used to keep learning new things and spreading the knowledge and awareness around him.`}
            />
          </div>
          <div className="">
            <TestCard
              name="Parv Jain "
              desig="Software Developer at PayTM"
              text={`Atishay is really committed and passionate towards his goals. He is good communicator, inspire others and has decision making capabilities. Atishay has real leadership potential.`}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
