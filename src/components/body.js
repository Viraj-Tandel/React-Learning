import RestaurantListComponent from "./reastaurant-list.js";
import RestaurantComponent from "./restaurant.js";

const BodyComponent = () => {
  return (
    <div className="body-wrapper">
      <div className="res-container">
        <RestaurantListComponent />
      </div>
    </div>
  );
};

export default BodyComponent;
