import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./searchBar";
import GuideCard from "./GuideCard";

function SearchGuides() {
  const [guides, setGuides] = useState([]);

  function onSubmit(term) {
    if (term) {
      setGuides(
        guides.filter(g => g.title.toUpperCase().includes(term.toUpperCase()))
      );
    } else {
      setGuide();
    }
  }

  function renderGuides() {
    if (guides) {
      return guides.map(g => (
        <Link to={`/guide/${g.id}`}>
          <GuideCard guide={g} />
        </Link>
      ));
    } else {
      return "Loading...";
    }
  }

  async function setGuide() {
    var response = await axios.get(
      `https://lambda-howto-app.herokuapp.com/api/v1/lifehack`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyLCJ1c2VyTmFtZSI6IkJleW9uY2UiLCJlbWFpbCI6ImJleUBnbWFpbC5jb20iLCJndWlkZSI6dHJ1ZSwiaWF0IjoxNTY0NTg0MTQ4LCJleHAiOjE1Njk3NjgxNDh9.3UxOhAGjnr_yI9A9RouUoUFhr1OabdP5WyI5wTAAa2Y"
        }
      }
    );
    setGuides(response.data.body);
  }

  useEffect(() => {
    setGuide();
  }, [...guides]);

  return (
    <div className="ui segment">
      <SearchBar onSubmit={onSubmit} />
      <div className="guide-list-container">{renderGuides()}</div>
    </div>
  );
}

export default SearchGuides;
