import {Section} from "@/app/components/SectionAnimation"

import { ProjectsData } from "@/app/message/sk.json";

const Projects = () => {

  const { title, projects } = ProjectsData;
  const projectsArray = Object.values(projects);

  return (
    <Section>
    <div id="Projects">
      <div className="relative pt-[10em] mb-[5em] xl:pt-[20em] xl:mb-[10em] min-h-screen">
        <h2 className="absolute top-[.5em] left-[50%] translate-x-[-50%] font-bold text-[50px] xl:text-[150px] text-neutral-800 -z-10 pointer-events-none select-none whitespace-nowrap tracking-widest font-alumi">
          {"<"}{title}{">"}
        </h2>

        {/* {console.log(projects)} */}
        <ul className="flex flex-col items-center">
          {projectsArray.map((project, index) => (
            <li className="" key={index}>
              <div className="flex items-center justify-between">
              <div
                className="text-2xl xl:text-4xl text-white pt-10 text-left relative"
                // onClick={() =>
                //   setOpenModal(openModal === project.name ? null : project.name)
                // }
              >
                {project.title}
              </div>
              <div className="flex items-center justify-end gap-6 pt-10">
                <button className="text-[var(--primary-color)] cursor-pointer  hover:underline transition-all duration-200 lg:text-2xl"> <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a></button>
                <button className="text-[var(--primary-color)] cursor-pointer  hover:underline transition-all duration-200 lg:text-2xl"> <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a></button>
                </div>
                
              </div>
                <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-[80vw] mx-auto"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-auto"></div>
      </div>
      </Section>
  );
};

export default Projects;