import { formatToMmSs } from "../../services/formatTimeService";

interface IMusicProgressBarProps {
  waveSurferContainerRef: React.RefObject<HTMLDivElement>;
  currentTime: number;
  songDuration: number;
}

export default function MusicProgressBar({
  waveSurferContainerRef,
  currentTime,
  songDuration,
}: IMusicProgressBarProps) {
  return (
    <div className="flex basis-auto items-center flex-grow justify-center">
      <div className="text-gray-400 w-28">
        <span className="px-1">{formatToMmSs(currentTime)}</span>
        <span>/</span>
        <span className="px-1">{formatToMmSs(songDuration)}</span>
      </div>
      <div ref={waveSurferContainerRef} className="w-full" />
    </div>
  );
}
