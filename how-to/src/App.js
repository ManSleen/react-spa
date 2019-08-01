import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UsersList from "./components/UsersList";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import UserDashboard from "./components/UserDashboard";
import CreatorDashboard from "./components/CreatorDashboard";
import GuideList from "./components/GuideList";
import PrivateRoute from "./components/PrivateRoute";
import AddGuide from "./components/AddGuide";
import Guide from "./components/Guide";

import Form from "./components/Form.js";

const App = ({ user, isLoggedIn }) => {
  const userType = localStorage.getItem("userType");
  return (
    <div>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" render={props => <Welcome {...props} />} />
          <Route
            path="/login"
            render={props =>
              isLoggedIn ? (
                <Redirect to={`/${userType}-dashboard`} />
              ) : (
                <Login {...props} />
              )
            }
          />
          <Route
            path="/sign-up"
            render={props =>
              isLoggedIn ? (
                <Redirect to="/user-dashboard" />
              ) : (
                <Signup {...props} />
              )
            }
          />
          {/* <Route path="/sign-up" render={props => <Signup {...props} />} /> */}
          <Route path="/add-guide" component={AddGuide} />
          <Route path="/edit" render={props => <Form {...props} />} />
          <PrivateRoute
            exact
            path="/guide/:id"
            render={props => <Guide {...props} />}
          />

          <PrivateRoute path="/user-dashboard" component={UserDashboard} />
          <PrivateRoute
            path="/creator-dashboard"
            component={CreatorDashboard}
          />
          <PrivateRoute path="/guides" component={GuideList} />
        </Switch>
        {/* <Login /> */}
        {/* <Signup />
        <UsersList /> */}
        {/* <Welcome/> */}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
