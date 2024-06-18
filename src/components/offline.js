import "../../src/offine.css";

const OfflineComponent = () => {
  return (
    <div className="detector-wrapper">
      <div className="detector">
        <span className="client"></span>
        <span className="signal"></span>
        <span className="server"></span>
      </div>
      <h4 style={{ color: "red" }}>
        You're Offline, Please Check your network connection!!!
      </h4>
    </div>
  );
};

export default OfflineComponent;
