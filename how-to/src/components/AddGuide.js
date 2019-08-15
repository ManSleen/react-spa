import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AddNewStep from "./AddNewStep";
import AddIngredients from "./AddIngredients.js";

const AddGuide = () => {
  const [fieldValues, setFieldValues] = useState({
    title: "",
    ingredients: [],
    steps: []
  });
  const [guide, setGuide] = useState({ title: "", ingredients: [], steps: [] });
  const [ingredientsArray, setIngredients] = useState([]);
  const [stepArray, setStep] = useState([]);

  const handleIngredientChange = event => {
    setIngredients([...ingredientsArray, event.target.value]);
  };
  const handleStepChange = event => {
    setStep([...stepArray, event.target.value]);
  };

  const handleStepSubmit = event => {
    let newArray = fieldValues.steps;
    newArray.push(stepArray[stepArray.length - 1]);
    setGuide([fieldValues.steps, ...newArray]);
    setStep([""]);
  };
  const handleIngredientSubmit = event => {
    event.preventDefault();
    let newArray = fieldValues.ingredients;
    newArray.push(ingredientsArray[ingredientsArray.length - 1]);
    setGuide([fieldValues.ingredients, ...newArray]);
    setIngredients([""]);
  };

  const handleChange = event => {
    setFieldValues({ ...fieldValues, [event.target.name]: event.target.value });
    console.log(fieldValues);
  };

  const newHandleChange = event => {
    event.preventDefault();
    console.log(guide);
    setGuide({ ...guide, ...fieldValues });
    console.log(guide);
  };

  const handleSave = event => {
    event.preventDefault();
    newHandleChange(event);

    //dont ignore this one though-
    /*This is where it would send the data to the back end. all data is saved as an object in a var called guide*/
  };

  return (
    <>
      <form onSubmit={event => newHandleChange(event)}>
        <label>
          {" "}
          Title:
          <Input
            type="text"
            placeholder="Add Guide Title..."
            name="title"
            onChange={event => handleChange(event)}
          />
        </label>

        <div>
          <h2>What's Needed:</h2>
          <AddIngredients fieldValues={fieldValues} />

          <Input
            placeholder="enter what is needed..."
            name="ingredients"
            onChange={event => handleIngredientChange(event)}
            value={ingredientsArray[ingredientsArray.length - 1]}
          />
          <button onClick={event => handleIngredientSubmit(event)}>
            Add An Ingredient
          </button>
        </div>

        <div>
          <AddNewStep guide={guide} />
          <h2>Add A Step</h2>
          <Input
            placeholder="enter steps..."
            name="steps"
            onChange={event => handleStepChange(event)}
            value={stepArray[stepArray.length - 1]}
          />
          <button onClick={event => handleStepSubmit(event)}>Add A Step</button>
        </div>

        <div>
          <button onClick={event => handleSave(event)}>
            <p>Save</p>
          </button>
          <p>|</p>
          <Link to="/add-guide/delete" />
        </div>
      </form>
    </>
  );
};

export default AddGuide;
