import React from "react";
import { Formik, Field, Form } from "formik";

const ContactForm = () => (
  <div className="contact-form">
    <h2>Ask your local carpenter!</h2>
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
      <div className="contact-form-input">
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
  </div>
);

export default ContactForm;
