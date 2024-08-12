import { formatToMmSs } from "../../services/formatTimeService";

interface IProps {
  waveSurferContainerRef: React.RefObject<HTMLDivElement>;
  currentTime: number;
  songDuration: number;
}

export default function MusicProgressBar({
  waveSurferContainerRef,
  currentTime,
  songDuration,
}: IProps) {
  return (
    <div className="sm:flex items-center space-x-4 flex-grow justify-center max-w-xl mx-4">
      <div className="text-s text-gray-400 space-x-2">
        <span>{formatToMmSs(currentTime)}</span>
        <span>/</span>
        <span>{formatToMmSs(songDuration)}</span>
      </div>
      <div ref={waveSurferContainerRef} className="w-full flex-1"></div>
    </div>
  );
}
