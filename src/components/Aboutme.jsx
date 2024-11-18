import React from "react";

import ProfilePhoto from "@/assets/images/ProfilePhoto.jpeg";

const Aboutmesection = () => {
  return (
    <section
      id="About"
      className="flex ssm:flex-col ssm:items-center max-w-[1000px] m-auto p-[16px] text-center w-[100%] h-auto"
    >
      <h1 className="w-full h-auto py-[24px] px-0 font-pixel text-pretty text-center text-pear font-bold  mx-1 lg:text-[5vw] ssm:text-[2rem] ">
        TU PROGRAMADOR
      </h1>
      <div className="flex flex-wrap flex-row items-center justify-center ">
        <img
          className="max-w-[40%] ssm:max-h-60%  h-auto m-[16px] md:rounded-full ssm:rounded-3xl"
          src={ProfilePhoto}
          alt="Profile Photo"
        />
        <p className="ssm:max-w-[100%] ssm:text-center md:max-w-[50%] md:text-left m-[16px] text-pear text-space ">
          Soy Michael Martínez, desarrollador de videojuegos y full-stack
          developer colombiano. Desde 2022, cuando descubrí mi pasión por la
          programación, me he dedicado a explorar este mundo a través de cursos
          y proyectos personales. Actualmente, en Digital House y en mis propias
          creaciones, aplico habilidades en C#, JavaScript y diseño de
          videojuegos para crear experiencias interactivas que emocionen a los
          jugadores. Me encantan los desafíos y siempre busco maneras creativas
          de resolver problemas, aportando valor a la industria del gaming.
        </p>
      </div>
    </section>
  );
};

export default Aboutmesection;
