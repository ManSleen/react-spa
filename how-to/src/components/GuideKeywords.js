import React from "react";
// import {  } from "semantic-ui-react";
import styled from "styled-components";

const KeyDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 344px;
`;

const GuideKeywords = props => {
  return (
    <KeyDiv>
      {/* to be replaced with back end data */}
      <p className="keywords">keywords: {props.keywords}</p>
    </KeyDiv>

    // const GuideKeywords = ({ keywords }) => {
    //   return (
    //     <div>
    //       <p>
    //         keywords:{" "}
    //         {keywords.map((keyword, index) => {
    //           if (index < keywords.length - 1) {
    //             return `${keyword}, `;
    //           } else {
    //             return keyword;
    //           }
    //         })}
    //       </p>
    //     </div>
  );
};

export default GuideKeywords;
