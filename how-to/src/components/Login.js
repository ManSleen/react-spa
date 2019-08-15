import React from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Input, Dimmer, Loader } from "semantic-ui-react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { login } from "../store/actions";

import "./Login.css";

const Login = (props, { isSubmitting }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required")
  });

  return (
    <div className="ui center aligned container">
      <Header as="h1">Welcome Back</Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "bey@gmail.com",
          password: "123456789"
        }}
        onSubmit={(values, actions) => {
          props.login(values).then(res => {
            if (res) {
              const userType = localStorage.getItem("userType");
              props.history.push(`/${userType}-dashboard`);
              actions.resetForm("");
            }
          });
        }}
        render={({
          touched,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          values
        }) => {
          return (
            <Form className="formContainer" onSubmit={handleSubmit}>
              <Form.Field
                value={values.email || ""}
                label="Email Address"
                className="emailContainer"
                control={Input}
                autoComplete="off"
                placeholder="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ margin: "0", color: "red" }}>{errors.email}</p>
              ) : null}
              <Form.Field
                value={values.password || ""}
                label="Password"
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p style={{ margin: "0", color: "red" }}>{errors.password}</p>
              ) : null}
              <p className="resetCred">
                <a href="#" className="forgotPw">
                  Forgot Your Password?
                </a>
              </p>
              <Button className="loginButton" type="submit" color="blue">
                Sign In &rarr;
              </Button>

              <p className="resetCred">
                Don't have an account?{" "}
                <a href="#" className="newAcct">
                  Sign Up
                </a>{" "}
                here!
              </p>
            </Form>
          );
        }}
      />
      {props.isLoggingIn && (
        <Dimmer active>
          <Loader size="massive" />
        </Dimmer>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    guides: state.guides,
    error: state.error,
    isLoading: state.isLoading,
    isLoggingIn: state.isLoggingIn,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
