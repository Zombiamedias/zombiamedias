/* eslint-disable no-unused-vars */
import React from "react";

// Components
import Card from "./Card.jsx";
import IconLink from "./Iconlink.jsx";
// local images
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpg";
import bannerEoS from "../assets/bannerEoS.png";
import NectarQuest from "../assets/NectarQuest.gif";
import TrickOrTrade from "../assets/TrickOrTrade.png";

// icons react
import { VscGithub } from "react-icons/vsc";
import { FaItchIo } from "react-icons/fa";

const Projects = () => {
  return (
    <article
      id="Projects"
      className="flex flex-col space-y-10 items-center w-full h-full py-11 justify-center"
    >
      <section className="px-0 py-1 bg-softBlue rounded-xl mx-4 w-11/12 ">
        <h1 className="p-0 py-24 ssm:text-[3.5rem] font-pixel text-center text-pear font-bold w-full h-12 mx-1 ssm:text-2xl lg:text-[5vw] ">
          PROYECTOS
        </h1>
        <br />
        <ul className="flex-wrap h-full text-center p-10 ">
          <h2 className="w-full font-pixel text-center font-bold ssm:text-[2.5rem]  text-[#FFF] py-4 px-0 ssm:text-xl md:text-[2vw]">
            WEB
          </h2>
          <li className="p-2 ">
            <ol className="flex flex-row justify-center items-center space-20 ssm:flex-col md:flex-row gap-20">
              <Card
                src={card1}
                title="Mokepon"
                text="Con un nombre alusivo a la famosa serie, un pequeño sistema de batallas hecho en puro Javascript, Html y css ELIGE A TU MOKEPON Y GANA ANTES DE PERDER 3 VIDAS"
              >
                {<IconLink href="https://github.com/Zombiamedias/Mokepon-project">{<VscGithub />}</IconLink>}
              </Card>
              <Card
                src={card2}
                alt="Imagen web huellitas"
                title="Huellitas"
                text="Proyecto en desarrollo: un eCommerce de servicios de veterinaria, proyecto de graduacion de bootcamp, participe en la parte de estilos y visuales con la creacion de la interfaz de pagina"
              >
                {
                  <IconLink href="https://github.com/Zombiamedias/grupo_12_huellitas">
                    {<VscGithub />}
                  </IconLink>
                }
              </Card>
            </ol>
          </li>
          <li className="py-8">
            <br />
            <h2 className="w-full font-pixel text-center font-bold ssm:text-[2.5rem]  text-[#FFF] py-4 px-0 ssm:text-xl md:text-[2vw]">
              UNITY
            </h2>
            <ol className="flex flex-row justify-around ">
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
        </ul>
      </section>
    </article>
  );
};

export default Projects;
