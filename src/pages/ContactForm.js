import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";

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

// const createComment = async (values) => {
// await addDoc(commentsCollectionRef, values)
// //Values ;(
// }
//let createComment = {};
function createContact() {
  return;
}
function ContactForm() {
  useEffect(() => {
    const createContact = async (values) => {
      await addDoc(contactsCollectionRef, values);
    };

    //console.log(createComment().then((e) => console.log(e)));
    //yukardaki console=>ne oluyor anlamak icin
  }, []);

  return (
    <>
      <div className="form-container">
        <h1 className="form-brand">Tahtadan Tukkan Contact</h1>
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
            }}
            validationSchema={ContactsSchema}
            onSubmit={async (values) => {
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
                        Message
                      </label>
                      <Field
                        id="message"
                        name="message"
                        placeholder="Any questions?"
                        type="textarea"
                        rows="5"
                      />
                      {errors.message && touched.message ? (
                        <div className="errors-input">{errors.message}</div>
                      ) : null}
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

// import React from "react";
// import { Formik, Field, Form } from "formik";

// const ContactForm = () => (
//   <div className="form-container">
//    <header >
//             <div className="wrapper">
//               <span c  lassName="logo">Write to us!</span>
//             </div>
//           </header>
//     <div className="form-wrapper">

//       <div className="form-company-info">
//         <h3>Tahtadan Tukkan</h3>
//         <ul>
//           <li>Birlik, 410. Sk., 06610 Çankaya/Ankara</li>
//           <li>05332360818</li>
//           <li>tahtadan@tahtadandukkan.com</li>
//         </ul>
//       </div>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           phoneNumber: "",
//           message: "",
//         }}
//         onSubmit={async (values) => {
//           await new Promise((r) => setTimeout(r, 50));
//           alert(JSON.stringify(values, null, 2));
//           //function yazip bnu firebase1!!!
//         }}
//       >
//         <div className="form-contact">
//           <h3>Any questions?</h3>

//           <Form>
//             <div className="form-contact-input">
//               <p>
//                 <label htmlFor="firstName">First Name</label>
//                 <Field id="firstName" name="firstName" placeholder="Jane" />
//               </p>
//               <p>
//                 <label htmlFor="lastName">Last Name</label>
//                 <Field id="lastName" name="lastName" placeholder="Doe" />
//               </p>
//               <p>
//                 <label htmlFor="email">Email</label>
//                 <Field
//                   id="email"
//                   name="email"
//                   placeholder="jane@acme.com"
//                   type="email"
//                 />
//               </p>
//               <p>
//                 <label htmlFor="phoneNumber">Mobile</label>
//                 <Field
//                   id="phone"
//                   name="phone"
//                   placeholder="0533 x x x"
//                   type="phone"
//                 />
//               </p>
//               <p className="full">
//                 <label htmlFor="message">Message</label>
//                 <Field
//                   id="message"
//                   name="message"
//                   placeholder="Ask your questions here"
//                   type="textarea"
//                   rows="5"
//                 />
//               </p>
//               <p className="full">
//                 <button type="submit">Submit</button>
//               </p>
//             </div>
//           </Form>
//         </div>
//       </Formik>
//     </div>
//   </div>
// );

// export default ContactForm;
