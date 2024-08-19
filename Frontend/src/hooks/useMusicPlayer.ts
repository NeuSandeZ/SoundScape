import { useState, useCallback, useRef, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";

export default function useMusicPlayer(initialUrl: string) {
  const waveSurferContainerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const { wavesurfer, isPlaying, currentTime, isReady } = useWavesurfer({
    container: waveSurferContainerRef,
    height: 50,
    waveColor: "grey",
    progressColor: "white",
    url,
    fillParent: true,
  });

  const togglePlayPause = useCallback(() => {
    wavesurferRef.current?.playPause();
  }, []);

  const handleVolumeChange = useCallback((volume: number) => {
    setVolume(volume);
    wavesurferRef.current?.setVolume(volume);
  }, []);

  const handleMute = useCallback((mute: boolean) => {
    wavesurferRef.current?.setMuted(mute);
    setIsMuted(mute);
  }, []);

  useEffect(() => {
    wavesurferRef.current = wavesurfer;
  }, [wavesurfer]);

  useEffect(() => {
    if (isReady) {
      setDuration(wavesurferRef.current?.getDuration() ?? 0);
      wavesurferRef.current?.play();
    }
  }, [isReady]);

  useEffect(() => {
    if (wavesurferRef.current && url) {
      wavesurferRef.current.load(url);
      return () => {
        wavesurferRef.current?.destroy();
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
