import HeaderComponent from "./header";
import BodyComponent from "./body";
import FooterComponent from "./footer";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineComponent from "./offline";

const AppComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="app-wapper">
      <HeaderComponent />
      {!isOnline ? <OfflineComponent /> : <Outlet />}
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
