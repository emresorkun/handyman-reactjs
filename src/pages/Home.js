import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <span className="logo">This is My Story</span>
        </div>
      </header>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-introduction">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur
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
