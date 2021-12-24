import React from "react";
import { Formik, Field, Form } from "formik";

const ContactForm = () => (
  <div className="form-container">
    <h1 className="form-brand">Tahtadan Tukkan Contact</h1>
    <div className="form-wrapper">
      <div className="form-company-info">
        <h3>Tahtadan Tukkan</h3>
        <ul>
          <li>Adress comes here</li>
          <li>05332360818</li>
          <li>serkan@tahtadandukkan.com</li>
        </ul>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 50));
          alert(JSON.stringify(values, null, 2));
          //function yazip bnu firebase1!!!
        }}
      >
        <div className="form-contact">
          <h3>Email Us</h3>
          <Form>
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
          </Form>
        </div>
      </Formik>
    </div>
  </div>
);

export default ContactForm;
