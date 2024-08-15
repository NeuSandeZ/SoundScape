import { useState, useCallback, useRef, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";

export default function useMusicPlayer(initialUrl: string) {
  const waveSurferContainerRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState<string>(initialUrl);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: waveSurferContainerRef,
    height: 50,
    waveColor: "grey",
    progressColor: "white",
    url,
    fillParent: true,
    // autoplay: true,
    // duration: duration,
  });

  const togglePlayPause = useCallback(() => {
    wavesurfer?.playPause();
  }, [wavesurfer]);

  const handleVolumeChange = useCallback(
    (volume: number) => {
      setVolume(volume);
      wavesurfer?.setVolume(volume);
    },
    [wavesurfer]
  );

  const handleMute = useCallback(
    (mute: boolean) => {
      wavesurfer?.setMuted(mute);
      setIsMuted(mute);
    },
    [wavesurfer]
  );

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(url);
      return () => {
        wavesurfer.destroy();
      };
    }
  }, [url, wavesurfer]);

  return {
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
  };
}
