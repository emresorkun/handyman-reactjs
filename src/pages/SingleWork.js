import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import MaterialUIPickers from "./Booking";
import emailjs from "@emailjs/browser";

const ContactsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
  message: Yup.string()
    .min(5, "Please a little longer!! (min 5 characters..)")
    .max(155, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // phoneNumber: Yup.number()
  //   .min(9, "Too Short!")
  //   .max(15, "Too Long!")
  //   .phoneNumber("Invalid Phone Number")
  //   .required("Required"),
});

const contactsCollectionRef = collection(db, "contacts");

function createContact() {
  return;
}
function ContactForm() {
  useEffect(() => {
    const createContact = async (values) => {
      await addDoc(contactsCollectionRef, values);
    };
    createContact();
  }, []);

  return (
    <>
      <header>
        <div className="logo-wrapper">
          <h1 className="logo">Shall we meet?</h1>
        </div>
      </header>{" "}
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-company-info">
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
              date: "",
            }}
            validationSchema={ContactsSchema}
            onSubmit={async (values) => {
              try {
                emailjs.send(
                  "service_ip3ddds",
                  "template_gg1xws7",
                  values,
                  "user_cUzcBR6EjzjIMvKOyhP5p"
                );
              } catch {
                console.log("failed");
              }
              //
              await addDoc(contactsCollectionRef, values);
            }}
          >
            {({ errors, touched }) => (
              <div className="form-contact">
                <Form>
                  <div className="form-contact-input">
                    <p>
                      <label
                        htmlFor="firstName"
                        className="form-contact-input-header"
                      >
                        Name
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        type="firstName"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="errors-input">{errors.firstName}</div>
                      ) : null}
                    </p>
                    <p>
                      <label
                        htmlFor="lastName"
                        className="form-contact-input-header"
                      >
                        Surname
                      </label>
                      <Field id="lastName" name="lastName" placeholder="Doe" />
                      {errors.lastName && touched.lastName ? (
                        <div className="errors-input">{errors.lastName}</div>
                      ) : null}
                    </p>
                    <p>
                      <label
                        htmlFor="email"
                        className="form-contact-input-header"
                      >
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                      />
                      {errors.email && touched.email ? (
                        <div className="errors-input">{errors.email}</div>
                      ) : null}
                    </p>
                    <p>
                      <label
                        htmlFor="phoneNumber"
                        className="form-contact-input-header"
                      >
                        Mobile
                      </label>
                      <Field
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="0533 ..."
                        type="phoneNumber"
                      />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div className="errors-input">{errors.phoneNumber}</div>
                      ) : null}
                    </p>
                    <p className="full">
                      <label
                        htmlFor="message"
                        className="form-contact-input-header"
                      >
                        Choose your prefered date here
                      </label>
                      <Field id="date" name="date" type="date" rows="5" />
                    </p>
                    <p className="full">
                      <label
                        htmlFor="message"
                        className="form-contact-input-header"
                      >
                        Time
                      </label>
                      <Field id="time" name="time" type="time" rows="5" />
                    </p>

                    <p className="full">
                      <button type="submit" onClick={createContact}>
                        Submit
                      </button>
                    </p>
                  </div>
                </Form>
              </div>
            )}
            {/* </div> */}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
