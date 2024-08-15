import { useEffect, useState } from "react";
import MusicPlayer from "../components/Music/MusicPlayer";
import Navigation from "../layouts/layoutsComponents/Navigation";
import { getSongs } from "../services/songService";
import ContentLayout from "../layouts/ContentLayout";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const [songs, setSongs] = useState<{ name: string; url: string }[]>([]);
  const [selectedSong, setSelectedSong] = useState<string>("");

  useEffect(() => {
    setSongs(getSongs());
  }, []);

  const playSong = async (songUrl: string) => {
    setSelectedSong(songUrl);
  };

  return (
    <>
      <Navigation />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <MusicPlayer audioUrl={selectedSong} />
    </>
  );
}
