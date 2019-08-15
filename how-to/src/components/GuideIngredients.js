import React from "react";
import { Header, List } from "semantic-ui-react";

const GuideIngredients = props => {
  return (
    // const GuideIngredients = ({ materials }) => {
    //   return (

    <div>
      <Header as="h3" textAlign="center">
        What's Needed
      </Header>
      <List bulleted className="ingredients">
        {/* to be replaced with back end data */}
        {props.ingredients.map(ingred => (
          <List.Item>{ingred}</List.Item>
        ))}
      </List>
    </div>

    /* {materials.map(material => (
          <List.Item>{material}</List.Item>
        ))}
      </List>
    </div> */
  );
};

export default GuideIngredients;
