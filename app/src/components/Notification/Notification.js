import React from "react";
import "./Notification.css";

const Notification = ({ data }) => {
  console.log(data);

  const classStyle = () => {
    if (data.notification_associated_type === "post") {
      return "notification__associated_type_post";
    } else if (data.notification_associated_type === "group") {
      return "notification__associated_type_group";
    } else if (data.notification_associated_type === "picture") {
      return "notification__associated_type_picture";
    } else if (data.notification_associated_type === "message") {
      return "notification__associated_type_message";
    }
  };

  const isRedStyle = () => {
    if (!data.isRed) {
      return "notification__isRed";
    } else {
      return "notification";
    }
  };

  return (
    <>
      <li className={`notification ${isRedStyle()}`}>
        <div className="notification__user-image">
          <img src={data.image} alt="avatar" />
        </div>
        <div>
          <span className="notification__user-name">
            {data.first_name + " " + data.last_name + " "}
          </span>
          <span className="notification__notification-text">
            {data.notification + " "}
          </span>
          {data.notification_associated !== "" && (
            <span className={classStyle()}>{data.notification_associated}</span>
          )}
        </div>
      </li>
    </>
  );
};

export default Notification;
