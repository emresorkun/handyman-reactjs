import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { Card, List } from "antd";

export default function CommentsPrint() {
  const [comments, setComments] = useState([]);
  const commentsCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(comments);
    };

    getComments();
  }, []);
  return (
    <div className="comments-container">
      {/* {comments.map((comment) => {
        return (
          <div className="comments" key={comment.id}>
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
      })} */}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={comments}
        renderItem={(item) => (
          <List.Item>
            <div className="comments" key={item.id}>
              <div className="site-card-border-less-wrapper">
                <Card
                  title={item.firstName}
                  bordered={true}
                  style={{ width: 200 }}
                >
                  {" "}
                  <div>{item.comment}</div>
                </Card>
              </div>
            </div>
          </List.Item>
        )}
      />
      ,
    </div>
  );
}
