import { ISong } from "../../interfaces/ISong";
import Song from "./Song";

export default function MusicList({
  songs,
  onSongSelect,
}: {
  songs: ISong[];
  onSongSelect: (song: ISong) => void;
}) {
  return (
    <ul>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          onSongSelect={() => onSongSelect(song)}
        />
      ))}
    </ul>
  );
}
