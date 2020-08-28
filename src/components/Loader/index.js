import React from "react";
import { DotWrapper, Dot } from "./styles";
function Loader() {
  return (
    <DotWrapper>
      <Dot delay="0s"></Dot>
      <Dot delay="0.2s"></Dot>
      <Dot delay="0.4s"></Dot>
    </DotWrapper>
  );
}

export default Loader;
