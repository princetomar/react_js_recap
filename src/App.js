import "./App.css";
import Video from "./components/Video";
import PlayButton from "./components/playButton/PlayButton";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div> Videos</div>
      <div>
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            imageURL={video.imageURL}
            views={video.views}
            time={video.time}
            channel={video.channel}
            isChannelVerified={video.isChannelVerified}
          ></Video>
        ))}
        <div style={{ clear: "both" }}>
          <PlayButton
            message="Start video"
            onSmash={() => console.log("Playy Button")}
          >
            Play
          </PlayButton>
          <PlayButton
            message="Paused video"
            onSmash={() => alert("Pause Button")}
          >
            Pause
          </PlayButton>
        </div>
      </div>
    </div>
  );
}

export default App;
