import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Instagram</div>

      <div className="menu">
        <div className="menu-item">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="menu-item">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
        <div className="menu-item">
          <i className="fa-regular fa-compass"></i>
          <span>Explore</span>
        </div>
        <div className="menu-item">
          <i className="fa-solid fa-clapperboard"></i>
          <span>Reels</span>
        </div>
        <div className="menu-item">
          <i className="fa-regular fa-paper-plane"></i>
          <span>Messages</span>
        </div>
        <div className="menu-item">
          <i className="fa-regular fa-heart"></i>
          <span>Notifications</span>
        </div>
        <div className="menu-item">
          <i className="fa-regular fa-square-plus"></i>
          <span>Create</span>
        </div>
        <div className="menu-item">
          <i className="fa-regular fa-user"></i>
          <span>Profile</span>
        </div>
      </div>

      <div className="menu-item more">
        <i className="fa-solid fa-bars"></i>
        <span>More</span>
      </div>
    </div>
  );
};

export default Sidebar;
