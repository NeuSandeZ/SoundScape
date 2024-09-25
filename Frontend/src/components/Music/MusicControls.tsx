import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  isPlaying: boolean;
  togglePlayPause: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MusicControls({ isPlaying, togglePlayPause }: IProps) {
  const handleClick = () => {
    togglePlayPause(!isPlaying);
  };

  return (
    <div className="basis-1/6 items-center space-x-3">
      <button className="text-lg p-2">
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="text-lg w-11 h-11 bg-white rounded-full">
        <FontAwesomeIcon
          className="text-black"
          icon={isPlaying ? faPause : faPlay}
          onClick={handleClick}
        />
      </button>
      <button className="text-lg p-2">
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
