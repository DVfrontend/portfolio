'use client'

import data from "@/data/projects.json";
import { useEffect, useState } from "react";
import type { Project } from "@/types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Проекты</h1>
      <ul className="list-disc">
        {projects.map((project) => (
          <li key={project.id}>
            <b>{project.title}</b> — {project.technologies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
