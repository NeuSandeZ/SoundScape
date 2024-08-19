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
      <div className="text-s text-gray-400 px-5">
        <span className="px-1">{formatToMmSs(currentTime)}</span>
        <span>/</span>
        <span className="px-1">{formatToMmSs(songDuration)}</span>
      </div>
      <div ref={waveSurferContainerRef} className="w-full" />
    </div>
  );
}
