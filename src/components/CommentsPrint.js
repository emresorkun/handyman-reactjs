import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

export default function CommentsPrint() {
  const [comments, setComments] = useState([]);
  const commentsCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
  }, []);
  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return (
          <div>
            {" "}
            <h1>Name: {comment.firstName}</h1>
            <h1>Comment: {comment.comment}</h1>
          </div>
        );
      })}
    </div>
  );
}
