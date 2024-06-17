import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./components/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/error";
import ContactUsComponent from "./components/contact-us";
import AboutUsComponent from "./components/about-us";
import BodyComponent from "./components/body";
import RestaurantDetailComponent from "./components/restaurant-details";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "contact-us",
        element: <ContactUsComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about-us",
        element: <AboutUsComponent />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "restaurant/:city/:name/info",
        element: <RestaurantDetailComponent />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
