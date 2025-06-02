import "./index.scss";

const Feed = () => {
  return (
    <div className="container">
      <div className="feed">
        <div className="post">
          <div className="post-header">
            <img
              src="https://images.unsplash.com/photo-1620781443478-e64b816a1398?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="profile-pic"
            />
            <span className="username">zara_k</span>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="post-image">
            <img
              src="https://images.unsplash.com/photo-1620781443478-e64b816a1398?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="post"
            />
          </div>
          <div className="post-actions">
            <div className="left">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment"></i>
              <i className="fa-regular fa-paper-plane"></i>
            </div>
            <i className="fa-regular fa-bookmark"></i>
          </div>
          <div className="post-likes">
            Liked by <b>ahmed_92</b> and others
          </div>
          <div className="post-caption">
            <b>zara_k</b> What a beautiful sunset!
          </div>
          <div className="post-time">2 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
