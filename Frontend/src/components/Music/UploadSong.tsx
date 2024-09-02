import { faMusic, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadSong() {
  return (
    <div className="gap-4 flex flex-col">
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon={faMusic} />
        <input type="text" className="grow" placeholder="Song name" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon={faUser} />
        <input type="text" className="grow" placeholder="Author name" />
      </label>
      <input
        type="file"
        className="file-input file-input-bordered file-input-warning w-full max-w-xs"
      />
    </div>
  );
}
