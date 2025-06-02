import "./index.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">Instagram</div>
        <div className="icons">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-message"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
