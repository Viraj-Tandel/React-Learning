import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className="error-wrapper">
      <h1> Something went wrong!!!</h1>
      <h2 className="error-message">
        {error.status}: {error.statusText}
      </h2>
    </div>
  );
};

export default ErrorComponent;
