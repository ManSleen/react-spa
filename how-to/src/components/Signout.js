import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

// Created Modal for Signout use

export default function Signout({ logout }) {
  return (
    <Modal trigger={<Button>Sign Out</Button>} closeIcon>
      <Header icon="archive" content="Sign Out" />
      <Modal.Content>
        <p>You are about to leave How-To.</p>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red">
          <Icon name="remove" /> No
        </Button>
        <Button onClick={logout} color="green">
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

// ******* Component based on design file *******
// import { Header, Message, Button } from "semantic-ui-react";
// import styled from "styled-components";

// const Logout = styled.div`
//     margin: 0 auto;
//     text-align: center;
//     align-content: center;
//     text-transform: uppercase;
// `;

// export default function Signout() {
//     return (
//         <Logout>
//             <Header as='h1'>Sign Out</Header>
//             <Message>
//                 <Message.Header>You are about to leave How-To.</Message.Header>
//                 <p>Are you sure?</p>
//             </Message>
//             <Button content='No, Cancel' primary />
//             <Button content='Yes, Sign Out' secondary />
//         </Logout>
//     );
// }
