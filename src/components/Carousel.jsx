import { Carousel as BCarousel } from "react-bootstrap";
import { LinkinMasterclass, BetterYou } from "./CourseCard";

const Carousel = () => {
  return (
    <div className="bg-light" id="courses">
      <p className="display-6 text-ligt px-5 pt-4">
        <span className="py-4 px-md-4 text-uppercase h1 text-gray">
          {" "}
          Courses
        </span>
      </p>
      <BCarousel
        fade
        nextIcon={
          <span
            aria-hidden="true"
            className="display-1"
            style={{ color: "green" }}
          >{`>`}</span>
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="display-1"
            style={{ color: "green" }}
          >{`<`}</span>
        }
      >
        <BCarousel.Item>
          <LinkinMasterclass />
        </BCarousel.Item>
        <BCarousel.Item>
          <BetterYou />
        </BCarousel.Item>
      </BCarousel>

    </div>
  );
};

export default Carousel;
