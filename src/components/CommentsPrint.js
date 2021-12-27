import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { Card } from "antd";

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
          <div className="comments">
            <div className="site-card-border-less-wrapper">
              <Card
                title={comment.firstName}
                bordered={true}
                style={{ width: 300 }}
              >
                {" "}
                <div>{comment.comment}</div>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
