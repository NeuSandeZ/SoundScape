import useSongs from "../hooks/useSongs";
import MusicList from "../components/Music/MusicList";

export default function MusicPage() {
  const { songs } = useSongs("favorites");

  return <MusicList songs={songs} />;
}
