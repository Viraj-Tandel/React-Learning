import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReastaurantDetailShimmerComponent from "./restaurant-detail-shimmer";
import useRestaurantDetail from "../utils/useRestaurantDetail";

const RestaurantDetailComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { city, name: restaurantName } = useParams(); // Renamed to restaurantName
  const restroDetails = useRestaurantDetail(city, restaurantName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrev = (IMAGES) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length
    );
  };

  const handleNext = (IMAGES) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  if (!restroDetails) {
    return <ReastaurantDetailShimmerComponent />;
  }

  let { IMAGES, RATING } = restroDetails.entities;
  IMAGES = Object.values(IMAGES);
  const { CUISINES } =
    restroDetails.page_data?.sections?.SECTION_RES_HEADER_DETAILS;

  const { name, rating, timing } =
    restroDetails?.page_data?.sections?.SECTION_BASIC_INFO;

  return (
    <div className="container mx-auto my-5 p-5 max-w-screen-lg">
      <div className="relative">
        <div className="carousel relative overflow-hidden rounded-lg shadow-lg h-[60vh] max-h-[600px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
          <span
            className="absolute top-1/2 transform -translate-y-1/2 left-0 w-10 h-full cursor-pointer z-10 bg-black bg-opacity-50 flex items-center justify-center text-white"
            onClick={() => handlePrev(IMAGES)}
          >
            <i className="fas fa-chevron-left"></i>
          </span>
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-0 w-10 h-full cursor-pointer z-10 bg-black bg-opacity-50 flex items-center justify-center text-white"
            onClick={() => handleNext(IMAGES)}
          >
            <i className="fas fa-chevron-right"></i>
          </span>
          <div className="carousel-content flex transition-transform ease-in-out duration-500 h-full">
            {IMAGES.map((img, index) => (
              <img
                src={img.url}
                key={img.photoId}
                alt={name}
                className={`w-full h-full object-contain ${
                  index === currentIndex ? "block" : "hidden"
                } rounded-lg`}
              />
            ))}
          </div>
        </div>
        <div className="details mt-5 p-5 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="mt-1 text-gray-600">{timing.timing_desc}</p>
          <div className="actions flex gap-2 mt-2">
            <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
              Direction
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
              Bookmark
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
              Share
            </button>
          </div>
          <div className="ratings mt-2 flex items-center gap-2">
            <span
              className="px-2 py-1 rounded text-white font-bold"
              style={{ background: `#${rating.rating_color}` }}
            >
              {rating.rating_text}★
            </span>
          </div>
          <div className="cuisines-container mt-5">
            <h4 className="mb-2 font-bold">Cuisines</h4>
            {CUISINES.map((cuisine, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 border border-gray-300 rounded-full bg-gray-100 text-teal-600 cursor-pointer hover:bg-gray-200 transition m-1"
              >
                {cuisine.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailComponent;
