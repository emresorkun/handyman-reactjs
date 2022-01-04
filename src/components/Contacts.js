import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import "antd/dist/antd.css";
import { List } from "antd";

export default function ContactsPrint() {
  const [contacts, setContacts] = useState([]);
  //ask to RAKIP
  const [adminButton, setadminButton] = useState("display");
  const contactsCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(contacts);
    };

    getContacts();
  }, []);
  console.log(contacts);
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
              <button>Solved!</button>
            </List.Item>
          )}
        />
      </div>
    </>
    // <>
    //   <header>
    //     <div className="logo-wrapper">
    //       <span className="logo">Master, Here are the contact forms!</span>
    //     </div>
    //   </header>
    //   <div className="comments-container">
    //     <List
    //       grid={{
    //         gutter: 16,
    //         xs: 1,
    //         sm: 1,
    //         md: 2,
    //         lg: 2,
    //         xl: 3,
    //         xxl: 3,
    //       }}
    //       dataSource={contacts}
    //       renderItem={(item) => (
    //         <List.Item>
    //           <div className="comments" key={item.id}>
    //             <div
    //               className="site-card-border-less-wrapper"
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 margin: "12px",
    //               }}
    //             >
    //               <Card
    //                 className="card"
    //                 title={item.lastName+item.firstName}
    //                 bordered={true}
    //                 style={{ width: 500 }}
    //                 headStyle={{
    //                   backgroundColor: "#C76E32",
    //                   color: "rgba(255, 255, 255, 0.55)",
    //                 }}
    //                 bodyStyle={{
    //                   backgroundColor: "#A87C60",
    //                 }}
    //               >
    //                 {" "}
    //                 <div>{item.comment}</div>
    //               </Card>
    //               <button
    //                 type="submit"
    //                 onClick={console.log("clickadsasdasd")}
    //                 style={{ display: "none" }}
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         </List.Item>
    //       )}
    //     />
    //     ,
    //   </div>
    // </>
  );
}
