import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Form,
  Header,
  Input,
  Radio,
  Dimmer,
  Loader
} from "semantic-ui-react";

import { signUp } from "../store/actions";

const Signup = (props, { isSubmitting }) => {
  const SecretDiv = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
  `;

  const LoginSchema = Yup.object().shape({
    // fullname: Yup.string().required("Name is required"),

    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email()
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required")
    // confirmpassword: Yup.string()
    //   .min(8, "Your password must be at least 8 characters long")
    //   .required("Your password is required")
  });

  return (
    <SecretDiv>
      <Header className="sign-up-header" as="h1">
        Welcome To How-To
      </Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          fullname: "Johhny Doe",
          username: "jd123",
          email: "jd123@gmail.com",
          password: "12345678",
          guide: false
          /* confirmpassword: "" */
        }}
        onSubmit={(values, actions) => {
          props.signUp(values).then(res => {
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
          values,
          setFieldValue
        }) => {
          return (
            <Form className="formContainer" onSubmit={handleSubmit}>
              <Form.Group>
                <label>Choose Account Type</label>
                <Form.Field
                  label="Creator Account"
                  name="guide"
                  checked={values.guide === true}
                  value="true"
                  control={Radio}
                  onChange={() => setFieldValue("guide", true)}
                />

                <Form.Field
                  label="General User Account"
                  name="guide"
                  checked={values.guide === false}
                  value="false"
                  control={Radio}
                  onChange={() => setFieldValue("guide", false)}
                />
              </Form.Group>

              <Form.Field
                label="Full Name"
                value={values.fullname || ""}
                className="emailContainer"
                control={Input}
                autoComplete="off"
                placeholder="Full Name"
                name="fullname"
                type="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullname && touched.fullname ? (
                <p style={{ margin: "0", color: "red" }}>{errors.fullname}</p>
              ) : null}

              <Form.Field
                label="Username"
                value={values.username || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Username"
                name="username"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p style={{ margin: "0", color: "red" }}>{errors.username}</p>
              ) : null}
              <Form.Field
                label="Email"
                value={values.email || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ margin: "0", color: "red" }}>{errors.email}</p>
              ) : null}
              <Form.Field
                label="Password"
                value={values.password || ""}
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
              {/* <Form.Field
                label="Confirm Password"
                value={values.confirmpassword || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Confirm Password"
                name="confirmpassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p style={{ margin: "0", color: "red" }}>
                  {errors.confirmpassword}
                </p>
              ) : null} */}

              <Button className="loginButton" type="submit" color="blue">
                Sign Up &rarr;
              </Button>
              {isSubmitting && "Loading!"}
              <p className="resetCred">
                Already have an account? <Link to="/login">Sign In</Link> here!
              </p>
            </Form>
          );
        }}
      />
      {props.isLoading && (
        <Dimmer active>
          <Loader size="massive" />
        </Dimmer>
      )}
    </SecretDiv>
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
  { signUp }
)(Signup);
