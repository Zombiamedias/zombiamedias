/* eslint-disable no-unused-vars */
import React from "react";

// Components
import Card from "./Card.jsx";
import IconLink from "./Iconlink.jsx";
// local images
import card1 from "../assets/images/card1.jpeg";
import card2 from "../assets/images//card2.jpg";
import bannerEoS from "../assets/images/bannerEoS.png";
import NectarQuest from "../assets/images/NectarQuest.gif";
import TrickOrTrade from "../assets/images/TrickOrTrade.png";

// icons react
import { VscGithub } from "react-icons/vsc";
import { FaItchIo } from "react-icons/fa";


const Projects = () => {
  return (
    <article id="Projects" className="flex flex-col py-10 items-center w-full h-auto justify-center gap-y-10 text-center text-wrap ">
      <section className="gap-y-10 py-10 bg-softBlue rounded-xl mx-4 w-11/12 ">
        <h1 className="w-full h-auto  font-pixel text-pretty text-center text-pear font-bold  mx-1 lg:text-[5vw] ssm:text-[2rem] ">
          PROYECTOS
        </h1>
        <ul className="flex-wrap h-auto text-center ">
          <li className="py-8">
            <h2 className="w-full h-auto py-4 font-pixel text-center font-bold text-[#FFF] ssm:text-[1.5rem] md:text-[3vw]">
              UNITY
            </h2>
            <ol className="flex justify-center items-center space-20 ssm:flex-col md:flex-row gap-20">
            <Card
                title="Echoes Of The Subconscious"
                text="Plataforma 2d, desarrolle en las mecánicas, movimiento de la cámara, interacción con enemigos y su entorno"
                src={bannerEoS}
                alt="bannerEoS"
              >
                { <IconLink href="https://stephkoala.itch.io/echoes-of-the-subconscious"> {<FaItchIo />} </IconLink> }
                { <IconLink href="https://github.com/Zombiamedias/Dig-Deeper"> {<VscGithub />} </IconLink> }
              </Card>

              <Card 
                title="Truco o Trato: La Leyenda de Calabazo"
                text="Desarrollé el patrullaje usando un mapeo de terreno a través del sistema NavMesh y un rango de los enemigos para que tengan su sistema de combate cuerpo a cuerpo o distancia según su rango de visión"
                src={TrickOrTrade}
                alt="TrickOrTrade"
              >
                { <IconLink href="https://stephkoala.itch.io/gjam-2"> {<FaItchIo />}</IconLink> }
                { <IconLink href="https://github.com/dan-ruiz/gameJam2-grupo3"> {<VscGithub />} </IconLink> }
              </Card>

              <Card 
                title="Nectar Quest"
                text="Lidere desde el tipo de juego hasta la mecánica desde su creación, y elegir el arte que se usó en el juego para el rendimiento"
                src={NectarQuest}
                alt="NectarQuest"
              >
                { <IconLink href="https://j4zo.itch.io/nectarquest"> {<FaItchIo />} </IconLink> }
                { <IconLink href="https://github.com/Adriana-94/Videojuegos"> {<VscGithub />} </IconLink> }
              </Card>
            </ol>
          </li>
          <br />
        </ul>
      </section>
    </article>
  );
};

export default Projects;
