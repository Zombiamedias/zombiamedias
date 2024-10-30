import React from "react";

const IconLink = ({ href, children }) => {
  return (
    <a
      className="max-w-[3.5rem] max-h-[3.2rem] text-center cursor-pointer rounded-full text-4xl bg-[#def244] text-[#0D0D0D] p-2   outline-offset-2 outline-black outline-4 border-darkViolet hover:animate-bounce "
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default IconLink;
