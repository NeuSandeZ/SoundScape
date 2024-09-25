import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMusicPlayer from "../../hooks/useMusicPlayer";
import { ISong } from "../../interfaces/ISong";
import { getSong } from "../../services/songService";

export default function SongDetails() {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<ISong | null>(null);
  const {
    waveSurferContainerRef,
    isPlaying,
    currentTime,
    duration,
    handleMute,
    handleVolumeChange,
    setUrl,
  } = useMusicPlayer("", false);

  useEffect(() => {
    const loadSong = async () => {
      if (id) {
        const fetchedSong = await getSong(id);
        if (fetchedSong) {
          setSong(fetchedSong);
          setUrl(fetchedSong.url);
        }
      }
    };

    loadSong();
  }, [id, setUrl]);

  if (!song) return <div>Loading...</div>;

  return (
    <div className="song-details">
      <h1>
        {song.name} by {song.author}
      </h1>
      <div ref={waveSurferContainerRef} />
      <div>
        <button onClick={() => handleMute(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <p>
          Current Time: {currentTime} / {duration}
        </p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
