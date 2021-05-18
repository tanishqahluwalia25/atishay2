import Navbar from "../../components/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import SideIcons from "../../components/SideIcons";
import About from "../../components/About";
import Header from "../../components/header";
import Events from "../../components/Events";
import Podcasts from "../../components/Podcasts";
import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import Carousel from "../../components/Carousel";

const Home = () => {
  return (
    <div className="">
      
      <SideIcons
        direction="column"
        className=" .d-sm-none .d-lg-block position-fixed px-0 "
        style={{ left: "10px", top: "25%", zIndex: "100"}}
      />
      <Navbar />
      <Footer />
        <Header />
        <About />
        <Carousel/>
        <div className="bg-light">
          <Events />
          <Podcasts />
        </div>
      <div className="position-sticky foot-wrap"></div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Home;
