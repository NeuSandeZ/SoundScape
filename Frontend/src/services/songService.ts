import { ISong } from "../interfaces/ISong";

const songs: ISong[] = [
  {
    id: "1",
    name: "Warm Shadow",
    author: "Rastovich ",
    url: "/warmShadow.mp3",
  },
  {
    id: "2",
    author: "Hotel Pools",
    name: "Hours",
    url: "/hours.mp3",
  },
];

export const getSongs = async (): Promise<ISong[]> => {
  return songs;
};

export const getSong = async (id: string): Promise<ISong | undefined> => {
  return songs.find((song) => song.id === id);
};

export const addSong = async (song: ISong): Promise<void> => {
  songs.push(song);
};
