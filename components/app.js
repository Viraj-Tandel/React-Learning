import HeaderComponent from "./header";
import BodyComponent from "./body";
import FooterComponent from "./footer";

const AppComponent = () => {
  return (
    <div className="app-wapper">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
