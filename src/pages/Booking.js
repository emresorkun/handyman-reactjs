import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { db } from "../firebase/config";
//import { doc, setDoc } from "firebase/firestore";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
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
      await addDoc(collection(db, "contacts"), values);
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
              alert("Your message recieved by the carpenter!");
              //
              await addDoc(collection(db, "contacts"), values);
            }}
          >
            {({ errors, touched }) => (
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

                  {/* <p className="full">
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
                    </p> */}
                  <div></div>
                  <p className="full">
                    <label
                      htmlFor="message"
                      className="form-contact-input-header"
                    >
                      When?
                    </label>
                    <Field
                      id="date"
                      name="date"
                      type="date"
                      rows="5"
                      date={new Date()}
                    />
                    <Field
                      id="time"
                      name="time"
                      type="time"
                      rows="5"
                      date={new Date()}
                    />
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

// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DateTimePicker from "@mui/lab/DateTimePicker";
// //import emailjs from "@emailjs/browser";
// //import emailjs from "@emailjs-com";

// export default function MaterialUIPickers() {
//   const [date, setDate] = React.useState(new Date());

//   const handleChange = (newDate) => {
//     setDate(newDate);
//   };

//   //console.log(date);
//   return (
//     <>
//       <div className="datepicker-container">
//         <div className="datepicker">
//           <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <Stack spacing={3}>
//               <DateTimePicker
//                 variant="dialog"
//                 hintText="Weekends Disabled"
//                 //variant="dialog"
//                 label="Date&Time picker"
//                 value={date}
//                 onChange={handleChange}
//                 //minDateTime={new Date()}
//                 disablePast={true}
//                 minDateTime={new Date().setHours(new Date().getHours() + 6)}
//                 //maxDateTime={new Date().setHours(18)}
//                 maxDate={new Date().setHours(new Date().getHours() + 450)}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//             </Stack>
//           </LocalizationProvider>
//         </div>
//       </div>
//       <div>
//         <h1>{}</h1>
//       </div>
//     </>
//   );
// }
// //input fields for email and number
// //conditional: required info from inputs fields
// //submit button triggers a function
// //add your message body use a mail server
// //sends the email to the carpenter
// //email.js
