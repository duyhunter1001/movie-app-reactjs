import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '@pages/HomePage';
import { MovieDetailPage } from '@pages/MovieDetailPage';
import { RootLayout } from '@pages/RootLayout';
import { TVShowDetailPage } from '@pages/TVShowDetailPage';
import { ModalProvider } from '@contexts/ModalProvider';

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
