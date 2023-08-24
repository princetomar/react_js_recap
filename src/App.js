import Video from "./components/Video";

function App() {
  return (
    <div>
      Hello
      <div>
        <Video
          title="Node JS Tutorial"
          imageURL="https://www.freecodecamp.org/news/content/images/2021/10/node4.png"
        ></Video>

        <Video
          title="Flutter Tutorial"
          imageURL="https://www.freecodecamp.org/news/content/images/2022/02/flutter37.png"
        ></Video>
      </div>
    </div>
  );
}

export default App;
