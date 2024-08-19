import { ISong } from "../interfaces/ISong";

const songs = [
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
