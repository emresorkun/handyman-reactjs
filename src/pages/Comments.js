import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import CommentsPrint from "../components/CommentsPrint";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { useUser } from "../context/userContext";

const CommentsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(30, "Too Long!"),
  comment: Yup.string()
    .min(5, "Comments should be longer (min 5 characters..)")
    .max(155, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // phoneNumber: Yup.number()
  //   .min(9, "Too Short!")
  //   .max(15, "Too Long!")
  //   .phoneNumber("Invalid Phone Number")
  //   .required("Required"),
});

const commentsCollectionRef = collection(db, "comments");

function createComment() {
  return;
}
function Comments() {
  useEffect(() => {
    const createComment = async (values) => {
      await addDoc(commentsCollectionRef, values);
    };

    //console.log(createComment().then((e) => console.log(e)));
    //yukardaki console=>ne oluyor anlamak icin
  }, []);
  const user = useUser();
  const isUser = user.isUser;

  return (
    <>
      <CommentsPrint />
      <div className="form-container">
        <h1 className="form-brand">Share Your Comments With Us!</h1>

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
              comment: "",
            }}
            validationSchema={CommentsSchema}
            onSubmit={async (values) => {
              //orignal filedan gelenler asagidaki iki satir
              //await new Promise((r) => setTimeout(r, 50));
              //console.log(values);
              await addDoc(commentsCollectionRef, values);

              //alert(JSON.stringify(values, null, 2));
              //function yazip bnu firebase1!!!
            }}
          >
            {/* <div className="form-contact">
              <h3>Did we already met?</h3>
              <h3>Share what you think about us!</h3> */}
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
                        htmlFor="comment"
                        className="form-contact-input-header"
                      >
                        Comments
                      </label>
                      <Field
                        id="comment"
                        name="comment"
                        placeholder="Please share what your experience with other customers"
                        type="textarea"
                        rows="5"
                      />
                      {errors.comment && touched.comment ? (
                        <div className="errors-input">{errors.comment}</div>
                      ) : null}
                    </p>
                    <p className="full">
                      <button type="submit" onClick={createComment}>
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

export default Comments;
