import HeaderComponent from "./header";
import BodyComponent from "./body";
import FooterComponent from "./footer";
import { Outlet } from "react-router-dom";

const AppComponent = () => {
  return (
    <div className="app-wapper">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
