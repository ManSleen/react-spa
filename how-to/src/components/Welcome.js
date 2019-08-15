import React from "react";
import "../../src/index.css";
import styled from "styled-components";
import activity from "../../src/activity.JPG";

const AychFive = styled.h5 `
padding-bottom:50px;
`
function Welcome() {
  return (
    <div>
      <h1 className="ui header">WELCOME TO HOW-TO</h1>
      <img src={activity} />
      <AychFive>
        Make how-to guides, save them for later. Learn how to do new things.
        Most importantly, have fun.
      </AychFive>
    </div>
  );
}

export default Welcome;
