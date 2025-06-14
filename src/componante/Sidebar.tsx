import "../App.css";
import InstaLogo from "../assets/toppng.com-instagram-word-logo-2400x678.png";

const Sidebar = () => {
  return (
    <div className="sid-container">
      <div className="logo">
        <img src={InstaLogo} />
      </div>
      <div className="sid-list">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>Reel</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>Notifications</a>
          </li>
          <li>
            <a>Create</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
      <div className="sid-footer">
        <ul>
          <li>
            <a>threads</a>
          </li>
          <li>
            <a>More</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
