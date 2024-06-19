const RestaurantComponent = (props) => {
  const { name, image, rating, cuisine, costText, locality } = props.data.info;
  const { clickUrl } = props.data.cardAction;
  const { distance } = props.data;
  return (
    <div className="restaurant-card w-72 border border-gray-300 rounded-lg m-2.5">
      <div className="image-wrapper w-full h-52 overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          src={image.url}
          alt="Restaurant"
        />
      </div>
      <div className="restaurant-info p-3.5">
        <div className="restaurant-name-wrapper flex justify-between">
          <h2
            className="restaurant-name font-bold text-base whitespace-nowrap overflow-hidden text-ellipsis inline-block w-3/5"
            title={name}
          >
            {name}
          </h2>
          <span
            className="rating text-white text-sm py-1 px-2 rounded-md font-bold"
            style={{ background: `#${rating.rating_color}` }}
          >
            {rating.rating_text}
            <span className="star ml-0.5">★</span>
          </span>
        </div>
        <div className="cuisine-wrapper flex justify-between">
          <p className="cuisine my-1.5 mx-0 text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis inline-block w-3/5">
            {cuisine.map((item) => item.name).join(", ")}
          </p>
          <p className="cost-for-two my-1.5 mx-0 text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {costText.text}
          </p>
        </div>
        <p className="location my-1.5 mx-0 text-gray-600 text-sm text-left">
          {locality.name}
        </p>
        <div className="additional-info flex justify-between items-center my-2.5">
          <p className="opening-time my-1.5 mx-0 text-red-600 text-sm">
            Opens at 12noon
          </p>
          <span className="distance">{distance}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComponent;
