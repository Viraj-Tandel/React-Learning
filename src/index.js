import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./components/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/error";
import BodyComponent from "./components/body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AboutUsComponent = lazy(() => import("./components/about-us"));

const ContactUsComponent = lazy(() => import("./components/contact-us"));

const RestaurantDetailComponent = lazy(() =>
  import("./components/restaurant-details")
);

const fallbackTemp = () => {
  return (
    <div className="fallback-wrapper">
      <h2>Loading...</h2>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={fallbackTemp()}>
            <ContactUsComponent />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={null}>
            <AboutUsComponent />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:city/:name/info",
        element: (
          <Suspense fallback={null}>
            <RestaurantDetailComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
