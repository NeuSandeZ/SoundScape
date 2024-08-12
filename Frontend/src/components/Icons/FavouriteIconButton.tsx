import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavouriteIconButton() {
  return (
    <button className="text-white text-lg hidden sm:block">
      <FontAwesomeIcon icon={faStar} />
    </button>
  );
}
