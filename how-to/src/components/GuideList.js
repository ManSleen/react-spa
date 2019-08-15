import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGuides, getUsers } from "../store/actions";
import GuideCard from "./GuideCard";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const GuideContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const LineDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 8px;
  background: #5c5c5c;
  margin-bottom: 14px;
`;

const StyledLink = styled(Link)`
  &&&{
    text-decoration: none !important;
    color: black;
  }
`
const GuideList = ({ getGuides, getUsers, guides, users }) => {
  useEffect(() => {
    getGuides();
    getUsers();
  }, [getGuides, getUsers]);

  return (
    <div>
      <Header>Browse All Guides</Header>
      <LineDiv></LineDiv>
      <GuideContainer>
          {guides
            ? guides
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .map((guide, index) => (
                <StyledLink to={`/guide/${guide.id}`}>
                  <GuideCard key={index} users={users} guide={guide} />
                </StyledLink>
              ))
            : null}
      </GuideContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    guides: state.guides,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuides, getUsers }
)(GuideList);
