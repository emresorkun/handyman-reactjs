import React from "react";
import { Formik, Field, Form } from "formik";

const ContactForm = () => (
  <div className="form-container">
    <div className="form-wrapper">
      
      <div className="form-company-info">
        <h3>Tahtadan Tukkan</h3>
        <ul>
          <li>Birlik, 410. Sk., 06610 Çankaya/Ankara</li>
          <li>05332360818</li>
          <li>tahtadan@tahtadandukkan.com</li>
        </ul>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 50));
          alert(JSON.stringify(values, null, 2));
          //function yazip bnu firebase1!!!
        }}
      >
        <div className="form-contact">
          <h3>Any questions?</h3>

          <Form>
            <div className="form-contact-input">
              <p>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
              </p>
              <p>
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
              </p>
              <p>
                <label htmlFor="phoneNumber">Mobile</label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="0533 x x x"
                  type="phone"
                />
              </p>
              <p className="full">
                <label htmlFor="message">Message</label>
                <Field
                  id="message"
                  name="message"
                  placeholder="Ask your questions here"
                  type="textarea"
                  rows="5"
                />
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  </div>
);

export default ContactForm;
