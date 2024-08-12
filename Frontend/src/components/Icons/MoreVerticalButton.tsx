import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MoreVerticalButton() {
  return (
    <button className="text-white text-lg">
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </button>
  );
}
