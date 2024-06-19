import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantComponent from "./restaurant";
import ShimmerRestaurantWrapperComponent from "./shimmer";

const RestaurantListComponent = () => {
  const [resList, setResList] = useState([]);
  const [allRestro, setAllRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const apiResponse = await fetch(
        "https://reastaurant-api.vercel.app/restaturant"
      );
      const jsonResp = await apiResponse.json();
      setResList(jsonResp.data);
      setAllRestro(jsonResp.data);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchText(input);
    searchRestaurants(input);
  };

  const searchRestaurants = (searchInput) => {
    const filteredList = allRestro.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResList(filteredList);
  };

  const renderRestaurantList = () => (
    <div className="restaurant-list-wrapper flex flex-wrap justify-center">
      {resList.map((res) => (
        <Link key={res.info.resId} to={`/restaurant${res.cardAction.clickUrl}`}>
          <RestaurantComponent data={res} />
        </Link>
      ))}
    </div>
  );

  const renderNoRestaurantsFound = () => (
    <div className="no-restro-found">
      <h3>Restaurant Not Found!!!!!</h3>
    </div>
  );

  const renderShimmerComponent = () => <ShimmerRestaurantWrapperComponent />;

  return (
    <div className="restaurant-list">
      <div className="btn-wrapper flex justify-center m-4 gap-5">
        <input
          type="text"
          className="search-input w-96 p-2 border-solid border border-gray-400 outline-none"
          placeholder="Please type here to search..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {resList.length === 0
        ? searchText
          ? renderNoRestaurantsFound()
          : renderShimmerComponent()
        : renderRestaurantList()}
    </div>
  );
};

// RestaurantListComponent.propTypes = {
//   apiUrl: PropTypes.string.isRequired,
// };

export default RestaurantListComponent;
