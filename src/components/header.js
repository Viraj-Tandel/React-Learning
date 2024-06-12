import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img style={{ height: "30px" }} src={LOGO_URL} alt="website-logo" />
      </div>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Please type here to search..."
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
