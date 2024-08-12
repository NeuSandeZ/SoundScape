import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useCallback, useState } from "react";

interface IProps {
  onVolumeChange: (volume: number) => void;
}

export default function VolumeControl({ onVolumeChange }: IProps) {
  const [volume, setVolume] = useState(0.5);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    onVolumeChange(newVolume);
  };

  const getVolumeIcon = useCallback(() => {
    if (volume === 0) {
      return faVolumeMute;
    } else if (volume < 0.5) {
      return faVolumeLow;
    } else {
      return faVolumeHigh;
    }
  }, [volume]);

  const toggleVolume = useCallback(() => {
    if (volume === 0) {
      setVolume(previousVolume);
      onVolumeChange(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      onVolumeChange(0);
    }
  }, [volume, onVolumeChange, previousVolume]);

  return (
    <>
      <button className="text-white text-lg" onClick={toggleVolume}>
        <FontAwesomeIcon icon={getVolumeIcon()} />
      </button>
      <input
        className="range range-xs"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleChange}
      />
    </>
  );
}
