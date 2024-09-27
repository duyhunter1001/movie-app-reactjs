import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '@pages/HomePage';
import { MovieDetailPage } from '@pages/MovieDetailPage';
import { RootLayout } from '@pages/RootLayout';
import { TVShowDetailPage } from '@pages/TVShowDetailPage';
import { ModalProvider } from '@contexts/ModalProvider';
import { PeoplePage } from '@pages/PeoplePage';
import { fetchWithToken } from '@helpers/fetcher';

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
      }
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
