import DownloadIconButton from "../Icons/DownloadIconButton";
import FavouriteIconButton from "../Icons/FavouriteIconButton";
import MoreVerticalButton from "../Icons/MoreVerticalButton";
import VolumeControl from "./VolumeControl";

interface IProps {
  onVolumeChange: (volume: number) => void;
  onMute: (isMuted: boolean) => void;
  isMuted: boolean;
  volume: number;
}

export default function MusicPlayerControls({
  onVolumeChange,
  onMute,
  isMuted,
  volume,
}: IProps) {
  return (
    <div className="ml-8 items-center">
      <div className="flex items-center space-x-5">
        <DownloadIconButton />
        <FavouriteIconButton />
        <MoreVerticalButton />
        <VolumeControl
          onVolumeChange={onVolumeChange}
          onMute={onMute}
          isMuted={isMuted}
          volume={volume}
        />
      </div>
    </div>
  );
}
