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
        ></Video>
      </div>
    </div>
  );
}

export default App;
