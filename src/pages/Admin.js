import React from "react";
import CommentsPrint from "../components/CommentsPrint";
import ContactsPrint from "../components/ContactsPrint";
import { useUser } from "../context/userContext";
const Admin = () => {
  const user = useUser();
  const isUser = user.isUser;
  console.log(isUser);

  return (
    <div>
      {isUser ? (
        <div>
          <ContactsPrint />
          <CommentsPrint />
        </div>
      ) : (
        <div>nONONONONONNOONNONO</div>
      )}
    </div>
  );
};

export default Admin;
