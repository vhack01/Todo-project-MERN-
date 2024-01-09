import logo from "../assets/to-do-list.png";
import "../style.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
          <div className="header__title">Todo </div>
        </div>
        <div className="header__addButton">Add Task</div>
      </div>
    </>
  );
};

export default Header;
