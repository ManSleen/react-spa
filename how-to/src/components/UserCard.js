import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="left" size="mini" src={user.profileimage} />
        <Card.Header>{user.fullname}</Card.Header>
        <Card.Meta>{user.username}</Card.Meta>
        <Card.Meta>{user.email}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
