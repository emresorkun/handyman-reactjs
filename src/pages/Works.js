import React from "react";
import { useState } from "react";
import WorkList from "../components/WorkList";

const Works = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "My title",
      images: "url2",
      description: "my description",
    },
    {
      id: 2,
      title: "My title 2",
      images: "url4",
      description: "my description 2",
    },
  ]);

  return (
    <div className="work">
      <WorkList works={works} title="Our Completed Works" />
      <WorkList works={works} title="One of our best Works" />
    </div>
  );
};

export default Works;
