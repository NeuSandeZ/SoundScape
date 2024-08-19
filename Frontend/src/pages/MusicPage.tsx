import { useOutletContext } from "react-router-dom";
import useSongs from "../hooks/useSongs";
import MusicList from "../components/MusicList";
import { ISong } from "../interfaces/ISong";

interface IProps {
  onSelectedSong: (song: ISong) => void;
}
export default function MusicPage() {
  const { onSelectedSong } = useOutletContext<IProps>();
  const { songs } = useSongs("favorites");

  return <MusicList songs={songs} onSongSelect={onSelectedSong} />;
}
