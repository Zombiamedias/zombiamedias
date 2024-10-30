import React from "react";

import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Debug.log(Game Dev);  ",
          2000,
          "Game Design Jr ",
          2000,
          "<> Front Dev </>",
          2000,
          () => {
            console.log("Sequence completed"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: "flex", textAlign: "center", color: "#4f46e5" }}
      />
    </>
  );
};
export default Animation;
