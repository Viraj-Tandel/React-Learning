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
    <div className="pfchangs-container">
      <div className="content">
        <div className="carousel" data-carousel="1" data-speed="2000">
          <span
            className="carousel-control-left"
            onClick={() => handlePrev(IMAGES)}
          >
            <i className="fas fa-chevron-left"></i>
          </span>
          <span
            className="carousel-control-right"
            onClick={() => handleNext(IMAGES)}
          >
            <i className="fas fa-chevron-right"></i>
          </span>
          <div className="carousel-content">
            {IMAGES.map((img, index) => (
              <img
                src={img.url}
                key={img.photoId}
                alt={name}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <div className="details">
          <h1>{name}</h1>
          <p className="open-status">{timing.timing_desc}</p>
          <div className="actions">
            <button>Direction</button>
            <button>Bookmark</button>
            <button>Share</button>
          </div>
          <div className="ratings">
            <span
              className="dining-rating"
              style={{ background: `#${rating.rating_color}` }}
            >
              {rating.rating_text}★
            </span>
          </div>
          <div className="cuisines-container">
            <h4>Cuisines</h4>
            {CUISINES.map((cuisine, index) => (
              <span key={index} className="cuisine-tag">
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
