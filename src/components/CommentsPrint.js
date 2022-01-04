import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { Card, List } from "antd";

export default function CommentsPrint() {
  const [comments, setComments] = useState([]);
  const [adminButton, setadminButton] = useState("display");
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
    <>
      <header>
        <div className="logo-wrapper">
          <span className="logo">Comments from our Customers</span>
        </div>
      </header>
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
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
          }}
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <div className="comments" key={item.id}>
                <div
                  className="site-card-border-less-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "12px",
                  }}
                >
                  <Card
                    className="card"
                    title={item.firstName}
                    bordered={true}
                    style={{ width: 500 }}
                    headStyle={{
                      backgroundColor: "#C76E32",
                      color: "rgba(255, 255, 255, 0.55)",
                    }}
                    bodyStyle={{
                      backgroundColor: "#A87C60",
                    }}
                  >
                    {" "}
                    <div>{item.comment}</div>
                  </Card>
                  <button
                    type="submit"
                    onClick={console.log("clickadsasdasd")}
                    style={{ display: "none" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </List.Item>
          )}
        />
        ,
      </div>
    </>
  );
}
