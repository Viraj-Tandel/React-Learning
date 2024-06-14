import { Link } from "react-router-dom";
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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
