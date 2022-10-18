import React from "react";
import "./Notification.css";

const Notification = ({ data }) => {
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

  const isImage = () => {
    if (data.notification_image) {
      return (
        <div className="notification__picture">
          <img src={data.notification_image} alt="image that was reacted" />
        </div>
      );
    }
  };

  return (
    <>
      <li tabindex="0" className={`notification ${isRedStyle()}`}>
        <div className="notification-main">
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
              <span className={classStyle()}>
                {data.notification_associated}
              </span>
            )}
            {!data.isRed && <span className="notification__marker"></span>}
            <div className="notification__time">
              <span>{data.time}</span>
            </div>
          </div>
          {isImage()}
        </div>
        <div className="notification-additional">
          {data.notification_message !== "" && (
            <div className="notification__message">
              <span>{data.notification_message}</span>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default Notification;
