import { useState } from "react";
import MusicPlayer from "../components/Music/MusicPlayer";
import Navigation from "../layouts/layoutsComponents/Navigation";
import ContentLayout from "../layouts/ContentLayout";
import { Outlet } from "react-router-dom";
import { ISong } from "../interfaces/ISong";

export default function MainPage() {
  const [selectedSong, setSelectedSong] = useState<ISong | null>(null);

  return (
    <>
      <Navigation />
      <ContentLayout>
        <Outlet context={{ onSelectedSong: setSelectedSong }} />
      </ContentLayout>
      {selectedSong && <MusicPlayer song={selectedSong} />}
    </>
  );
}
