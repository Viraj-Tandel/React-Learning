import React from "react";
import "../../src/restrodetail.css";

const RestaurantDetailShimmerComponent = () => {
  return (
    <div className="pfchangs-container shimmer">
      <div className="content">
        <div className="shimmer-carousel shimmer"></div>
        <div className="details">
          <div className="shimmer-title shimmer"></div>
          <div className="shimmer-text shimmer shimmer-status"></div>
          <div className="actions">
            <div className="shimmer-button shimmer"></div>
            <div className="shimmer-button shimmer"></div>
            <div className="shimmer-button shimmer"></div>
          </div>
          <div className="ratings">
            <div className="shimmer-rating shimmer"></div>
          </div>
          <div className="cuisines-container">
            <div className="shimmer-cuisine shimmer"></div>
            <div className="shimmer-cuisine shimmer"></div>
            <div className="shimmer-cuisine shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailShimmerComponent;
