import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MusicPage from "./pages/MusicPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/music",
        element: <MusicPage />,
      },
    ],
  },
]);
