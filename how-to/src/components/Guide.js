import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { getGuideById, deleteGuide } from "../store/actions";
import DeleteGuide from "./DeleteGuide";

import Form from "./Form.js";
import Card from "./Card.js";
import choco from "../chocomilk.jpg";

function Guide(props) {
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

  const [guide, setGuide] = useState({
    id: 0,
    name: "Make Chocolate Milk",
    img: choco,
    keyword: ["chocolate", "beverage", "dessert"],
    ingredients: ["milk", "chocolate syrup", "spoon", "cup"],
    steps: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  });

  const editGuide = editedGuide => {
    const guideCopy = [...guide];
    const guideIndex = guideCopy.findIndex(
      guide => guide.id === editedGuide.id
    );
    guideCopy[guideIndex] = editedGuide;
    setGuide(guideCopy);
  };

  const deleteGuide = () => {
    const {
      match: { params }
    } = props;
    props.deleteGuide(params.id);
  };

  return (
    <div>
      <Header as="h1">How-To</Header>
      <Link to="/guides">
        <h4>&larr;Back to Guides</h4>
      </Link>
      <Card guide={props.guide} />

      <DeleteGuide deleteGuide={deleteGuide} />
      <Route
        path="/edit/:name"
        render={props => {
          const guides = guide.find(
            guides => guides.id.toString() === props.match.params.id
          );
          return (
            <Form {...props} initialGuide={guides} submitGuide={editGuide} />
          );
        }}
      />
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
