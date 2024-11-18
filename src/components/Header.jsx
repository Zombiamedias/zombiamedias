import React from "react";

import Animation from "./Animation.jsx";
import overlay from "@/assets/videos/overlay.mp4";
const Header = () => {
  return (
    <header>
      <ul className="flex top-0 bottom-0 w-full h-[500px] x-0 bg-[#DEF244] justify-baseline place-items-center overflow-hidden ssm:flex-col ssm: md:flex-row  ">
        <li className="ssm:w-full font-bold font-space items-center md:text-6xl md:pl-32 ssm:text-xl ssm:p-0">
          <video
            autoPlay
            muted
            loop
            className="p-0 m-0 xl:h-[500px] xl:w-auto sm:h-full md:w-48 "
            src={overlay}
            alt="overlay background videogame"
          />
        </li>
        <li className="start w-full min-h-16 place-items-center text-center font-bold font-space ssm:p-0 ssm:text-[6vh] md:text-6xl">
          <h1 className="ssm:invisible md:visible select-none">I´m a </h1> <Animation />
        </li>
      </ul>
    </header>
  );
};
export default Header;
