/* eslint-disable no-unused-vars */
import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa";

import IconLink from "./Iconlink";

const Futer = () => {
  return (
    <footer
      id="Contact"
      className="flex  w-full min-h-[26dvh] justify-center   text-[2rem] space-x-3  p-[1em] mb-0  bg-limeGreen grid-rows-[auto_1fr_auto] border-0 ssm:text-[1.5rem] ssm:flex-col"
    >
      <div className="flex gap-5 justify-center text-center flex-1 flex-col">
        
        <div className="flex flex-row items-center gap-10 w-full justify-center">
            <IconLink href="https://wa.me/+573012955607"> {<BsWhatsapp />} </IconLink>
            <IconLink href="mailto:nixhydev@gmail.com"> {<HiMail />} </IconLink>
            <IconLink href="www.linkedin.com/in/zombiamedias"> {<FaLinkedin />} </IconLink>
            <IconLink href="https://github.com/Zombiamedias">{<FaGithubAlt />}</IconLink>
        </div>
        <h4 className=" text-center text-bold">↑ Contactame ↑</h4>
      </div>
      <h3 className=" text-center flex-1 text-bold">
        ® 2024 Derechos reservados Michael Felipe Martínez Baquero
      </h3>
    </footer>
  );
};

export default Futer;
