import React from "react";
import { Formik, Field, Form } from "formik";
import CommentsPrint from "../components/CommentsPrint";

const Comments = () => (
  <div className="comment-section">
    <h2>What do you think about our services?</h2>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        //function yazip bnu firebase1!!!
      }}
    >
      <Form>
        <div className="comment-form">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="message">MESSAGE</label>
          <Field
            id="message"
            name="message"
            placeholder="LEAVE A LOVE HERE"
            type="textarea"
            rows="5"
          />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
    <div className="comment-section">
      <CommentsPrint />
    </div>
  </div>
);

export default Comments;
