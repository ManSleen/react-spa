import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import SignOut from "./Signout";
import { logout, getSingleUser } from "../store/actions";
import decode from "jwt-decode";
import userImage from '../default-user-img.jpg'
import UsersList from "./UsersList";

const BodyWrap = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-bottom:20px;
`;

const Span = styled.div`
  width: 100%;
  height: 219px;
  background: #b89498;
  margin-top: 0;
  margin-bottom: 5px;
`;
const ImageDiv = styled.div`
  height: 116px;
  width:116px;
  margin-left:10px;
  margin-top:5px;
`
const ProfileImage = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin-top:5px;
`;
const UsernameWrapper = styled.div`
  width: 80%;
  height: 120px;
  margin-bottom:0;
`
const H2 = styled.h2`
  width: 100%;
  font-family: Nunito;
  margin-top:0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-left: 10px;
  line-height: 10px;
  text-align: left;
  color: #000000;
`;
const H3 = styled.h3`
  width: 100%;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  margin-left: 10px;
  margin-top: 100px;
  line-height: 40px;
  text-align: left;
  color: #000000;
`;
const LineDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 8px;
  background: #5c5c5c;
`;

const CardContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 180px;
  height: 140px;
  margin-top: 15px;
  background: #7EA85E;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardP = styled.p`
  width: 100%;
  height: 50px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 7px;
  color: #ffffff;
  margin-bottom:10px;
`;
const CreatorDashboard = props => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userImg: "",
    userEmail: ""
  });

  let userId;
  if (localStorage.token) {
    userId = decode(localStorage.getItem("token")).userId;
  }

  useEffect(
    () => {
      props.getSingleUser(userId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <BodyWrap>
      <Span>
        {" "}
        {/*user card */}
        <ImageDiv>
          <ProfileImage
            src={userImage}
            alt="your uploaded user-photo"
          />
        </ImageDiv>
        <UsernameWrapper>
          <H3>{props.user ? props.user.fullname : "Firstname Lastname"}</H3>
          <H2>{props.user ? props.user.username : "User Name"}</H2>
        </UsernameWrapper>
        {/* <Link to="/settings">
          <img src="../public/images/edit-icon.png" alt="edit icon" />
        </Link> */}
      </Span>

      <LineDiv>{/*grey line under the user card */}</LineDiv>
      
      {/* <button onClick={() => props.getSingleUser(userId)}>
        Get Single User
      </button> */}
      <CardContainer>
      
        {" "}
        {/* guide-links card container */}
        <Link to="/guides">
          <Card>
            {/*box link thing*/}
            <CardP>Browse Guides</CardP>
          </Card>
        </Link>
        <Link to="/my-guides">
          <Card>
            {/*box link thing*/}
            <CardP>My Guides</CardP>
          </Card>
        </Link>
        <Link to="/guide-form">
          <Card>
            {/*box link thing*/}
            <CardP>Add Guide</CardP>
          </Card>
        </Link>
        <Link to="/Signout">
          <Card>
            {/*box link thing*/}
            <CardP>Log Out</CardP>
          </Card>
        </Link>
      </CardContainer>
    </BodyWrap>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { logout, getSingleUser }
)(CreatorDashboard);
