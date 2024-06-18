import useOnlineStatus from "../utils/useOnlineStatus.js";
import OfflineComponent from "./offline.js";
import RestaurantListComponent from "./reastaurant-list.js";

const BodyComponent = () => {
  const online = useOnlineStatus();

  if (!online) {
    return (
      <div className="offline-wrapper">
        <OfflineComponent />
      </div>
    );
  }

  return (
    <div className="body-wrapper">
      <div className="res-container">
        <RestaurantListComponent />
      </div>
    </div>
  );
};

export default BodyComponent;
