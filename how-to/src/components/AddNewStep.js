import React from "react";

const AddNewStep = (props) => {
    const {guide} = props
    return (
        <>
            {guide.steps && guide.steps.map(step =>
                <>
                <h3 key={'step_num_' + (guide.steps.indexOf(step) + 1)}>STEP #{guide.steps.indexOf(step) + 1}</h3>
                <div>
                    <p key={"step_key=" + (guide.steps.indexOf(step)) + 1}>{step}</p>
                </div> 
                </>
             )}
        </>
    )
};

export default AddNewStep;