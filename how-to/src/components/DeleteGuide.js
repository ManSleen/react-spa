import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

// Created Modal for Delete Guide use
// Link to modal when 'delete' is clicked

export default function DeleteGuide({ deleteGuide }) {
  return (
    <Modal trigger={<Button>Delete</Button>} closeIcon>
      <Header icon="archive" content="Delete Guide" />
      <Modal.Content>
        <p>You are about to delete this guide.</p>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red">
          <Icon name="remove" /> No
        </Button>
        <Button onClick={deleteGuide} color="green">
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

// ******* Component based on design file *******
// import { Header, Message, Button } from "semantic-ui-react";
// import styled from "styled-components";

// const GuideDel = styled.div`
//     margin: 0 auto;
//     text-align: center;
//     align-content: center;
//     text-transform: uppercase;
// `;

// export default function DeleteGuide() {
//     return (
//         <GuideDel>
//             <Header as='h1'>Delete This Guide?</Header>
//             <Message>
//                 <Message.Header>You are about to delete this guide.</Message.Header>
//                 <p>Are you sure?</p>
//             </Message>
//             <Button content='No, Cancel' primary />
//             <Button content='Yes, Sign Out' secondary />
//         </GuideDel>
//     );
// }
