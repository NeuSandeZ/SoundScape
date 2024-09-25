import { useMusicPlayerContext } from "../../context/MusicPlayerContext";
import { ISong } from "../../interfaces/ISong";
import Song from "./Song";
export default function SongList({ songs }: { songs: ISong[] }) {
  const { playSong, togglePlayPause, currentSong, isPlaying } =
    useMusicPlayerContext();

  const handlePlayPauseClick = (song: ISong) => {
    if (currentSong?.id === song.id) {
      togglePlayPause();
    } else {
      playSong(song);
    }
  };

  return (
    <ul>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          isPlaying={currentSong?.id === song.id && isPlaying}
          onSongSelect={() => handlePlayPauseClick(song)}
        />
      ))}
    </ul>
  );
}
