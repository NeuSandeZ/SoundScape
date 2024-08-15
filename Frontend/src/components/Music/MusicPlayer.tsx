import { useEffect } from "react";
import useMusicPlayer from "../../hooks/useMusicPlayer";
import MusicInfo from "./MusicInfo";
import MusicControls from "./MusicControls";
import MusicProgressBar from "./MusicProgressBar";
import MusicPlayerControls from "./MusicPlayerControls";

interface IProps {
  audioUrl: string;
}

export default function MusicPlayer({ audioUrl }: IProps) {
  const {
    waveSurferContainerRef,
    isPlaying,
    currentTime,
    duration,
    isMuted,
    volume,
    togglePlayPause,
    handleVolumeChange,
    handleMute,
    setUrl,
  } = useMusicPlayer(audioUrl);

  useEffect(() => {
    if (audioUrl) {
      setUrl(audioUrl);
    }
  }, [audioUrl, setUrl]);

  return (
    <div className="h-24 fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-7 flex items-center z-50">
      <div className="flex items-center w-full justify-between">
        <MusicInfo />
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
