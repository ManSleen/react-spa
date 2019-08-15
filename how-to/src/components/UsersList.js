import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions";

const UsersList = props => {
  return (
    <div>
      <button onClick={props.getUsers}>Get All Users</button>
    </div>
  );
};

export default connect(
  null,
  { getUsers }
)(UsersList);
