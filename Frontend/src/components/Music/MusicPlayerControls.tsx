import DownloadIconButton from "../Icons/DownloadIconButton";
import FavouriteIconButton from "../Icons/FavouriteIconButton";
import MoreVerticalButton from "../Icons/MoreVerticalButton";
import VolumeControl from "./VolumeControl";

interface IProps {
  onVolumeChange: (volume: number) => void;
}

export default function MusicPlayerControls({ onVolumeChange }: IProps) {
  return (
    <div className="flex items-center">
      <div className="md:flex items-center space-x-5">
        <DownloadIconButton />
        <FavouriteIconButton />
        <MoreVerticalButton />
        <VolumeControl onVolumeChange={onVolumeChange} />
      </div>
    </div>
  );
}
