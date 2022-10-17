import "./App.css";
import NotificationsList from "./components/NotificationsList/NotificationsList";

const notifications = [
  {
    first_name: "Mark",
    last_name: "Webber",
    image: "images/avatar-mark-webber.webp",
    notification: "reaceted to your recent post",
    notification_message: "",
    notification_associated: "My first tournament today!",
    notification_associated_type: "post",
    notification_image: "",
    time: "1 min ago",
    isRed: false,
  },
  {
    first_name: "Angela",
    last_name: "Gray",
    image: "images/avatar-angela-gray.webp",
    notification: "followed you",
    notification_message: "",
    notification_associated: "",
    notification_associated_type: "follow",
    notification_image: "",
    time: "5 min ago",
    isRed: false,
  },
  {
    first_name: "Jacob",
    last_name: "Thompson",
    image: "images/avatar-jacob-thompson.webp",
    notification: "has joined your group",
    notification_message: "",
    notification_associated: "Chess Club",
    notification_associated_type: "group",
    notification_image: "",
    time: "1 day ago",
    isRed: false,
  },
  {
    first_name: "Rizky",
    last_name: "Hasanuddin",
    image: "images/avatar-rizky-hasanuddin.webp",
    notification: "sent you a private message",
    notification_message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    notification_associated: "",
    notification_associated_type: "message",
    notification_image: "",
    time: "5 days ago",
    isRed: true,
  },
  {
    first_name: "Kimberly",
    last_name: "Smith",
    image: "images/avatar-kimberly-smith.webp",
    notification: "commented on your picture",
    notification_message: "",
    notification_associated: "",
    notification_associated_type: "picture",
    notification_image: "images/chess-club.webp",
    time: "1 week ago",
    isRed: true,
  },
  {
    first_name: "Nathan",
    last_name: "Peterson",
    image: "images/avatar-nathan-peterson.webp",
    notification: "reacted to your recent post",
    notification_message: "",
    notification_associated: "5 end-game strategies to increase your win rate",
    notification_associated_type: "post",
    notification_image: "",
    time: "2 weeks ago",
    isRed: true,
  },
  {
    first_name: "Anna",
    last_name: "Kim",
    image: "images/avatar-anna-kim.webp",
    notification: "left the group Chess Club",
    notification_message: "",
    notification_associated: "Chess Club",
    notification_associated_type: "group",
    notification_image: "",
    time: "2 weeks ago",
    isRed: true,
  },
];

function App() {
  return (
    <div className="App">
      <NotificationsList data={notifications} />
    </div>
  );
}

export default App;
