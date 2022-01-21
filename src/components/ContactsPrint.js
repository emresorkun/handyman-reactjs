import { collection } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { List } from "antd";
import { doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { useUser } from "../context/userContext";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button } from "antd";

export default function ContactsPrint() {
  const [contacts, setContacts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "contacts"), (snapshot) =>
        setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const deleteContact = async (id) => {
    const commentDoc = doc(db, "contacts", id);
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
          <span className="logo">Contact Forms</span>
        </div>
      </header>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={contacts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <div>
                    <h6>
                      {item.firstName} {item.email}
                    </h6>
                    <h6>{item.phoneNumber}</h6>
                  </div>
                }
                description={item.message}
                style={{
                  backgroundColor: "#8b664c",
                  color: "rgba(255, 255, 255, 0.55)",
                  fontSize: "16px",
                }}
              />
              {isUser && (
                <div>
                  <Button
                    danger
                    type="primary"
                    shape="round"
                    icon={<DeleteOutlined />}
                    onClick={() => deleteContact(item.id)}
                  />
                </div>
              )}
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
