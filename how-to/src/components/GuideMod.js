import React from "react";
import { Link } from 'react-router-dom';
import { Header } from "semantic-ui-react";

const GuideMod = () => {
  return ( 
    <div>
        <Header as="h4" textAlign='right'>
          {/* replace /edit with correct endpoint */}
          <Link to={`/edit`}>Edit</Link>
        </Header>
    </div> 
  );
};

export default GuideMod;
