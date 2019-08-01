import React from "react";
import { Link } from "react-router-dom";

import GuideTitle from "./GuideTitle.js";
import GuideImage from "./GuideImage.js";
import GuideKeywords from "./GuideKeywords.js";
import GuideIngredients from "./GuideIngredients.js";
import GuideStepCard from "./GuideStepCard.js";
// import GuideMod from './GuideMod.js';

import "./Card.css";

// { name: "", img: "", keyword: [], ingredients: [], steps: [] };

const Card = ({ guide }) => {
  console.log(guide);
  //   const { guide } = props; // destructuring
  return guide ? (
    <div className="cardContainer">
      <GuideTitle title={guide.title} />
      <GuideImage src={guide.banner_image} />
      {/* <GuideKeywords keywords={guide.keyword.map(word => word + " ")} /> */}
      {/* <GuideIngredients ingredients={guide.ingredients} /> */}
      {/* <GuideStepCard steps={guide.steps} /> */}
      {/* <GuideMod /> */}
      <Link to={`/edit/${guide.name}`}>Edit</Link>
      {/* { " | "} */}
      {/* <Link to={`/share`}>Share</Link> */}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Card;
