import React from "react";
import { Header, Card } from "semantic-ui-react";
import styled from "styled-components";

const Instructions = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const GuideStepCard = props => {
  return (
    <Instructions>
      <Header as="h3" textAlign="center">
        Step #1
      </Header>
      <Card.Group>
          <Card.Content className="cardStyle"></Card.Content>{props.steps}
      </Card.Group>
    </Instructions>

    // const GuideStepCard = ({ index, guide }) => {
    //   return (
    //     <div>
    //       <Header as="h3" textAlign="center">
    //         Step {index + 1}
    //       </Header>
    //       <Card.Group>
    //         <Card>
    //           <Card.Content>{guide}</Card.Content>
    //         </Card>
    //       </Card.Group>
    //     </div>
  );
};

export default GuideStepCard;
