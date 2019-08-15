import React, { useState } from "react";

const Form = props => {
  const { initialGuides, history } = props;
  const [guides, setGuides] = useState(
    initialGuides || {
      name: "",
      img: "",
      keyword: [],
      ingredients: [],
      steps: []
    }
  );

  const handleChange = event => {
    setGuides({ ...guides, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setGuides(guide => [...guide, guides]);
    // submitGuide(guides);
    // setGuides({ name: "", img: "", keyword: [], ingredients: [], steps: [] });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Guide Name"
        value={guides.name}
        name="name"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
