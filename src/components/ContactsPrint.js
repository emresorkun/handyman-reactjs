import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { List } from "antd";
import { doc, deleteDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { useUser } from "../context/userContext";

export default function ContactsPrint() {
  const [contacts, setContacts] = useState([]);
  //ask to RAKIP

  //const contactsCollectionRef = collection(db, "contacts");

  // const deleteContact = async (id) => {
  //   contactsCollectionRef
  //     .doc(id)
  //     .console.log(id)
  //     .delete()
  //     .then((result) => {
  //       console.log("Document successfully deleted!");
  //     })
  //     .catch((err) => {
  //       console.error("Error removing document");
  //     });
  // };

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const data = await getDocs(contactsCollectionRef);
  //     setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getContacts();
  // }, []);

  useEffect(
    () =>
      onSnapshot(collection(db, "contacts"), (snapshot) =>
        setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  // const test = async (id, phoneNumber) => {

  //   const commentDoc = doc(db, "contacts", id);
  //   const newFields = { phoneNumber: phoneNumber + 100000 };
  //   await updateDoc(commentDoc, newFields);
  // };

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
          <span className="logo">Master, Here are the contact forms!</span>
        </div>
      </header>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={contacts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.email}
                title={
                  <h6>
                    {item.firstName} {item.lastName} - {item.phoneNumber}
                  </h6>
                }
                description={item.message}
                style={{
                  backgroundColor: "#8b664c",
                  color: "rgba(255, 255, 255, 0.55)",
                  fontSize: "16px",
                }}
              />
              {isUser && (
                <button onClick={() => deleteContact(item.id)}>X</button>
              )}
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
