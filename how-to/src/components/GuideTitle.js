import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Head = styled.div`
  margin-bottom: 30px;
`;


const GuideTitle = props => {
  return (
    <Head>
      {/* to be replaced with back end data */}
      <Header as="h3" textAlign="center">
        {props.title}
      </Header>
    </Head>

    // const GuideTitle = ({ title }) => {
    //   return (
    //     <div>
    //       <Header as="h2" textAlign="center">
    //         {title}
    //       </Header>
    //     </div>
  );
};

export default GuideTitle;
