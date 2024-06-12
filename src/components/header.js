import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img style={{ height: "30px" }} src={LOGO_URL} alt="website-logo" />
      </div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
