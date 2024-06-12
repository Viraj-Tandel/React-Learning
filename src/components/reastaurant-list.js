import RestaurantComponent from "./restaurant";
import resObj from "../utils/mockdata";
import { useState } from "react";

const RestaurantListComponent = (props) => {
  const [resList, setResList] = useState(resObj);

  // * function to filter restaurant
  const filterRestaurant = () => {
    const filteredRes = resList.filter(
      (res) => Number(res.info.rating.rating_text) > 4
    );
    setResList(filteredRes);
  };

  // * function to get all restaurant
  const getAllReastaurant = () => {
    setResList(resObj);
  };

  return (
    <div className="restaurant-list">
      <div className="btn-wrapper">
        <button onClick={filterRestaurant}>GET TOP RATED RESTAURANTS</button>
        <button onClick={getAllReastaurant}>GET ALL RESTAURANTS</button>
      </div>
      <div className="restaurant-list-wrapper">
        {resList.map(function (res) {
          return <RestaurantComponent key={res.info.resId} data={res} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantListComponent;
