import { useState, useCallback, useRef, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";

export default function useMusicPlayer(initialUrl: string) {
  const waveSurferContainerRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState<string>(initialUrl);
  const [duration, setDuration] = useState<number>(0);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: waveSurferContainerRef,
    height: 50,
    waveColor: "grey",
    progressColor: "white",
    url,
    fillParent: true,
  });

  const getSongDuration = useCallback((url: string): Promise<number> => {
    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.addEventListener("loadedmetadata", () => {
        resolve(audio.duration);
      });
    });
  }, []);

  const togglePlayPause = useCallback(() => {
    wavesurfer?.playPause();
  }, [wavesurfer]);

  const handleVolumeChange = useCallback(
    (volume: number) => {
      wavesurfer?.setVolume(volume);
    },
    [wavesurfer]
  );

  useEffect(() => {
    getSongDuration(url).then(setDuration);

    return () => {
      if (wavesurfer) {
        wavesurfer.destroy();
      }
    };
  }, [url, getSongDuration, wavesurfer]);

  return {
    waveSurferContainerRef,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    handleVolumeChange,
    setUrl,
  };
}
