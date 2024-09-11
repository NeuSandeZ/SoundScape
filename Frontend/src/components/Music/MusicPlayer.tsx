import { useEffect } from "react";
import useMusicPlayer from "../../hooks/useMusicPlayer";
import MusicInfo from "./MusicInfo";
import MusicControls from "./MusicControls";
import MusicProgressBar from "./MusicProgressBar";
import MusicPlayerControls from "./MusicPlayerControls";
import { useMusicPlayerContext } from "../../context/MusicPlayerContext";

export default function MusicPlayer() {
  const { currentSong, isPlaying, togglePlayPause } = useMusicPlayerContext();
  const {
    waveSurferContainerRef,
    currentTime,
    duration,
    isMuted,
    volume,
    handleVolumeChange,
    handleMute,
    setUrl,
  } = useMusicPlayer(currentSong?.url || "", isPlaying);

  useEffect(() => {
    if (currentSong?.url) {
      setUrl(currentSong.url);
    }
  }, [currentSong, setUrl]);

  if (!currentSong) return null;

  return (
    <div className="h-24 fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-7 flex items-center z-50">
      <div className="flex items-center w-full justify-between">
        <MusicInfo author={currentSong.author} name={currentSong.name} />
        <MusicControls
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        />
        <MusicProgressBar
          waveSurferContainerRef={waveSurferContainerRef}
          currentTime={currentTime}
          songDuration={duration}
        />
        <MusicPlayerControls
          onVolumeChange={handleVolumeChange}
          onMute={handleMute}
          isMuted={isMuted}
          volume={volume}
        />
      </div>
    </div>
  );
}
