const WorkList = ({ works, title }) => {
  return (
    <div className="work-list">
      <h2>{title}</h2>
      {works.map((work) => (
        <div className="work-preview" key={work.id}>
          <h2> {work.title}</h2>
          <p> {work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
