import React, { useState } from "react";
import {Form, Button}  from "semantic-ui-react"

function SearchBar(props) {
  const [state, setState] = useState({ term: "" });

  const onInputChange = event => {
    console.log(setState({ term: event.target.value }));
  };

  const onInputSubmit = event => {
    event.preventDefault();
    props.onSubmit(state.term)
  };

return (
      <Form style={{height:"100px"}} key="tiny" onSubmit={onInputSubmit}>
          <Form.Input type="text" onChange={onInputChange} />
          <Button type="submit">Search</Button>
      </Form>
  );
}
export default SearchBar;
