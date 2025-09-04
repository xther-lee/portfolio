import { Link } from "react-router-dom";
import { useState } from "react";
import { projectData } from "../Data/ProjectData";

import '../Style/ProjectSub.scss'

const ProjectSub = () => {
  const [ filter, setFilter ] = useState("All");

  const filteredProjects = projectData.filter((p) => {
    if (filter === "All") return true;
    return p.type === filter;
  })
  return (
    <div className="project-sub">
      <div className="select-txt">
        {["All", "Solo", "Team"].map((f) => (
          <button key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          > {f}
          </button> ))}
      </div>
      <div className="project-list">
        {filteredProjects.map((p) => (
          <div key={p.id} className="project-item">
            <Link to={`/project/${p.id}`}>
              <img src={p.img} alt={p.title} />
            </Link>
            <div className="txt-box">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSub;
