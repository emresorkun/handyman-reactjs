import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <>
      <header style={{display: "none"}}>
        <div className="logo-wrapper">
          <span className="logo">Our Services</span>
        </div>
      </header>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-introduction">
            Tahtadan Dukkan is an Ankara based woodworking company that provides
            mid to high end custom woodworking. We specialize in building solid
            furniture and cabinetry using only the best materials and joinery
            techniques. Custom kitchens cabinets, bathroom vanities, tables,
            consoles and built-ins are our's specialties. We speak English and
            Turkish and we mainly serve to the ex-pat community and international govermental
            organizations based in Ankara.
            Please get in contact with us for more details and our references.
          </div>
          <div className="home-photo">
            <img
              className="home-photo-carpenter"
              src={require("../images/home.jpeg")}
              alt="Carpenter"
            ></img>
          </div>
        </div>
        <div className="carousel-container">
          <div className="carousel-container-test">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={require("../images/1.jpeg")}
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={require("../images/2.jpeg")}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../images/3.jpeg")}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
