import { useState, useCallback, useRef, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";

export default function useMusicPlayer(initialUrl: string) {
  const waveSurferContainerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const { wavesurfer, currentTime, isReady } = useWavesurfer({
    container: waveSurferContainerRef,
    height: 50,
    waveColor: "grey",
    progressColor: "white",
    url,
    fillParent: true,
  });

  wavesurfer?.on("finish", () => {
    setIsPlaying(false);
  });

  const handleVolumeChange = useCallback((volume: number) => {
    setVolume(volume);
    wavesurferRef.current?.setVolume(volume);
  }, []);

  const handleMute = useCallback((mute: boolean) => {
    wavesurferRef.current?.setMuted(mute);
    setIsMuted(mute);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prevIsPlaying) => {
      if (prevIsPlaying) {
        wavesurferRef.current?.pause();
      } else {
        wavesurferRef.current?.play();
      }
      return !prevIsPlaying;
    });
  }, []);

  useEffect(() => {
    wavesurferRef.current = wavesurfer;
    return () => {
      wavesurferRef.current?.destroy();
      wavesurferRef.current = null;
    };
  }, [wavesurfer]);

  useEffect(() => {
    if (isReady) {
      setDuration(wavesurferRef.current?.getDuration() ?? 0);
      wavesurferRef.current?.play();
      setIsPlaying(true);
    }
  }, [isReady]);

  useEffect(() => {
    if (wavesurferRef.current && url) {
      wavesurferRef.current.load(url);
      return () => {
        wavesurferRef.current?.destroy();
        wavesurferRef.current = null;
      };
    }
  }, [url]);

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
