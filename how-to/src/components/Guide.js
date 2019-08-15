import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { getGuideById, deleteGuide } from "../store/actions";
import DeleteGuide from "./DeleteGuide";
import decode from "jwt-decode";
import GuideForm from "./GuideForm";

import Form from "./Form.js";
import Card from "./Card.js";
import choco from "../chocomilk.jpg";

function Guide(props) {
  const [isEditing, setIsEditing] = useState(false);

  let userId;
  if (localStorage.token) {
    userId = decode(localStorage.getItem("token")).userId;
  }
  if (props.guide) {
    console.log(props.guide.guide_auth_id);
    console.log(userId);
  }

  useEffect(
    () => {
      const {
        match: { params }
      } = props;

      props.getGuideById(params.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // const [guide, setGuide] = useState({
  //   id: 0,
  //   name: "Make Chocolate Milk",
  //   img: choco,
  //   keyword: ["chocolate", "beverage", "dessert"],
  //   ingredients: ["milk", "chocolate syrup", "spoon", "cup"],
  //   steps: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  // });

  // const editGuide = editedGuide => {
  //   const guideCopy = [...guide];
  //   const guideIndex = guideCopy.findIndex(
  //     guide => guide.id === editedGuide.id
  //   );
  //   guideCopy[guideIndex] = editedGuide;
  //   setGuide(guideCopy);
  // };

  // const deleteGuide = () => {
  //   const {
  //     match: { params }
  //   } = props;
  //   props.deleteGuide(params.id).then(res => {
  //     if (res) {
  //       props.history.push("/my-guides");
  //     }
  //   });
  // };

  return (
    <div>
      <Header as="h1">How-To</Header>
      {props.guide && userId === props.guide.guide_auth_id ? (
        <Link to="/my-guides">
          <h4>&larr;Back to My Guides</h4>
        </Link>
      ) : (
        <Link to="/guides">
          <h4>&larr;Back to Guides</h4>
        </Link>
      )}
      {isEditing ? (
        <GuideForm isEditing={isEditing} guide={props.guide} />
      ) : (
        <Card guide={props.guide} />
      )}

      {props.guide && userId === props.guide.guide_auth_id ? (
        <div>
          <DeleteGuide deleteGuide={deleteGuide} />{" "}
          <button onClick={() => setIsEditing(!isEditing)}>
            {" "}
            {isEditing ? "Go Back" : "Edit"}
          </button>
        </div>
      ) : null}

      {/* <Route
        path="/edit/:name"
        render={props => {
          const guides = guide.find(
            guides => guides.id.toString() === props.match.params.id
          );
          return (
            <Form {...props} initialGuide={guides} submitGuide={editGuide} />
          );
        }}
      /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    guide: state.guideById,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuideById, deleteGuide }
)(Guide);
