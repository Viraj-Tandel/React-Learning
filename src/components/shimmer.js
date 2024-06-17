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
      {Array.from({ length: 36 }).map((_, index) => (
        <ShimmerRestaurantComponent key={index} />
      ))}
    </div>
  );
};

export default ShimmerRestaurantWrapperComponent;
