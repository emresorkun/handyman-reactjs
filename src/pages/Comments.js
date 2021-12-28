import React from "react";
import { Formik, Field, Form } from "formik";
import CommentsPrint from "../components/CommentsPrint";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const createComment = async () => {
  //await setDoc(doc(db, "tehtadan-tukkan", "comments"), {
  db.collection("comments")
    .doc("newDoc")
    .set({
      comment: "rest",
      email: "karolina@test",
      firstName: "karo",
      lastName: "hanss",
      phoneNumber: "056633322",
    })
    .then(() => {
      console.log("succes");
    })
    .catch((error) => {
      console.log("NOOOOO");
    });
};
function Comments() {
  return (
    <>
      <CommentsPrint />
      <div className="form-container">
        <h1 className="form-brand">Tahtadan Tukkan Contact</h1>
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
              comment: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 50));
              console.log(values);

              //alert(JSON.stringify(values, null, 2));
              //function yazip bnu firebase1!!!
            }}
          >
            <div className="form-contact">
              <h3>Did we already met?</h3>
              <h3>Share what you think about us!</h3>
              <Form>
                <div className="form-contact-input">
                  <p>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="Jane"
                      type="firstName"
                    />
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
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="0533 x x x"
                      type="phoneNumber"
                    />
                  </p>
                  <p className="full">
                    <label htmlFor="comment">Comments</label>
                    <Field
                      id="comment"
                      name="comment"
                      placeholder="Please share what your experience with other customers"
                      type="textarea"
                      rows="5"
                    />
                  </p>
                  <p className="full">
                    <button type="submit" onClick={createComment}>
                      Submit
                    </button>
                  </p>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Comments;
