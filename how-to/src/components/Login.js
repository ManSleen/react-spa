import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";

import { login } from "../store/actions";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

import "./Login.css";

const Login = (props, { isSubmitting }) => {
  console.log("Login props: ", props);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required")
  });

  const [storedValue, setValue] = useLocalStorage("token");

  return (
    <div className="ui center aligned container">
      <Header as="h1">Welcome Back</Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values, actions) => {
          console.log(actions);
          console.log(values);
          props.login(values).then(res => {
            if (res) {
              props.history.push("/user-dashboard");
            }
          });
          actions.resetForm("");
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
              {isSubmitting && "Loading!"}
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
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
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
