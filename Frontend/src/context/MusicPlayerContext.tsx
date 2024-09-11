import React, { createContext, useContext, useState, useCallback } from "react";
import { ISong } from "../interfaces/ISong";

interface MusicPlayerContextType {
  currentSong: ISong | null;
  isPlaying: boolean;
  playSong: (song: ISong) => void;
  togglePlayPause: () => void;
  setPlaying: (isPlaying: boolean) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<ISong | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSong = useCallback((song: ISong) => {
    setCurrentSong(song);
    setIsPlaying(true);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const setPlaying = useCallback((playing: boolean) => {
    setIsPlaying(playing);
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{ currentSong, isPlaying, playSong, togglePlayPause, setPlaying }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayerContext = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayerContext must be used within a MusicPlayerProvider");
  }
  return context;
};
