import React from "react";
import { client } from "../client";
import "../pages/works.scss";
import Posts from "../components/Posts";

class Works extends React.Component {
  state = {
    works: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        this.setState({
          works: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="Works">
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="logo">React and Contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.works} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Works;
// import React from "react";
// import { useState } from "react";
// import WorkList from "../components/WorkList";

// const Works = () => {
//   const [works, setWorks] = useState([
//     {
//       id: 1,
//       title: "My title",
//       images: "url2",
//       description: "my description",
//     },
//     {
//       id: 2,
//       title: "My title 2",
//       images: "url4",
//       description: "my description 2",
//     },
//   ]);

//   return (
//     <div className="work">
//       <WorkList works={works} title="Our Completed Works" />
//       <WorkList works={works} title="One of our best Works" />
//     </div>
//   );
// };

// export default Works;
