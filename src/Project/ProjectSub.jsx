import { Link } from "react-router-dom";
import { projectData } from "../Data/ProjectData";

const ProjectSub = () => {
  return (
    <div className="project-sub">
      <h2>Project List</h2>
      <div className="project-list">
        {projectData.map((p) => (
          <div key={p.id} className="project-item">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <Link to={`/projects/${p.id}`}>자세히 보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSub;
