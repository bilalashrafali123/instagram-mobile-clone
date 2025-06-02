import "./index.scss";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="current-user">
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" />
        <div className="user-info">
          <span className="username">bilal_dev</span>
          <span className="name">Bilal Ahmed</span>
        </div>
        <span className="switch">Switch</span>
      </div>
      <div className="suggestions-header">
        <span>Suggested for you</span>
        <span className="see-all">See All</span>
      </div>
      <div className="suggestion">
        <img
          src="https://randomuser.me/api/portraits/women/12.jpg"
          alt="User"
        />
        <div className="user-info">
          <span className="username">zara_k</span>
          <span className="reason">Follows you</span>
        </div>
        <span className="follow">Follow</span>
      </div>
      <div className="suggestion">
        <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="User" />
        <div className="user-info">
          <span className="username">ahmed.tech</span>
          <span className="reason">New on Instagram</span>
        </div>
        <span className="follow">Follow</span>
      </div>
      <div className="suggestion">
        <img
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt="User"
        />
        <div className="user-info">
          <span className="username">sana_ui</span>
          <span className="reason">Followed by sara + 2 more</span>
        </div>
        <span className="follow">Follow</span>
      </div>
      <footer className="footer-section">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Page</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
          <a href="#">Meta</a>
          <a href="#">MetaAI</a>
        </div>
        <div className="footer-copyright-section">
         &nbsp;
          <a href="">&copy; 2025 Instagram from Meta</a>
        </div>
      </footer>
    </div>
  );
};

export default RightSidebar;
