import "./App.css";
import Video from "./components/Video";
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
        ;
        {/* <Video {...videos}></Video>
        <Video
          title="Flutter Tutorial"
          imageURL="https://www.freecodecamp.org/news/content/images/2022/02/flutter37.png"
          views="20 K"
          time="4 months ago"
          channel="CodeFreeCamp.Org"
          isChannelVerified={true}
        ></Video>
        <Video
          title="Workout Full Body"
          imageURL="https://i.ytimg.com/vi/fglC-9n0Ofk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDX7WpmEHjqObybvVvZln7iUA_j4g"
          views="120 K"
          time="3 months ago"
          channel="MenWithHonour"
          isChannelVerified={true}
        ></Video> */}
      </div>
    </div>
  );
}

export default App;
