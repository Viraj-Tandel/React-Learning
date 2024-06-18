import { useState } from "react";
import { useEffect } from "react";

const useRestaurantDetail = (city, restaurantName) => {
  const [restroDetail, setRestroDetail] = useState(null);

  useEffect(() => {
    getRestroDetail();
  }, []);

  const getRestroDetail = async () => {
    const response = await fetch(
      `https://www.zomato.com/webroutes/getPage?page_url=${city}/${restaurantName}`
    );
    const json = await response.json();
    setRestroDetail(json);
  };

  return restroDetail;
};

export default useRestaurantDetail;
