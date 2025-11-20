import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./myStyle.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./Components/Home/Home";
import Plants from "./Components/Plants/Plants";
import Profile from "./Components/Authentication/Profile/Profile";
import PlantDetails from "./Components/Plants/PlantDetails";
import AuthenticationLayout from "./Components/Authentication/AuthenticationLayout";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Provider/PrivateRoute";
import Loader from "./Loader";
import RedirectIfAuthenticated from "./Components/Authentication/RedirectIfAuthenticated";
import Error404 from "./Error/Error404";

// promise for plants section
const plantsPromise = fetch("/plants.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "plants",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Plants plantsPromise={plantsPromise}></Plants>
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "plant/details/:id",
        loader: ({ params }) => {
          return fetch("/plants.json")
            .then((res) => res.json())
            .then((data) => data.find((plant) => plant.id === Number(params.id)));
        },
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "auth",
        Component: AuthenticationLayout,
        children: [
          {
            path: "login",
            element: (
              <RedirectIfAuthenticated>
                <Login></Login>
              </RedirectIfAuthenticated>
            ),
          },
          {
            path: "register",
            element: (
              <RedirectIfAuthenticated>
                <Register></Register>
              </RedirectIfAuthenticated>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
