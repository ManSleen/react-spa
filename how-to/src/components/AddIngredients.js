import React from "react";

const AddIngredients = (props) => {
   const {fieldValues} = props;
   
    return (
           <>
               <ul>
                   {fieldValues && fieldValues.ingredients.map(ingredient => <li key={"key_ingredient_"+fieldValues.ingredients.indexOf(ingredient)}>{ingredient}</li>)}
               </ul>
            </>   
        )}
        


export default AddIngredients;