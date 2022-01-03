import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <div className="wrapper">
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
            consoles and built-ins are our's specialties. 

            We speak English and Turkish and we mainly serve to internatinaol community
            in Ankara. Please get in contact with us for more details and our references. 
          </div>
          <div className="home-photo">
            <img
              src={require("../images/home.jpeg")}
              alt="Grapefruit slice atop a pile of other slices"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
