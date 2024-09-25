import React, { createContext, useContext, useState, useCallback } from "react";
import { ISong } from "../interfaces/ISong";
import useMusicPlayer from "../hooks/useMusicPlayer";

interface MusicPlayerContextType {
  currentSong: ISong | null;
  playSong: (song: ISong) => void;
  togglePlayPause: () => void;
  waveSurferContainerRef: React.RefObject<HTMLDivElement>;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  volume: number;
  isPlaying: boolean;
  handleVolumeChange: (volume: number) => void;
  handleMute: (mute: boolean) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
  undefined
);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<ISong | null>(null);

  const {
    waveSurferContainerRef,
    currentTime,
    duration,
    isMuted,
    volume,
    isPlaying,
    togglePlayPause,
    handleVolumeChange,
    handleMute,
    setUrl,
  } = useMusicPlayer(currentSong?.url || "");

  const playSong = useCallback(
    (song: ISong) => {
      setCurrentSong(song);
      setUrl(song.url);
    },
    [setUrl]
  );

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        playSong,
        togglePlayPause,
        waveSurferContainerRef,
        currentTime,
        duration,
        isMuted,
        volume,
        isPlaying,
        handleVolumeChange,
        handleMute,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayerContext = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error(
      "useMusicPlayerContext must be used within a MusicPlayerProvider"
    );
  }
  return context;
};
