const RestaurantComponent = (props) => {
  const { name, image, rating, cuisine, costText, locality } = props.data.info;
  const { distance } = props.data;
  return (
    <div className="restaurant-card">
      <div className="image-wrapper">
        <img src={image.url} alt="Restaurant" />
      </div>
      <div className="restaurant-info">
        <div className="restaurant-name-wrapper">
          <h2 className="restaurant-name" title={name}>
            {name}
          </h2>
          <span
            className="rating"
            style={{ background: `#${rating.rating_color}` }}
          >
            {rating.rating_text}
            <span className="star">★</span>
          </span>
        </div>
        <div className="cuisine-wrapper">
          <p className="cuisine">
            {cuisine.map((item) => item.name).join(", ")}
          </p>
          <p className="cost-for-two">{costText.text}</p>
        </div>
        <p className="location">{locality.name}</p>
        <div className="additional-info">
          <p className="opening-time">Opens at 12noon</p>
          <span className="distance">{distance}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComponent;
