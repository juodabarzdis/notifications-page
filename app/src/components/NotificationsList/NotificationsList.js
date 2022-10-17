import React from "react";
import Notification from "../Notification/Notification";
import "./NotificationsList.css";

const NotificationsList = (props) => {
  const { data } = props;

  return (
    <div className="notifications-container">
      <ul>
        {data.map((item, index) => {
          return <Notification data={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default NotificationsList;
