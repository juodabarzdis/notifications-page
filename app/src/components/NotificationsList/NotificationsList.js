import React from "react";
import Notification from "../Notification/Notification";
import "./NotificationsList.css";

const NotificationsList = (props) => {
  const { data, markAllAsRead } = props;

  const unreadNotifications = data.filter(
    (notification) => !notification.isRed
  ).length;

  console.log(unreadNotifications);

  return (
    <div className="notifications-wrapper">
      <div className="notifications__information">
        <div className="notifications__information-left">
          <div>
            <h2>Notifications</h2>
          </div>
          <div className="unread-notifications">{unreadNotifications}</div>
        </div>
        <div className="notifications__btn-container">
          <button className="text-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>
      </div>
      <ul className="notifications__list">
        {data.map((item, index) => {
          return <Notification data={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default NotificationsList;
