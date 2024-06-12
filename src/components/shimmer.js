const ShimmerRestaurantComponent = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-image-wrapper"></div>
      <div className="shimmer-text shimmer-name"></div>
      <div className="shimmer-text shimmer-rating"></div>
      <div className="shimmer-text shimmer-line"></div>
      <div className="shimmer-text shimmer-short-line"></div>
      <div className="shimmer-text shimmer-line"></div>
      <div className="shimmer-text shimmer-short-line"></div>
    </div>
  );
};

const ShimmerRestaurantWrapperComponent = () => {
  return (
    <div className="shimmer-list-wrapper">
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
      <ShimmerRestaurantComponent />
    </div>
  );
};

export default ShimmerRestaurantWrapperComponent;
