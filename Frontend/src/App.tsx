import { useState } from "react";
import MusicPlayer from "./components/Music/MusicPlayer";

const songs = [
  {
    name: "Warm Shadow",
    url: "/warmShadow.mp3",
  },
  {
    name: "Hours",
    url: "/hours.mp3",
  },
];

const App = () => {
  const [selectedSong, setSelectedSong] = useState("");
  const playSong = (songUrl: string) => {
    setSelectedSong(songUrl);
  };

  return (
    <div>
      <div className="text-3xl font-bold underline text-red-600">
        Hello SoundScape
        <ul>
          <li>
            <button onClick={() => playSong(songs[0].url)}>
              Warm Shadow - click to select (play from the menu)
            </button>
          </li>
          <li>
            <button onClick={() => playSong(songs[1].url)}>
              Hours - click to select
            </button>
          </li>
        </ul>
      </div>
      <MusicPlayer audioUrl={selectedSong} />
    </div>
  );
};

export default App;
