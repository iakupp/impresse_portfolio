import { SpeciallizedData } from "@/app/message/sk.json";
import {Section} from "@/app/components/SectionAnimation"



const Speciallized = () => {

  const { title, skills } = SpeciallizedData;

  return (
      <Section>
    <div id="Speciallized">

      <div className="relative pt-[10em] mb-[5em] xl:pt-[20em] xl:mb-[10em] min-h-screen">
        <h2 className="absolute top-[.5em] left-[50%] translate-x-[-50%] font-bold text-[50px] xl:text-[150px] text-neutral-800 -z-10 pointer-events-none select-none whitespace-nowrap tracking-widest">
          {"<"}{title}{">"}
        </h2>
        <ul className="flex flex-col items-center">
          {Object.values(skills).map((skill, index) => (
            <div key={index}>
              <li className="text-4xl text-white pt-10 w-[70vw] text-left">
                {skill}
              </li>
              <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-[80vw] mx-auto"></div>
            </div>
          ))}
        </ul>
      </div>
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-auto"></div>

    </div>
      </Section>
  );
};

export default Speciallized;