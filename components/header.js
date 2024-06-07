const HeaderComponent = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img
          style={{ height: "30px" }}
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="website-logo"
        />
      </div>
      <div className="search-bar-wrapper">
        <input type="text" placeholder="Please type here to search..." />
      </div>
    </div>
  );
};

export default HeaderComponent;
