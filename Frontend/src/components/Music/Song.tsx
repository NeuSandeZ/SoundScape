import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISong } from "../../interfaces/ISong";

interface ISongProps {
  song: ISong;
  onSongSelect: () => void;
}

export default function Song({ song, onSongSelect }: ISongProps) {
  return (
    <li>
      <div
        className="flex items-center p-3 bg-gray-800 rounded-md mb-4 hover:bg-gray-700 cursor-pointer transition-all duration-200"
        onClick={onSongSelect}
      >
        <div>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="flex items-center">
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
              <i className="fas fa-download"></i>
            </button>
            <button className="text-gray-400 hover:text-white">
              <i className="fas fa-heart"></i>
            </button>
            <button className="text-gray-400 hover:text-white">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
