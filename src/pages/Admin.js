import React from "react";
import CommentsPrint from "../components/CommentsPrint";
import ContactsPrint from "../components/ContactsPrint";
import { useUser } from "../context/userContext";
const Admin = () => {
  const user = useUser();
  const isUser = user.isUser;
  console.log(isUser);
  document.querySelectorAll(" h4 * h6 ");
  return (
    <div>
      {isUser ? (
        <div>
          <ContactsPrint />
          <CommentsPrint />
        </div>
      ) : (
        <header>
          <div className="logo-wrapper">
            <span className="logo">Not Authorized!</span>
          </div>
        </header>
      )}
    </div>
  );
};

export default Admin;
