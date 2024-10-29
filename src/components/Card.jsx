
import React, { Children, useState } from "react";


const Card = ({ text, title, src, alt,children }) => {
  var iconCall;
  return (
    <li>
      <div className=" max-w-80 rounded-lg overflow-hidden bg-limeGreen transition-all duration-200 m-auto shadow-xl shadow-softCyan ">
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="ssm:shrink-0 w-full h-[200px] object-cover transition-all origin-center duration-[0.3s] hover:scale-110"
          />
        </div>
        <div className="p-4  ">
          <h2 className=" font-space   font-bold text-[1.5em] text-[#0D0D0D] mt-0 mb-2 mx-0  ">
            {" "}
            {title}{" "}
          </h2>
          <p className="font-space font-semibold text-[#0D0D0D] mt-0 mb-4 mx-0">
            {" "}
            {text}{" "}
          </p>
          <div className="flex justify-center space-x-10">{children}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
