import { useEffect, useState } from "react";
import { ProjectsProps } from "../../../../types/projects";
import { project, icons } from "../../../../data/projects";

export function Projects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    setProjects(project);
  }, [project]);


  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl p-8 relative pb-20">
      <h3 className="text-2xl text-white">Meus Projetos</h3>

      <div className="mt-10 flex gap-5 justify-center flex-wrap">
        {projects.map((projectMap) => (
          <div
            key={projectMap.name}
            className="bg-black/80 hover:backdrop-blur-2xl w-[350px] h-[450px] rounded-2xl p-4">
            <div className="h-[50%] w-full">
              <img
                className="w-full h-full object-cover rounded-md"
                src={projectMap.image}
                alt={projectMap.name}
              />
            </div>
            <div className="flex justify-center my-5 gap-5">
              {projectMap.icons.map((icon) => (
                <img key={icon} className="w-[40px]" src={icons[icon]} alt={icon} />
              ))}
            </div>
            <div className="w-full">
              <h2 className="text-white text-xl font-[700] mb-1">{projectMap.name}</h2>
              <p className="text-white text-md">{projectMap.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
