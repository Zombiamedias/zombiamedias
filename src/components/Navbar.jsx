import React,{ useState } from 'react';

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import LogoWhite from "@/assets/images/LogoWhite.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  function openMenu() {
    setToggle(true)
  }
  function closeMenu() {
    setToggle(false)
  }
  return (
    <article className="bg-[#260273] text-[#def244] font-pixel h-auto">
      <nav className="flex items-center justify-between align-middle p-7 lg:flex-row  text-xl ">
        <li className="w-2/5 flex flex-1 align-middle justify-start ">
          <img src={LogoWhite} alt="Logo White" className=" size-auto w-8 h-12 px-0 py-0 m-0  " />
          <span className="text-[#def244] p-2 select-none">Michael Martínez</span>
        </li>
        <li className="flex-1  items-center justify-center w-3/5 h-auto gap-20 text-darkViolet no-underline ">
          <div className="ssm:hidden lg:flex space-x-5 justify-around items-end">
            <a href="#Projects" className=" text-[#def244] px-3 py-2 rounded-full hover:bg-[#4f46e5] transition delay-150" >PROYECTOS</a>
            {/* <a id="Experience" href="#" className="text-[#def244] px-3 py-2 rounded-full hover:bg-[#4f46e5] transition delay-150">EXPERIENCIA</a> */}
            <a href="#About" className=" text-[#def244] px-3 py-2 rounded-full hover:bg-[#4f46e5] transition delay-150">SOBRE MI</a>
            <a href="#Contact" className=" text-[#def244] px-3 py-2 rounded-full hover:bg-[#4f46e5] transition delay-150">CONTÁCTAME</a>
          </div>
        </li>
        <div className="ssm:block lg:hidden flex-none ">
          {toggle ? (<AiOutlineClose onClick={closeMenu} size={35} className="text-[#def244] cursor-pointer" />) : (<FaBars onClick={openMenu} size={35} className="text-[#def244]" />)
          }

        </div>
      </nav>
      <div className="ssm:block lx:hidden">
        {toggle ? (
          <div className="flex flex-col text-center justify-items-center">
            <a href="#Projects" className=" text-[#def244] px-3 py-2 w-full hover:bg-[#4f46e5] transition delay-150" >PROYECTOS</a>
            <a href="#" className=" text-[#def244] px-3 py-2 w-full hover:bg-[#4f46e5] transition delay-150">EXPERIENCIA</a>
            <a href="#About" className=" text-[#def244] px-3 py-2 w-full hover:bg-[#4f46e5] transition delay-150">SOBRE MI</a>
            <a href="#Contact" className=" text-[#def244] px-3 py-2 w-full hover:bg-[#4f46e5] transition delay-150">CONTÁCTAME</a>
          </div>
        ) : (
          <div></div>
        )}

      </div>
    </article>
  )
}

export default Navbar