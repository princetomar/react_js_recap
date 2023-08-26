import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "Node JS Tutorial",
    imageURL:
      "https://www.freecodecamp.org/news/content/images/2021/10/node4.png",
    views: "10 K",
    time: "1 year ago",
    channel: "Javascript Mastery",
    isChannelVerified: false,
  };
  return (
    <div className="App">
      <div> Videos</div>
      <div>
        <Video {...obj}></Video>

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
        ></Video>
      </div>
    </div>
  );
}

export default App;
