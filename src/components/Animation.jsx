import React from "react";

import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <>
      <TypeAnimation className=" text-center text-[#4f46e5] select-none  "
        sequence={[
          "Developer;  ",
          2000,
          "Design",
          2000,
          // () => {
          //   console.log("Sequence completed"); // Place optional callbacks anywhere in the array
          // },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        // style={{ display: "flex", textAlign: "center", color: "#4f46e5", userSelect: "none" }}
      />
    </>
  );
};
export default Animation;
