import React from 'react';

import ProfilePhoto from "./assets/images/ProfilePhoto.jpeg";


const Aboutmesection = () => {
  
  return (
    <section id="About" className="flex ssm:flex-col ssm:items-center max-w-[800px] m-auto p-[16px] text-center w-[100%]" >
    <h2 className="ssm:text-[2em] mb-[16px] font-pixel text-pear  md:text-[3vw]">TU PROGRAMADOR</h2>
    <div className="flex flex-wrap flex-row items-center justify-center " >
        <img className="ssm:max-w-[100%] md:max-w-[40%] h-auto m-[16px] md:rounded-full ssm:rounded-xl" src={ProfilePhoto} alt='Profile Photo' />
        <p className="ssm:max-w-[100%] ssm:text-center md:max-w-[50%] md:text-left m-[16px] text-pear text-space text- " >Soy Michael Martínez, desarrollador de videojuegos y full-stack developer colombiano. Desde 2022, cuando descubrí mi pasión por la programación, me he dedicado a explorar este mundo a través de cursos y proyectos personales. Actualmente, en Digital House y en mis propias creaciones, aplico habilidades en C#, JavaScript y diseño de videojuegos para crear experiencias interactivas que emocionen a los jugadores. Me encantan los desafíos y siempre busco maneras creativas de resolver problemas, aportando valor a la industria del gaming.</p>
    </div>
</section>
  )
}

export default Aboutmesection


