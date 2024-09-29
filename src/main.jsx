import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from '@pages/RootLayout';
import { ModalProvider } from '@contexts/ModalProvider';
import { fetchWithToken } from '@helpers/fetcher';

const HomePage = lazy(() => import("@pages/HomePage"));
const MovieDetailPage = lazy(() => import("@pages/MovieDetailPage"));
const TVShowDetailPage = lazy(() => import("@pages/TVShowDetailPage"));
const PeoplePage = lazy(() => import("@pages/PeoplePage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "/tv-show/:id",
        element: <TVShowDetailPage />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetchWithToken({
            endpoint: `/person/${params.id}?append_to_response=combined_credits`,
          });
          return res;
        }
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>,
);
