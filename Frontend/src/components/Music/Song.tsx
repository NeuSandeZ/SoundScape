import {
  faEllipsisVertical,
  faPlay,
  faPause,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISong } from "../../interfaces/ISong";
import { NavLink } from "react-router-dom";

interface ISongProps {
  song: ISong;
  isPlaying: boolean;
  onSongSelect: () => void;
}

export default function Song({ song, isPlaying, onSongSelect }: ISongProps) {
  return (
    <li>
      <div
        className="flex items-center justify-between p-3 bg-gray-800 rounded-md mb-4 hover:bg-gray-700 cursor-pointer transition-all duration-200"
        onClick={onSongSelect}
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            className="text-white mr-3"
          />
          <img
            src="https://via.placeholder.com/50"
            alt={`${song.name} Cover`}
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-3">
            <p className="text-white font-semibold">{song.name}</p>
            <p className="text-gray-400 text-sm">{song.author}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400 text-sm mr-4">02:21</p>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <NavLink
              className="btn btn-ghost btn-circle hover:text-white"
              to={`/music/${song.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
}
