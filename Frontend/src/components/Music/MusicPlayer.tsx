import { useMusicPlayerContext } from "../../context/MusicPlayerContext";
import MusicInfo from "./MusicInfo";
import MusicControls from "./MusicControls";
import MusicProgressBar from "./MusicProgressBar";
import MusicPlayerControls from "./MusicPlayerControls";

export default function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    togglePlayPause,
    waveSurferContainerRef,
    currentTime,
    duration,
    isMuted,
    volume,
    handleVolumeChange,
    handleMute,
  } = useMusicPlayerContext();

  if (!currentSong) return null;

  return (
    <div className="h-24 fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-7 flex items-center z-50">
      <div className="flex items-center w-full">
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
