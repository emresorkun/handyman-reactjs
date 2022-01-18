import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { Card, List } from "antd";
import { useUser } from "../context/userContext";
import { DeleteOutlined } from "@ant-design/icons";

export default function CommentsPrint() {
  const [comments, setComments] = useState([]);
  //ask to RAKIP
  const [adminButton, setadminButton] = useState("display");
  const commentsCollectionRef = collection(db, "comments");

  // useEffect(() => {
  //   const getComments = async () => {
  //     const data = await getDocs(commentsCollectionRef);
  //     setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(comments);
  //   };

  //   getComments();
  // }, []);

  useEffect(
    () =>
      onSnapshot(collection(db, "comments"), (snapshot) =>
        setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const deleteComment = async (id) => {
    const commentDoc = doc(db, "comments", id);
    console.log(id);
    await deleteDoc(commentDoc)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const user = useUser();
  const isUser = user.isUser;
  console.log(isUser);
  return (
    <>
      <header>
        <div className="logo-wrapper">
          <span className="logo">Customer Comments</span>
        </div>
      </header>
      <div className="comments-container">
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
                  {isUser && (
                    <button onClick={() => deleteComment(item.id)}>
                      <DeleteOutlined />
                    </button>
                  )}
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
