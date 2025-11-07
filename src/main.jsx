import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./myStyle.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./Components/Home/Home";
import Plants from "./Components/Plants/Plants";
import Profile from "./Components/Profile/Profile";
import PlantDetails from "./Components/Plants/PlantDetails";

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
          <Suspense
            fallback={
              <div className="w-full bg-transparent h-[70vh]  flex flex-col items-center justify-center">
                <p className="text-[#14c214]">Loading...</p>
                <span className="loading loading-spinner text-[#14c214]"></span>
              </div>
            }
          >
            <Plants plantsPromise={plantsPromise}></Plants>
          </Suspense>
        ),
      },
      {
        path: "profile",
        Component: Profile,
      },

      {
        path: "/plant/details/:id",
        loader: ({ params }) => {
          return fetch("/plants.json")
            .then((res) => res.json())
            .then((data) => data.find((plant) => plant.id === Number(params.id)));
        },
        Component: PlantDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
