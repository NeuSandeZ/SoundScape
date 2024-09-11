import MusicPlayer from "../components/Music/MusicPlayer";
import Navigation from "../layouts/layoutsComponents/Navigation";
import ContentLayout from "../layouts/ContentLayout";
import { Outlet } from "react-router-dom";
import { MusicPlayerProvider } from "../context/MusicPlayerContext";

export default function MainPage() {
  return (
    <>
    <Navigation />
    <MusicPlayerProvider>
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <MusicPlayer />
    </MusicPlayerProvider>
    </>
  );
}
