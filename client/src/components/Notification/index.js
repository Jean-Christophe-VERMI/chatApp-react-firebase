import React, { useEffect, useState} from 'react';
import { db, storage } from "../../firebase";

//Style
import NotificationStyle from './NotificationStyle';

const Notification = ({}) => {
  
  const recipientName = localStorage.getItem('recipientName');
  const firstId = localStorage.getItem('name1');
  const secondId = localStorage.getItem('name2');
  const [newMsgNbr, setNewMsgNbr] = useState(0);

  useEffect(() => {
    /* db.collection("conversations").where("state", "==", "CA")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    }); 
    setNewMsgNbr
    */
  }, [])


  return (
    <NotificationStyle>
      <div>{newMsgNbr}</div>
    </NotificationStyle>
  );

}

export default Notification;
