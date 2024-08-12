import MusicPlayer from "./components/Music/MusicPlayer";

const App = () => {
  return (
    <div>
      <div className="text-3xl font-bold underline text-red-600">
        Hello SoundScape
      </div>
      <MusicPlayer audioUrl="/warmShadow.mp3" />
    </div>
  );
};

export default App;
