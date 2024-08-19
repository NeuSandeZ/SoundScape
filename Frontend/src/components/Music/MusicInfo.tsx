interface IMusicInfoProps {
  name: string;
  author: string;
}
export default function MusicInfo({ author, name }: IMusicInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt={`${name} Cover`}
          className="w-12 h-12 rounded-md"
        />
        <div className="ml-3">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{author}</p>
        </div>
      </div>
    </div>
  );
}
