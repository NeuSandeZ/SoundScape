import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MusicPage from "./pages/MusicPage";
import UploadSong from "./components/Music/UploadSong";
import SongDetails from "./components/Music/SongDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/music",
        element: <MusicPage />,
      },
      {
        path: "/music/:id",
        element: <SongDetails />,
      },
      {
        path: "/upload",
        element: <UploadSong />,
      },
    ],
  },
]);
