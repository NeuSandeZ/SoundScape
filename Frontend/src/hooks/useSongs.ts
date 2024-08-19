import { useEffect, useState } from "react";
import { getSongs } from "../services/songService";
import { ISong } from "../interfaces/ISong";

export default function useSongs(slug?: string) {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getSongs();
      setSongs(response);
    };
    fetch();
  }, [slug]);

  return {
    songs,
  };
}
