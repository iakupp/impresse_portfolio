import { SpeciallizedData } from "@/app/message/sk.json";
import {Section} from "@/app/components/SectionAnimation"



const Speciallized = () => {

  const { title, techstack,backend,services } = SpeciallizedData;

  return (
      <Section>
    <div id="Speciallized">

      <div className="relative pt-[10em] mb-[5em] xl:pt-[20em] xl:mb-[10em] min-h-screen">
          <h2 className="absolute top-0 left-[50%] translate-x-[-50%] font-bold text-[50px] xl:text-[200px] text-neutral-800/20 -z-10 pointer-events-none select-none whitespace-nowrap tracking-widest">
          {"<"}{title}{">"}
          </h2>

          <div id="techstack" className="mx-auto px-[16px] xl:px-[32px] md:border-b border-b-neutral-800 max-w-[90vw] lg:max-w-[70vw]">
            <h2 className="text-4xl text-white pt-10 text-left">
              Frontend :
            </h2>
            <ul className="flex flex-col md:flex-row items-center">
          {Object.values(techstack).map((skill, index) => (
            <div key={index} className="mx-10">
              <li className="text-3xl text-white pt-10 text-left">
                {skill}
              </li>
              <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-[90vw] mx-auto md:hidden "></div>
            </div>
          ))}
            </ul>
          </div>

          <div id="backend" className="mx-auto px-[16px] xl:px-[32px] md:border-b border-b-neutral-800 max-w-[90vw] lg:max-w-[70vw]">
            <h3 className="text-4xl text-white pt-10 text-left">
              Backend :
            </h3>
            <ul className="flex flex-col md:flex-row  items-center">
          {Object.values(backend).map((skill, index) => (
            <div key={index} className="mx-10">
              <li className="text-3xl text-white pt-10 text-left">
                {skill}
              </li>
                <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-[90vw] mx-auto md:hidden "></div>
            </div>
          ))}
            </ul>
          </div>

          <div id="services" className="mx-auto px-[16px] xl:px-[32px] md:border-b border-b-neutral-800 max-w-[90vw] lg:max-w-[70vw]">
          <h3 className="text-4xl text-white pt-10 text-left">
            Services :
          </h3>
        <ul className="flex flex-col md:flex-row items-center">
          {Object.values(services).map((skill, index) => (
            <div key={index} className="mx-10">
              <li className="text-3xl text-white pt-10 text-left">
                {skill}
              </li>
                <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-[90vw] mx-auto md:hidden "></div>
            </div>
          ))}
        </ul>
          </div>
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-auto mt-20"></div>
      </div>
    </div>
    </Section> 
  );
};

export default Speciallized;