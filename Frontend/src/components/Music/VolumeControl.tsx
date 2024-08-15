import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useCallback } from "react";

interface IProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  onMute: (isMuted: boolean) => void;
  isMuted: boolean;
}

export default function VolumeControl({
  volume,
  onVolumeChange,
  onMute,
  isMuted,
}: IProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    onVolumeChange(newVolume);
  };

  const getVolumeIcon = useCallback(() => {
    if (isMuted || volume === 0) {
      return faVolumeMute;
    } else if (volume < 0.5) {
      return faVolumeLow;
    } else {
      return faVolumeHigh;
    }
  }, [isMuted, volume]);

  const toggleVolume = useCallback(() => {
    onMute(!isMuted);
  }, [isMuted, onMute]);

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
        disabled={isMuted}
      />
    </>
  );
}
