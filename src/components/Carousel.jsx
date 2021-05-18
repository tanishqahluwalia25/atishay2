import { Carousel as BCarousel } from "react-bootstrap";
import CourseCard from "./CourseCard";

const Carousel = () => {
  return (
    <div className="bg-light" id='courses'>
      <p className="display-6 text-ligt my-5 mx-md-5 px-md-5">Courses</p>
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
          <CourseCard />
        </BCarousel.Item>
        
      </BCarousel>
      </div>
  );
};

export default Carousel;