/* eslint-disable no-unused-vars */
import React from "react";
// Icons
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaUnity } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  const icons = [
    <SiTailwindcss className="text-[3rem] md:text-[2.5vw]" key="tailwind" />,
    <IoLogoJavascript className="text-[3rem] md:text-[2.5vw]" key="javascript" />,
    <TbBrandCSharp className="text-[3rem] md:text-[2.5vw]" key="csharp" />,
    <FaUnity className="text-[3rem] md:text-[2.5vw]" key="unity" />,
    <FaReact className="text-[3rem] md:text-[2.5vw]" key="react" />,
    <SiHtml5 className="text-[3rem] md:text-[2.5vw]" key="html" />,
    <FaCss3Alt className="text-[3rem] md:text-[2.5vw]" key="css" />,
    <SiMysql className="text-[3rem] md:text-[2.5vw]" key="mysql" />,
  ];

  return (
    <section className="flex flex-col place-items-center bg-gray-800 p-20 gap-y-6 ">
      <style>
        {`
          .hex-cell {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            transition: transform 0.3s, background-color 0.3s, color 0.3s;
          }
        `}
      </style>
      {/* Fila 1 - 2 columnas */}
      <h1 className="w-full h-auto py-[24px] px-0 font-pixel text-pretty text-center text-pear font-bold  mx-1 lg:text-[5vw] ssm:text-[2rem] ">
        Habilidades y Tecnologias
      </h1>
      <ul className="flex flex-col justify-center w-full">
        <li className="flex justify-center my-2 place-items-center ">
          {icons.slice(0, 2).map((icon, i) => (
            <div
              className="hex-cell  flex place-items-center justify-center mx-[1em]  my-0 overflow-hidden ssm:w-[6rem] ssm:h-[13vh] md:w-[6vw] md:h-[6vw] text-center text-[#52e2f2] bg-night hover:scale-110 hover:bg-[#52e2f2] hover:text-night "
              key={`row1-${i}`}
            >
              {icon}
            </div>
          ))}
        </li>        {/* Fila 2 - 3 columnas */}
        <li className="flex justify-center mb-2 place-items-center ">
          {icons.slice(2, 5).map((icon, i) => (
            <div
              className="hex-cell  flex place-items-center justify-center mx-[1em]  my-0 overflow-hidden ssm:w-[6rem] ssm:h-[13vh] md:w-[6vw] md:h-[6vw] text-center text-[#52e2f2] bg-night hover:scale-110 hover:bg-[#52e2f2] hover:text-night "
              key={`row2-${i}`}
            >
              {icon}
            </div>
          ))}
        </li>
        {/* Fila 3 - 2 columnas */}
        <li className="flex justify-center my-2 place-items-center ">
          {icons.slice(5, 7).map((icon, i) => (
            <div
              className="hex-cell  flex place-items-center justify-center mx-[1em]  my-0 overflow-hidden ssm:w-[6rem] ssm:h-[13vh] md:w-[6vw] md:h-[6vw] text-center text-[#52e2f2] bg-night hover:scale-110 hover:bg-[#52e2f2] hover:text-night "
              key={`row3-${i}`}
            >
              {icon}
            </div>
          ))}
        </li>
      </ul>
    </section>
  );
};

export default Skills;
