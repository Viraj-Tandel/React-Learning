import RestaurantComponent from "./restaurant";
import { useEffect, useState } from "react";
import ShimmerRestaurantWrapperComponent from "./shimmer";
import { Link } from "react-router-dom";

const RestaurantListComponent = (props) => {
  const [resList, setResList] = useState([]);
  const [allRestro, setAllRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    getAllReastaurantApi();
  }, []);

  async function getAllReastaurantApi() {
    try {
      const apiResponse = await fetch(
        "https://reastaurant-api.vercel.app/restaturant"
      );
      const jsonResp = await apiResponse.json();
      setResList(jsonResp.data);
      setAllRestro(jsonResp.data);
    } catch (e) {
      // throw e;
    }
  }

  // * function to filter restaurant
  const filterRestaurant = () => {
    const filteredRes = resList.filter(
      (res) => Number(res.info.rating.rating_text) > 4
    );
    setResList(filteredRes);
  };

  // * search button click handler
  const searchButtonHandler = (searchInput) => {
    const searchList = allRestro.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchList.length !== 0) {
      setResList(searchList);
    } else {
      alert("No Reastaurant Found!!!!");
      setSearchText("");
      setResList(allRestro);
    }
  };

  if (resList.length === 0) {
    return (
      <>
        <div className="btn-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Please type here to search..."
          />
          <button>SEARCH</button>
          <button>GET TOP RATED RESTAURANTS</button>
        </div>
        <ShimmerRestaurantWrapperComponent />
      </>
    );
  }

  return (
    <div className="restaurant-list">
      <div className="btn-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Please type here to search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={() => searchButtonHandler(searchText)}>SEARCH</button>
        <button onClick={filterRestaurant}>GET TOP RATED RESTAURANTS</button>
      </div>
      <div className="restaurant-list-wrapper">
        {resList.map(function (res) {
          return (
            <Link
              key={res.info.resId}
              to={`/restaurant${res.cardAction.clickUrl}`}
            >
              <RestaurantComponent data={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantListComponent;
